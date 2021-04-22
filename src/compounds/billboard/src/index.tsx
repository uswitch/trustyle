/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: any
  primaryContent: any
  primarySlot?: any
  fullWidthSlot?: any
}

const Billboard: React.FC<Props> = ({
  breadcrumbs,
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
      {breadcrumbs && (
        <div sx={{ paddingTop: 'sm' }}>
          {React.cloneElement(breadcrumbs, { variant: 'light' })}
        </div>
      )}
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          paddingTop: ['xxs', primarySlot ? 'md' : 'sm'],
          marginBottom:
            primarySlot || !fullWidthSlot ? ['lg', 'xxl'] : ['auto', 'xs'],
          textAlign: primarySlot ? 'auto' : 'center',
          width: primarySlot ? 'auto' : ['auto', '75%'],
          marginX: 'auto'
        }}
      >
        <div
          sx={{
            paddingRight: primarySlot ? ['auto', 'xxl'] : 'auto',
            alignSelf: 'center',
            variant: 'compounds.billboard.primaryContent'
          }}
        >
          {primaryContent}
        </div>
        {primarySlot && (
          <div sx={{ paddingLeft: ['auto', 'xxl'], marginTop: ['sm', 'xxs'] }}>
            {primarySlot}
          </div>
        )}
      </div>
      <div
        sx={{
          marginTop: primarySlot ? 'xxs' : 'xs',
          marginBottom: ['lg', 'xxl']
        }}
      >
        {fullWidthSlot}
      </div>
    </div>
  )
}

export default Billboard
