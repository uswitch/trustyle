/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import Badge from '@uswitch/trustyle.badge'
import { Button } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  headline: string
  body?: string
  content?: React.ReactElement
  logo?: string
  footer: string
  badgeText: string
  link?: string
  logoAlt?: string
  imgSize?: string
  complianceText?: string
  telephoneNumber?: string
}
const AdvertWrapper = ({
  telephoneNumber,
  children,
  link
}: {
  telephoneNumber: string | undefined
  children: React.ReactNode
  link: string | undefined
}) => {
  return telephoneNumber ? <div>{children}</div> : <a href={link}>{children}</a>
}
const Advert: React.FC<Props> = ({
  headline,
  body,
  content,
  logo,
  logoAlt,
  footer,
  badgeText,
  link,
  imgSize = '120px',
  complianceText,
  telephoneNumber
}) => {
  return (
    <div sx={{ variant: 'compounds.advert' }}>
      <div
        sx={{
          fontSize: '14px',
          fontWeight: 700,
          display: 'inline-block',
          paddingX: '32px',
          paddingY: '4px',
          marginBottom: '8px',
          backgroundColor: 'white',
          border: '1px solid'
        }}
      >
        Ad
      </div>
      <AdvertWrapper telephoneNumber={telephoneNumber} link={link}>
        <div
          sx={{
            borderRadius: '4px',
            backgroundColor: 'white',
            paddingX: ['12px', '16px'],
            paddingY: ['16px', '24px'],
            boxShadow: '8px 8px 0px rgba(24, 24, 61, 0.15)'
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column' as const, 'row-reverse' as const]
            }}
          >
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column' as const,
                flex: '2 1 75%',
                marginBottom: [0, '16px']
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row' as const,
                  justifyContent: 'space-between'
                }}
              >
                <h6
                  sx={{ margin: 0, marginBottom: [0, '16px'], fontWeight: 700 }}
                >
                  {headline}
                </h6>
                <Button
                  variant="primary"
                  sx={{
                    display: ['inline-block', 'none'],
                    borderRadius: 0,
                    paddingY: '12px',
                    paddingX: '4px'
                  }}
                  size="small"
                >
                  <Icon
                    sx={{ variant: 'compounds.advert.icon' }}
                    glyph="caret"
                    direction="right"
                    color="black"
                    size={16}
                  />
                </Button>
              </div>
              {complianceText && (
                <div sx={{ variant: 'compounds.advert.complianceText' }}>
                  {complianceText}
                </div>
              )}
              <div sx={{ padding: ['8px 0', '0'] }}>
                {content && <div sx={{ fontSize: '14px' }}>{content}</div>}
                {!content && body && <p sx={{ fontSize: '14px' }}>{body}</p>}
                <Badge variant="advert">{telephoneNumber || badgeText}</Badge>
              </div>
            </div>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column' as const,
                flex: '1 1 auto',
                marginRight: [0, '40px'],
                marginBottom: ['sm', 0],
                marginTop: ['xs', 0]
              }}
            >
              <img src={logo} alt={logoAlt} width={imgSize} />
            </div>
          </div>
          <p
            sx={{
              borderTop: '1px solid #D0D0D3',
              fontSize: '12px',
              margin: 0,
              paddingTop: '8px'
            }}
          >
            {footer}
          </p>
        </div>
      </AdvertWrapper>
    </div>
  )
}

// had to add this comment to publish a new version of this component - TODO remove later
export default Advert
