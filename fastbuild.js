const Project = require('@lerna/project')
const QueryGraph = require('@lerna/query-graph')
const execa = require('execa')
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()

const tsconfig = JSON.parse(fs.readFileSync(path.join(cwd, 'tsconfig.json')))

const toConfig = (tsconfig, dir) => {
  const config = { dir, include: [] }

  if (tsconfig.compilerOptions && tsconfig.compilerOptions.outDir) {
    config.outDir = path.join(dir, tsconfig.compilerOptions.outDir)
  }

  ;(tsconfig.include || []).forEach(include => {
    config.include.push(path.join(dir, include))
  })

  return config
}

;(async () => {
  const project = new Project(cwd)
  const packages = await project.getPackages()
  // const packageGraph = new PackageGraph(packages);
  const graph = new QueryGraph(packages, {
    graphType: 'allDependencies',
    rejectCycles: false
  })

  let readyPackages = await graph.getAvailablePackages()
  let it = 0

  while (readyPackages.length > 0) {
    console.log(`Build iteration ${++it}: ${readyPackages.length} packages`)

    // TODO group by the tsconfig.json variants (if necessary)
    const dirs = readyPackages.map(package => package.location)
    const configs = dirs
      .filter(dir => fs.existsSync(path.join(dir, 'tsconfig.json')))
      .map(dir => {
        try {
          console.log(path.join(dir, 'tsconfig.json'))

          return toConfig(
            JSON.parse(fs.readFileSync(path.join(dir, 'tsconfig.json'))),
            dir
          )
        } catch (e) {
          console.log(dir, e)
          throw e
        }
      })

    const buildTsconfig = {
      ...tsconfig,
      compilerOptions: {
        ...tsconfig.compilerOptions,
        rootDir: '.',
        outDir: 'lib'
      },
      include: configs
        .map(config => config.include)
        .reduce((acc, arr) => acc.concat(arr), [])
    }
    const configFilename = `tsconfig.${it}.json`

    fs.writeFileSync(
      path.join(cwd, configFilename),
      JSON.stringify(buildTsconfig, null, 4)
    )

    const { stdout } = await execa.command(
      `npx tsc --project ${configFilename}`
    )

    await Promise.all(
      configs.map(config =>
        (async () => {
          // TODO should not hardcode /src/ here, need to work it out for each include.
          const from = path.join(
            cwd,
            'lib',
            path.relative(cwd, config.dir),
            '/src/'
          )
          const to = config.outDir
          const command = `cp -r ${from} ${to}`

          console.log(command)

          await execa.command(command)
        })()
      )
    )

    console.log('Done')

    // Mark these packages as complete on the graph
    readyPackages.forEach(package => graph.markAsDone(package))
    readyPackages = await graph.getAvailablePackages()
  }
})()
