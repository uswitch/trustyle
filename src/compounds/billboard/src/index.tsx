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
  const styles = () => {
    if (primarySlot) {
      return 'compounds.billboard.primaryContent'
    }

    return `compounds.billboard.${
      fullWidthSlot ? 'contentWithFullWidthSlot' : 'contentWithoutFullWidthSlot'
    }`
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
                  variant: 'compounds.billboard.breadcrumbs',
                  paddingTop: ['xs', '0']
                }}
              >
                {React.cloneElement(breadcrumbs, { variant: 'billboard' })}
              </div>
            )}
            <div
              sx={{
                marginBottom: !primarySlot
                  ? ['md', 'lg']
                  : fullWidthSlot
                  ? ['lg', 'xxl']
                  : ['xl', 'xxl'],
                display: 'flex',
                flexDirection: ['column', 'row'],
                justifyContent: ['center', 'space-between']
              }}
            >
              <div
                sx={{
                  alignSelf: 'center',
                  textAlign: primarySlot ? 'left' : 'center',
                  variant: styles(),
                  marginX: primarySlot ? '0' : 'auto',
                  width: ['auto', '50%']
                }}
              >
                {primaryContent}
              </div>
              {primarySlot && (
                <div
                  sx={{
                    variant: 'compounds.billboard.primarySlot',
                    width: ['auto', '40%']
                  }}
                >
                  {React.cloneElement(primarySlot, { variant: 'billboard' })}
                </div>
              )}
            </div>
            {fullWidthSlot && (
              <div sx={{ marginBottom: ['0', 'xl'] }}>{fullWidthSlot}</div>
            )}
          </div>
        </div>
      </Palette>
    </div>
  )
}

export default Billboard
