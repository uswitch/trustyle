import * as React from 'react'
import { Theme, Themed, ThemeProvider } from 'theme-ui'

import { themes as themeFiles } from './theme-selector'

interface Props extends React.HTMLAttributes<any> {
  themes?: string[]
}

const AllThemes: React.FC<Props> = ({ themes = [], children }) => {
  const availableThemes = [
    'uswitch',
    'money',
    'journey',
    'save-on-energy',
    'bankrate',
    'broadband-deals'
  ]
  const themeKeys = themes.length
    ? availableThemes.filter(theme => themes.includes(theme))
    : availableThemes

  return (
    <React.Fragment>
      {themeKeys.map((key, index) => {
        const theme = themeFiles[`./${key}/theme.json`]

        return (
          <ThemeProvider theme={theme as Theme} key={index}>
            <Themed.root>
              <h2>{key}:</h2>
              {children}
            </Themed.root>
          </ThemeProvider>
        )
      })}
    </React.Fragment>
  )
}

export default AllThemes

export interface PermutationsObject {
  [key: string]: any[]
}

export type PermutationsArray = { [key: string]: any }[]

export const permutationsGenerator = (
  permutationsObject: PermutationsObject
): PermutationsArray => {
  if (!Object.keys(permutationsObject).length) {
    return [{}]
  }

  const permutationsArray: PermutationsArray = []
  const [objectKey, objectValues] = Object.entries(permutationsObject)[0]

  const omittedObject: PermutationsObject = { ...permutationsObject }
  delete omittedObject[objectKey]

  const recursiveValues = permutationsGenerator(omittedObject)

  objectValues.forEach(value => {
    recursiveValues.forEach(values => {
      permutationsArray.push({
        [objectKey]: value,
        ...values
      })
    })
  })

  return permutationsArray
}
