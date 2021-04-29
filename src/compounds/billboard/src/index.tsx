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
        <div sx={{ variant: 'compounds.billboard.container' }}>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingX: 'sm',
              paddingTop: 'sm',
              variant: 'compounds.billboard'
            }}
          >
            {breadcrumbs && (
              <div sx={{ paddingTop: ['xs', '0'] }}>
                {React.cloneElement(breadcrumbs, { variant: 'billboard' })}
              </div>
            )}
            <div
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                paddingTop: ['xxs', primarySlot ? 'md' : 'auto'],
                marginBottom:
                  primarySlot || !fullWidthSlot
                    ? ['lg', 'xxl']
                    : ['auto', 'xs'],
                textAlign: primarySlot ? 'auto' : 'center',
                width: primarySlot ? 'auto' : ['auto', '100%'],
                marginX: 'auto'
              }}
            >
              <div
                sx={{
                  paddingRight: primarySlot ? ['auto', 'xxl'] : 'auto',
                  alignSelf: 'center',
                  variant: primarySlot
                    ? 'compounds.billboard.withPrimarySlot'
                    : 'compounds.billboard.primaryContentOnly',
                  margin: 'auto'
                }}
              >
                {primaryContent}
              </div>
              {primarySlot && (
                <div
                  sx={{
                    paddingLeft: ['auto', 'xxl'],
                    marginTop: ['sm', 'xxs'],
                    variant: 'compounds.billboard.primarySlot',
                    alignSelf: 'center'
                  }}
                >
                  {React.cloneElement(primarySlot, { variant: 'billboard' })}
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
        </div>
      </Palette>
    </div>
  )
}

export default Billboard
