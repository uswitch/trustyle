/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactElement
  primaryContent: React.ReactElement
  primarySlot?: React.ReactElement
  fullWidthSlot?: React.ReactElement
  bgImage?: string
}

const Billboard: React.FC<Props> = ({
  breadcrumbs,
  primaryContent,
  primarySlot,
  fullWidthSlot,
  bgImage
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
              flexDirection: 'column' as const,
              paddingX: 'sm',
              paddingTop: 'sm',
              marginBottom: fullWidthSlot ? ['0', 'xs'] : '0'
            }}
          >
            {breadcrumbs && (
              <div
                sx={{
                  variant:
                    !primarySlot && bgImage
                      ? 'compounds.billboard.breadcrumbsWithImage'
                      : 'compounds.billboard.breadcrumbs'
                }}
              >
                {React.cloneElement(breadcrumbs, { variant: 'billboard' })}
              </div>
            )}

            {!bgImage && (
              <div
                sx={{ variant: 'compounds.billboard.primaryContainer' }}
              ></div>
            )}

            <div
              sx={{
                marginBottom: fullWidthSlot
                  ? ['lg', primarySlot ? 'xxl' : 'lg']
                  : !primarySlot && bgImage
                  ? ['xl', 'xxl', '0']
                  : ['xl', 'xxl'],
                display: 'flex',
                height: ['auto', 'auto', 'auto'],
                flexDirection: [
                  'column' as const,
                  'column' as const,
                  'row' as const
                ],
                justifyContent: ['center', 'center', 'space-between'],
                position: 'relative',
                alignItems: 'flex-end'
              }}
            >
              <div
                sx={{
                  alignSelf: 'center',
                  textAlign:
                    primarySlot || bgImage
                      ? ('left' as const)
                      : ('center' as const),
                  variant: styles(),
                  marginX: primarySlot || bgImage ? ['0', 'auto', '0'] : 'auto',
                  width: ['auto', '70%', '50%'],
                  '& > ul > li': { fontSize: ['sm', 'md'], paddingY: 10 }
                }}
              >
                {primaryContent}
                <ul className="ev-ukz8iz">
                  <li className="ev-mz8nie">
                    <span className="ev-1yfbptl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 12 9"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.5 8.667L0 4.083l1.167-1.166L4.5 6.333 10.833 0 12 1.167l-7.5 7.5z"></path>
                      </svg>
                    </span>
                    <span>
                      <span className="ev-1yr8vp2">
                        Compare deals from leading private pension providers
                      </span>
                    </span>
                  </li>
                  <li className="ev-mz8nie">
                    <span className="ev-1yfbptl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 12 9"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.5 8.667L0 4.083l1.167-1.166L4.5 6.333 10.833 0 12 1.167l-7.5 7.5z"></path>
                      </svg>
                    </span>
                    <span>
                      <span className="ev-1yr8vp2">
                        See charges and fees at a glance
                      </span>
                    </span>
                  </li>
                  <li className="ev-mz8nie">
                    <span className="ev-1yfbptl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 12 9"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.5 8.667L0 4.083l1.167-1.166L4.5 6.333 10.833 0 12 1.167l-7.5 7.5z"></path>
                      </svg>
                    </span>
                    <span>
                      <span className="ev-1yr8vp2">Apply in minutes</span>
                    </span>
                  </li>
                </ul>
              </div>

              {primarySlot && (
                <div
                  sx={{
                    variant: 'compounds.billboard.primarySlot',
                    width: ['auto', '70%', '40%'],
                    marginTop: ['0', 'lg', '0'],
                    marginX: ['auto', 'auto', '0']
                  }}
                >
                  {React.cloneElement(primarySlot, { variant: 'billboard' })}
                </div>
              )}

              {!primarySlot && bgImage && (
                <div
                  sx={{
                    width: '404px',
                    height: '416px',
                    display: ['none', 'none', 'block'],
                    background: `url(${bgImage}) no-repeat right bottom / contain`
                  }}
                ></div>
              )}
            </div>

            {fullWidthSlot && (
              <div
                sx={{
                  width: ['100%', '70%', '100%'],
                  marginX: ['0', 'auto', '0'],
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
