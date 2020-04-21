import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import Ajv from 'ajv'
import ajvErrors from 'better-ajv-errors'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ajv = new Ajv({ jsonPointers: true, allErrors: true })

const [,, schemaPath, ...themePaths] = process.argv

const toCamelCase = str => {
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
  return s.slice(0, 1).toLowerCase() + s.slice(1)
}

const jsonRead = f => {
  try {
    return JSON.parse(fs.readFileSync(f), 'utf-8')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

const dirRead = dir => fs
      .readdirSync(path.resolve(__dirname, dir))
      .map(toCamelCase)

const updateSchema = ({ required = [], ...subSchema }, components) => ({
  ...subSchema,
  required: [...new Set([...required, ...components])]
})

const schema = jsonRead(schemaPath)

// const elements = dirRead('../src/elements')
// const compounds = dirRead('../src/compounds')

// schema.properties.elements = updateSchema(schema.properties.elements, elements)
// schema.properties.compounds = updateSchema(schema.properties.compounds, compounds)

const validate = ajv.compile(schema)

themePaths.forEach((path) => {
  const theme = jsonRead(path)
  const valid = validate(theme)

  if (!valid) {
    console.log(ajvErrors(schema, theme, validate.errors, { indent: 2 }))
  }
})
