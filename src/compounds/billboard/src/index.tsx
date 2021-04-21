/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  primaryContent: any
  primarySlot?: any
  fullWidthSlot?: any
}

const Billboard: React.FC<Props> = ({
  primaryContent,
  primarySlot,
  fullWidthSlot
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingX: ['sm', 'xxxl'],
        variant: 'compounds.billboard'
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          paddingTop: ['xxs'],
          marginBottom: primarySlot ? ['auto', 'xxl'] : ['auto', 'xs'],
          textAlign: primarySlot ? 'auto' : 'center',
          width: primarySlot ? 'auto' : ['auto', '75%'],
          marginX: 'auto'
        }}
      >
        <div
          sx={{
            paddingRight: primarySlot ? ['auto', 'xxl'] : 'auto',
            paddingTop: ['xxxl'],
            variant: 'compounds.billboard.primaryContent'
          }}
        >
          {primaryContent}
        </div>
        {primarySlot && (
          <div
            sx={{
              paddingLeft: ['auto', 'xxl'],
              paddingTop: ['lg', 'xxl']
            }}
          >
            {primarySlot}
          </div>
        )}
      </div>
      <div
        sx={{
          marginTop: primarySlot ? ['sm', 'md'] : 'auto'
        }}
      >
        {fullWidthSlot}
      </div>
    </div>
  )
}

export default Billboard
