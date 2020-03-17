import * as React from 'react'
import { Styled, ThemeProvider, ThemeProviderProps } from 'theme-ui'

import { themes } from './theme-selector'

const AllThemes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  // @todo add prop to specify themes
  const themeKeys = ['uswitch', 'money', 'journey', 'save-on-energy']

  return (
    <React.Fragment>
      {themeKeys.map((key, index) => {
        const theme = themes[`./${key}/theme.json`]
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
