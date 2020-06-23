/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const fs = require('fs-extra')
const glob = require('glob')

// Turns my-icon into myIcon
const slugify = str =>
  str.replace(/-([a-z])/g, (_, match) => match.toUpperCase())

glob('../src/icons/**/*.svg', { cwd: __dirname }, (err, paths) => {
  if (err) {
    throw err
  }

  const themes = {}
  const icons = {}

  paths.forEach(path => {
    const splitFile = path.split('/')
    const theme = splitFile[splitFile.length - 2]
    const file = splitFile[splitFile.length - 1]
    const icon = slugify(file.slice(0, -4))

    const isSafe = str => /^[a-z-]+$/i.test(str)
    if (!isSafe(theme) || !isSafe(icon)) {
      const problem = isSafe(theme) ? icon : theme
      throw new Error(
        `Icons can only contain a-z and hyphens: "${problem}" does not.`
      )
    }

    const iconObj = { theme, file, icon, path }

    if (!themes[theme]) {
      themes[theme] = []
    }

    themes[theme].push(iconObj)

    if (!icons[icon]) {
      icons[icon] = []
    }

    icons[icon].push(iconObj)
  })

  const files = []

  const filePreface =
    '// This file was programmatically generated - do not manually change\n\n'
  const svgoConfig = JSON.stringify({
    plugins: [
      { convertColors: { currentColor: true } },
      { removeViewbox: false },
      { removeDimensions: true }
    ]
  })
  const require = path =>
    `require('!!file-loader?name=icons/[name]-[hash].[ext]!svgo-loader?${svgoConfig}!${path}').default`
  const iconToStr = iconObj =>
    `{ theme: '${iconObj.theme}', icon: '${
      iconObj.icon
    }', file: ${require(iconObj.path)} }`
  const iconObjInterface =
    'interface IconObj { theme: string; icon: string; file: any }\n\n'

  for (const [theme, iconObjs] of Object.entries(themes)) {
    const importStr = iconObj =>
      `export const ${iconObj.icon}Icon = ${iconToStr(iconObj)}\n`

    const contents = filePreface + iconObjs.map(importStr).join('')

    files.push({
      path: `../themes/${theme}.js`,
      contents
    })

    const typeStr = iconObj =>
      `export declare const ${iconObj.icon}Icon: IconObj;\n`
    const typeContents = iconObjInterface + iconObjs.map(typeStr).join('')
    files.push({
      path: `../themes/${theme}.d.ts`,
      contents: typeContents
    })
  }

  for (const [icon, iconObjs] of Object.entries(icons)) {
    const contents =
      filePreface +
      `export default [\n${iconObjs
        .map(iconToStr)
        .map(str => '  ' + str)
        .join(',\n')}\n]\n`

    files.push({
      path: `../icons/${icon}.js`,
      contents
    })

    const typeContents =
      iconObjInterface +
      'declare const _default: IconObj[];\nexport default _default;\n'

    files.push({
      path: `../icons/${icon}.d.ts`,
      contents: typeContents
    })
  }

  const promises = files.map(file =>
    fs.outputFile(path.resolve(__dirname, file.path), file.contents)
  )
  Promise.all(promises)
    .then(() => console.log('Done'))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
})
