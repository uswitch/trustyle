// @ts-nocheck
import { writeFileSync } from 'fs'
import { join } from 'path'

import packageJson from '../package.json'

import composeTheme from '.'

const { cwd } = process
const brands = ['money']

brands.map(brand =>
  writeFileSync(
    join(cwd(), `src/${brand}-theme.json`),
    composeTheme({
      brand,
      packageJson,
      nodeModulesPath: '../node_modules',
      dependencyType: 'devDependencies'
    })
  )
)
