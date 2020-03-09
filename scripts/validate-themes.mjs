import fs from 'fs'

import Ajv from 'ajv'
import ajvErrors from 'better-ajv-errors'

const ajv = new Ajv({ jsonPointers: true, allErrors: true })
const [,, schemaPath, ...themePaths] = process.argv

const jsonRead = f => {
  try {
    return JSON.parse(fs.readFileSync(f), 'utf-8')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

const schema = jsonRead(schemaPath)
const validate = ajv.compile(schema)

themePaths.forEach((path) => {
  const theme = jsonRead(path)
  const valid = validate(theme)

  if (!valid) {
    console.log(ajvErrors(schema, theme, validate.errors, { indent: 2 }))
  }
})
