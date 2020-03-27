// @ts-nocheck
import { writeFileSync } from 'fs'
import { join } from 'path'

import tokens from '@uswitch/trustyle.money-theme'

import packageJson from '../package.json'

import composeTheme from '.'


const { cwd } = process
const brands = ['money']

console.log('packageJson', packageJson)

brands.map(brand =>
  writeFileSync(
    join(cwd(), `lib/${brand}-theme.json`),
    composeTheme({
      tokens,
      brand,
      packageJson,
      nodeModulesPath: '../node_modules',
      dependencyType: 'devDependencies'
    })
  )
)
