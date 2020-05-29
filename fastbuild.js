/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const Project = require('@lerna/project')
const QueryGraph = require('@lerna/query-graph')
const globIgnore = require('glob-gitignore')
const ignore = require('ignore')
const execa = require('execa')
const commonPrefix = require('common-prefix')

const { glob } = globIgnore

const CWD = process.cwd()
const TSCONFIG_FILENAME = 'tsconfig.json'
const IGNORE_FILENAME = '.buildignore'
const OUT_DIR = './lib'
const PACKAGE_GLOB = 'src/**/*.{ts,tsx}'

const tsconfig = () =>
  JSON.parse(readFileSync(path.join(CWD, TSCONFIG_FILENAME)))

const buildIgnore = () => {
  let rules = ''

  try {
    rules = readFileSync(path.join(CWD, IGNORE_FILENAME)).toString()
  } catch (e) {
    if (e.code !== 'ENOENT') {
      throw e
    }
  }

  return ignore().add(rules)
}

const splitIterations = async graph => {
  let readyPackages = await graph.getAvailablePackages()
  const iterations = []

  while (readyPackages.length > 0) {
    iterations.push(readyPackages)

    // Mark these packages as complete on the graph
    readyPackages.forEach(package => graph.markAsDone(package))
    readyPackages = await graph.getAvailablePackages()
  }

  return iterations
}

const calcIncludes = location =>
  glob([path.relative(CWD, path.join(location, PACKAGE_GLOB))], {
    cwd: CWD,
    ignore: buildIgnore()
  })

const cleanPackages = locations =>
  Promise.all([
    ...locations.map(location =>
      execa.command(`rm -rf ${path.join(location, OUT_DIR)}`, {
        stdio: 'inherit'
      })
    ),
    execa.command(`rm -rf ${path.join(CWD, OUT_DIR)}`, { stdio: 'inherit' })
  ])

const copyBuiltFiles = async location => {
  const includes = await calcIncludes(location)

  if (includes.length === 0) {
    return
  }

  const paths = includes.map(include => path.parse(include).dir)
  const fromRelative = commonPrefix(paths)
  const from = path.join(CWD, OUT_DIR, fromRelative)
  const to = path.join(location, OUT_DIR)

  return execa.command(`cp -r ${from} ${to}`, { stdio: 'inherit' })
}

const isCustomBuild = location => {
  const packageJson = JSON.parse(
    readFileSync(path.join(location, 'package.json'))
  )

  return packageJson.scripts && packageJson.scripts.build
}

const customBuild = async location => {
  await execa.command(`npm run clean`, {
    cwd: location,
    stdio: 'inherit'
  })
  await execa.command(`npm run build`, {
    cwd: location,
    stdio: 'inherit'
  })
}

const buildIteration = async (iteration, n) => {
  const allLocations = iteration.map(package => package.location)
  const locations = allLocations.filter(location => !isCustomBuild(location))
  const customLocations = allLocations.filter(isCustomBuild)

  console.log(`Build iteration ${n}: ${locations.length} packages`)

  const filename = `${TSCONFIG_FILENAME}.${n}`
  const include = (
    await Promise.all(locations.map(location => calcIncludes(location)))
  ).reduce((acc, arr) => acc.concat(arr), [])
  const iterationTsconfig = {
    ...tsconfig(),
    compilerOptions: {
      ...tsconfig().compilerOptions,
      rootDir: CWD,
      outDir: OUT_DIR
    },
    include
  }

  writeFileSync(
    path.join(CWD, filename),
    JSON.stringify(iterationTsconfig, null, 4)
  )

  if (include.length > 0) {
    await execa.command(`npx tsc --project ${filename}`, {
      stdio: 'inherit'
    })
  }

  for (const location of locations) {
    await copyBuiltFiles(location)
  }

  if (customLocations.length > 0) {
    console.log(`Build iteration ${n}: ${customLocations.length} custom builds`)

    for (const location of customLocations) {
      await customBuild(location)
    }
  }
}

const build = async () => {
  const project = new Project(CWD)
  const packages = await project.getPackages()
  const graph = new QueryGraph(packages, {
    graphType: 'allDependencies',
    rejectCycles: false
  })
  const locations = packages.map(package => package.location)
  const iterations = await splitIterations(graph)

  await cleanPackages(locations)

  for (let i = 0; i < iterations.length; i++) {
    await buildIteration(iterations[i], i)
  }
}

build().catch(e => {
  console.error(`Build failed: ${String(e)}`)
  process.exit(1)
})
