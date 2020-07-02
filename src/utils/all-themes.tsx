import * as React from 'react'
import { Styled, ThemeProvider, ThemeProviderProps } from 'theme-ui'

import { themes as themeFiles } from './theme-selector'

interface Props extends React.HTMLAttributes<any> {
  themes?: string[]
}

const AllThemes: React.FC<Props> = ({ themes = [], children }) => {
  const availableThemes = [
    'uswitch-rebrand',
    'uswitch',
    'money',
    'journey',
    'save-on-energy',
    'bankrate'
  ]
  const themeKeys = themes.length
    ? availableThemes.filter(theme => themes.includes(theme))
    : availableThemes

  return (
    <React.Fragment>
      {themeKeys.map((key, index) => {
        const theme = themeFiles[`./${key}/theme.json`]
        return (
          <ThemeProvider theme={theme as ThemeProviderProps<any>} key={index}>
            <Styled.root>
              <h2>{key}:</h2>
              {children}
            </Styled.root>
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
