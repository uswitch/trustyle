/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'

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
    <div>
      <Palette
        as="div"
        sx={{ overflow: 'hidden', variant: 'compounds.billboard.wrapper' }}
        px={{ backgroundColor: 'backgroundColor' }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingX: ['sm', 'xxxl'],
            variant: 'compounds.billboard'
          }}
        >
          {breadcrumbs && (
            <div sx={{ paddingTop: ['xxs', 'sm'] }}>
              {React.cloneElement(breadcrumbs, { variant: 'billboard' })}
            </div>
          )}
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              paddingTop: ['xxs', primarySlot ? 'md' : 'auto'],
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
              <div
                sx={{ paddingLeft: ['auto', 'xxl'], marginTop: ['sm', 'xxs'] }}
              >
                {primarySlot}
              </div>
            )}
          </div>
          {fullWidthSlot && (
            <div
              sx={{
                marginTop: primarySlot ? 'xxs' : 'xs',
                marginBottom: ['lg', 'xxl']
              }}
            >
              {fullWidthSlot}
            </div>
          )}
        </div>
      </Palette>
    </div>
  )
}

export default Billboard
