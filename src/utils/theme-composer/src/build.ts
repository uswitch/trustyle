// @ts-nocheck
import { writeFileSync } from 'fs'
import { join } from 'path'

import packageJson from '../package.json'

import composeTheme from '.'

const { cwd } = process
const brands = ['money', 'uswitch', 'save-on-energy']

brands.map(brand =>
  writeFileSync(
    join(cwd(), `lib/${brand}-theme.json`),
    composeTheme({
      brand,
      packageJson,
      nodeModulesPath: '../node_modules',
      dependencyType: 'devDependencies'
    })
  )
)
