/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'
import { Palette } from '@uswitch/trustyle-utils.palette'

type ArrayOrNot<T> = T | T[]

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactElement
  container?: React.FC & any
  fgImage?: string
  fgImageType?: 'background' | 'img'
  fgImagePosition?:
    | {
        backgroundSize: ArrayOrNot<string | number>
        backgroundPosition: ArrayOrNot<string | number>
      }
    | {
        left?: ArrayOrNot<string | number>
        top?: ArrayOrNot<string | number>
        right?: ArrayOrNot<string | number>
        bottom?: ArrayOrNot<string | number>
        transform?: ArrayOrNot<string>
      }
  fgImageOnMobile?: boolean
  fgImageOnTablet?: boolean
  customBgColor?: string
  className?: string
  variant?: 'provider'
  bottomImageOverflow?: number | string
  advertisement?: boolean
}

const makeStyles = (variant?: string) => (element?: string) =>
  `elements.hero${variant ? `.variants.${variant}` : ''}${
    element ? `.${element}` : ''
  }`

const DefaultContainer: React.FC & any = ({ children }: { children: any }) => (
  <div sx={{ maxWidth: 1024, margin: '0 auto', paddingX: 10 }}>{children}</div>
)

const Hero: React.FC<Props> = ({
  breadcrumbs,
  container: Container = DefaultContainer,
  fgImage,
  fgImageType = 'background',
  fgImagePosition,
  fgImageOnMobile = false,
  fgImageOnTablet = false,
  customBgColor = '',
  children,
  variant,
  bottomImageOverflow = '-33%',
  className,
  advertisement = false
}) => {
  const { theme }: any = useThemeUI()
  const styles = makeStyles(variant)
  const breadcrumbVariant = get(theme, styles('breadcrumbs.variant'))
  const breadcrumbWithVariant =
    breadcrumbs &&
    React.cloneElement(breadcrumbs, { variant: breadcrumbVariant })

  return (
    <div>
      <Palette
        as="div"
        sx={{ overflow: 'hidden', variant: styles('wrapper') }}
        px={{ backgroundColor: 'backgroundColor' }}
      >
        <div
          sx={{
            position: 'relative' as const,
            overflow: 'hidden',
            background: customBgColor || undefined
          }}
          className={className}
        >
          <Container sx={{ variant: styles('container') }}>
            {breadcrumbs && (
              <div sx={{ paddingTop: 'sm', variant: styles('breadcrumbs') }}>
                {breadcrumbWithVariant}
              </div>
            )}

            <div
              sx={{
                position: 'relative' as const,
                display: 'block',
                flexDirection: 'row-reverse' as const
              }}
            >
              {!advertisement && (
                <div
                  sx={{
                    position: 'absolute' as const,
                    left: [0, '45%'],
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: [
                      fgImageOnMobile ? 'block' : 'none',
                      fgImageOnTablet ? 'block' : 'none',
                      'block'
                    ],
                    ...(fgImage && fgImageType === 'background'
                      ? {
                          backgroundImage: `url(${fgImage})`,
                          backgroundRepeat: 'no-repeat',
                          ...fgImagePosition
                        }
                      : undefined),
                    variant: styles('image')
                  }}
                >
                  {fgImage && fgImageType === 'img' && (
                    <img
                      sx={{
                        maxWidth: '100%',
                        position: 'absolute' as const,
                        ...fgImagePosition
                      }}
                      src={fgImage}
                      role="presentation"
                    />
                  )}
                </div>
              )}
              <div
                sx={{
                  position: 'relative' as const,
                  paddingTop: ['sm', 'xxl'],
                  paddingBottom: ['sm', 'xxl'],
                  variant: styles('content')
                }}
              >
                {advertisement && (
                  <div
                    sx={{
                      fontSize: '14px',
                      fontWeight: 700,
                      display: 'inline-block',
                      paddingX: '16px',
                      paddingY: '4px',
                      marginBottom: '16px',
                      backgroundColor: 'white',
                      border: '1px solid',
                      color: 'black'
                    }}
                  >
                    Advertisement
                  </div>
                )}
                {children}
              </div>

              {advertisement && fgImage && fgImageType === 'img' && (
                <img
                  sx={{
                    display: 'block',
                    maxWidth: ['270px', '360px'],
                    margin: ['0 auto 45px', 0],
                    position: ['static', 'absolute'],
                    top: '50%',
                    left: [0, '55%'],
                    transform: ['translateY(0)', 'translateY(-50%)']
                  }}
                  src={fgImage}
                  role="presentation"
                />
              )}
            </div>
          </Container>
        </div>
      </Palette>
      {fgImage && (
        <img
          sx={{
            maxWidth: '100%',
            position: 'relative' as const,
            display: 'none',
            marginTop: `-${bottomImageOverflow}`,
            marginLeft: 'auto',
            marginRight: 'auto',
            variant: styles('bottomImage')
          }}
          src={fgImage}
          role="presentation"
        />
      )}
    </div>
  )
}

export default Hero
