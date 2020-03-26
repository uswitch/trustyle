import { writeFileSync } from 'fs'
import { join } from 'path'

import composeTheme from '.'

const { cwd } = process

writeFileSync(join(cwd(), 'lib/money-theme.json'), composeTheme('money'))
