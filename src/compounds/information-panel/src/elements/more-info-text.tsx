/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface MoreInformationTextProps {
  content: string[]
}

export const MoreInformationText: React.FC<MoreInformationTextProps> = ({
  content
}) => (
  <React.Fragment>
    {content.map((chunk: string, i: number) => {
      if (chunk === null) {
        return
      }

      return (
        <React.Fragment key={i}>
          {chunk
            .replace(/<\/p>/g, '')
            .split('<br/>')
            .map(line => line.split('<p>'))
            .reduce((acc, val) => acc.concat(val), [])
            .map((line: string, j: number) => {
              return (
                <p
                  key={j}
                  sx={{ variant: 'compounds.information-panel.text' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                ></p>
              )
            })}
        </React.Fragment>
      )
    })}
  </React.Fragment>
)
