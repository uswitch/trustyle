/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactNode
  container?: React.FC
  contentWidth?: number
  fgImage?: string
  fgImagePosition?: {
    backgroundSize: (string | number)[] | string | number
    backgroundPosition: (string | number)[] | string | number
  }
  fgImageOnMobile?: boolean
}

const DefaultContainer: React.FC = ({ children }) => (
  <div sx={{ maxWidth: 1024, margin: '0 auto', paddingX: 10 }}>{children}</div>
)

const Hero: React.FC<Props> = ({
  breadcrumbs,
  container: Container = DefaultContainer,
  contentWidth = 45,
  fgImage,
  fgImagePosition,
  fgImageOnMobile = true,
  children
}) => {
  return (
    <div sx={{ position: 'relative', variant: 'hero.wrapper' }}>
      <Container>
        {breadcrumbs && (
          <div sx={{ paddingTop: 'sm', variant: 'hero.breadcrumbs' }}>
            {breadcrumbs}
          </div>
        )}
        <div sx={{ display: ['block', 'flex'], flexDirection: 'row-reverse' }}>
          <div
            sx={{
              position: ['absolute', 'static'],
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: fgImageOnMobile ? 'block' : ['none', 'block'],
              flex: `${100 - contentWidth}%`,
              backgroundImage: `url(${fgImage})`,
              backgroundRepeat: 'no-repeat',
              ...fgImagePosition
            }}
          ></div>
          <div
            sx={{
              position: ['relative', 'static'],
              flex: `${contentWidth}%`,
              '> :first-child': {
                marginTop: 0
              },
              paddingTop: ['sm', 'xxl'],
              paddingBottom: ['sm', 'xxxl'],
              'h1, h2, h3, h4, h5, h6': {
                maxWidth: ['66.6%', 'none']
              },
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
