// @ts-nocheck
import { writeFileSync } from 'fs'
import { join } from 'path'
import composeTheme from '.'
import packageJSON from '../package.json'

const { cwd } = process
const brands = ['money']

brands.map(brand =>
  writeFileSync(
    join(cwd(), `lib/${brand}-theme.json`), 
    composeTheme(brand, packageJSON, '../node_modules', 'devDependencies')
  )
)
