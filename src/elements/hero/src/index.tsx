/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'

type ArrayOrNot<T> = T | T[]

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactElement
  container?: React.FC<any>
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
  className?: string
}

const DefaultContainer: React.FC = ({ children }) => (
  <div sx={{ maxWidth: 1024, margin: '0 auto', paddingX: 10 }}>{children}</div>
)

const Hero: React.FC<Props> = ({
  breadcrumbs,
  container: Container = DefaultContainer,
  fgImage,
  fgImageType = 'background',
  fgImagePosition,
  fgImageOnMobile = true,
  children,
  className
}) => {
  const { theme }: any = useThemeUI()
  const breadcrumbVariant = get(theme, 'hero.breadcrumbs.variant')
  const breadcrumbWithVariant =
    breadcrumbs &&
    React.cloneElement(breadcrumbs, { variant: breadcrumbVariant })

  return (
    <div
      sx={{ position: 'relative', overflow: 'hidden', variant: 'hero.wrapper' }}
      className={className}
    >
      <Container>
        {breadcrumbs && (
          <div sx={{ paddingTop: 'sm', variant: 'hero.breadcrumbs' }}>
            {breadcrumbWithVariant}
          </div>
        )}
        <div
          sx={{
            position: 'relative',
            display: 'block',
            flexDirection: 'row-reverse'
          }}
        >
          <div
            sx={{
              position: 'absolute',
              left: [0, '45%'],
              right: 0,
              top: 0,
              bottom: 0,
              display: fgImageOnMobile ? 'block' : ['none', 'block'],
              ...(fgImageType === 'background'
                ? {
                    backgroundImage: `url(${fgImage})`,
                    backgroundRepeat: 'no-repeat',
                    ...fgImagePosition
                  }
                : undefined)
            }}
          >
            {fgImageType === 'img' && (
              <img
                sx={{
                  maxWidth: '100%',
                  position: 'absolute',
                  ...fgImagePosition
                }}
                src={fgImage}
                role="presentation"
              />
            )}
          </div>
          <div
            sx={{
              position: 'relative',
              paddingTop: ['sm', 'xxl'],
              paddingBottom: ['sm', 'xxl'],
              variant: 'hero.content'
            }}
          >
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
