/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactElement
  primaryContent: React.ReactElement
  primarySlot?: React.ReactElement
  fullWidthSlot?: React.ReactElement
}

const Billboard: React.FC<Props> = ({
  breadcrumbs,
  primaryContent,
  primarySlot,
  fullWidthSlot
}) => {
  const styles = (cond: string) => {
    if (cond === 'primarySlot') {
      return `compounds.billboard.${
        fullWidthSlot ? 'withFullWidthSlot' : 'withoutFullWidthSlot'
      }`
    }

    if (cond === 'primaryContent') {
      if (primarySlot) {
        return 'compounds.billboard.primaryContent'
      }

      return `compounds.billboard.${
        fullWidthSlot
          ? 'contentWithFullWidthSlot'
          : 'contentWithoutFullWidthSlot'
      }`
    }

    return ''
  }

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
              paddingTop: 'sm'
            }}
          >
            {breadcrumbs && (
              <div
                sx={{
                  paddingTop: ['xs', '0'],
                  variant: 'compounds.billboard.breadcrumbs'
                }}
              >
                {React.cloneElement(breadcrumbs, { variant: 'billboard' })}
              </div>
            )}
            <div
              sx={{
                marginBottom: ['md', 'lg'],
                display: 'flex',
                flexDirection: ['column', 'row'],
                justifyContent: ['center', 'space-between']
              }}
            >
              <div
                sx={{
                  alignSelf: 'center',
                  textAlign: primarySlot ? 'left' : 'center',
                  variant: styles('primaryContent'),
                  marginX: primarySlot ? '0' : 'auto',
                  width: ['auto', '50%']
                }}
              >
                {primaryContent}
              </div>
              {primarySlot && (
                <div
                  sx={{
                    variant: styles('primarySlot'),
                    width: ['auto', '40%']
                  }}
                >
                  {React.cloneElement(primarySlot, { variant: 'billboard' })}
                </div>
              )}
            </div>
            {fullWidthSlot && (
              <div
                sx={{
                  marginBottom: ['sm', 'xxl'],
                  variant: 'compounds.billboard.fullWidthSlot'
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
