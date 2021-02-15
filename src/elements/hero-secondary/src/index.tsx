/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'
import { Palette } from '@uswitch/trustyle-utils.palette'

type ArrayOrNot<T> = T | T[]

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactElement
  container?: React.FC<any>
  image?: string
  imageOnMobile?: boolean
  imageOnTablet?: boolean
  customBgColor?: string
  className?: string
  variant?: string
}

const makeStyles = (variant?: string) => (element?: string) =>
  `elements.hero${variant ? `.variants.${variant}` : ''}${
    element ? `.${element}` : ''
  }`

const DefaultContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children
}) => (
  <div sx={{ maxWidth: 1024, margin: '0 auto', paddingX: 10 }}>{children}</div>
)

const HeroSecondary: React.FC<Props> = ({
  breadcrumbs,
  container: Container = DefaultContainer,
  image,
  imageOnMobile = true,
  imageOnTablet = true,
  customBgColor = '',
  children,
  variant = 'secondary',
  className
}) => {
  const { theme }: any = useThemeUI()
  const styles = makeStyles(variant)
  const breadcrumbVariant = get(theme, styles('breadcrumbs.variant'))
  const breadcrumbWithVariant =
    breadcrumbs &&
    React.cloneElement(breadcrumbs, { variant: breadcrumbVariant })

  return (
    <Palette
      as="div"
      sx={{ overflow: 'hidden', variant: styles('wrapper') }}
      px={{ backgroundColor: 'backgroundColor' }}
    >
      <div
        sx={{
          position: 'relative',
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
              paddingTop: ['sm', 'xxl'],
              paddingBottom: ['sm', 'xxl'],
              display: 'flex',
              flexDirection: ['row', 'column'],
              variant: styles('content')
            }}
          >
            {image && (
              <img
                src={image}
                role="presentation"
                sx={{
                  display: [
                    imageOnMobile ? 'block' : 'none',
                    imageOnTablet ? 'block' : 'none',
                    'block'
                  ],
                  variant: styles('image')
                }}
              />
            )}

            {children}
          </div>
        </Container>
      </div>
    </Palette>
  )
}

export default HeroSecondary
