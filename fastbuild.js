const Project = require('@lerna/project')
const QueryGraph = require('@lerna/query-graph')
const execa = require('execa')
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()

const tsconfig = JSON.parse(fs.readFileSync(path.join(cwd, 'tsconfig.json')))

const cores = Math.min(require('os').cpus().length, 2)

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

// https://stackoverflow.com/questions/8188548/splitting-a-js-array-into-n-arrays
const splitToChunks = (array, parts) => {
  let result = []
  for (let i = parts; i > 0; i--) {
    result.push(array.slice(0, Math.ceil(array.length / i)))
  }
  return result
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
    const filteredPackages = readyPackages.filter(package =>
      fs.existsSync(path.join(package.location, 'tsconfig.json'))
    )

    const dirs = filteredPackages.map(package => package.location)
    const configs = dirs.map(dir => {
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

    const partitions = splitToChunks(configs, cores)

    console.log(
      `Build iteration ${++it}: ${filteredPackages.length} packages (${
        partitions.length
      } partitions)`
    )

    await Promise.all(
      partitions.map((config, ind) => {
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
        const configFilename = `tsconfig.${it}.${ind}.json`

        fs.writeFileSync(
          path.join(cwd, configFilename),
          JSON.stringify(buildTsconfig, null, 4)
        )

        return execa.command(`npx tsc --project ${configFilename}`)
      })
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
