/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import Badge from '@uswitch/trustyle.badge'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  content?: React.ReactElement
  usp: string
  sponsor: { logo: string; name: string }
  label: string
  backgroundColor?: string
  backgroundImage: string
  backgroundSize?: string[]
  backgroundPosition?: string[]
  additionalImage?: string
  additionalImageTag?: string
  href: string
  badgeIcon?: React.ReactElement
}

const AdBanner: React.FC<Props> = ({
  title,
  content,
  usp,
  sponsor,
  backgroundColor = 'black',
  backgroundImage,
  backgroundSize = ['100%'],
  backgroundPosition = ['center'],
  label,
  additionalImage = '',
  additionalImageTag = '',
  href,
  badgeIcon
}) => {
  return (
    <div
      sx={{
        backgroundColor: backgroundColor,
        color: 'white',
        position: 'relative',
        p: ['sm', 'md'],
        paddingTop: ['210px', 'xl'],
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        sx={{
          top: 'sm',
          right: 'sm',
          fontSize: 'sm',
          position: 'absolute'
        }}
      >
        Sponsored
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row', 'row'],
          alignItems: ['center', 'flex-start']
        }}
      >
        <div
          sx={{
            mb: 'sm',
            display: ['block', 'none']
          }}
        >
          <Badge variant="inverse">
            {badgeIcon}
            {label}
          </Badge>
        </div>
        <div
          sx={{
            maxWidth: '200px',
            marginLeft: [0, 'sm']
          }}
        >
          <div
            sx={{
              marginBottom: 'sm'
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              sx={{
                maxHeight: '100%',
                maxWidth: '100%'
              }}
            />
          </div>
          <div>
            <img
              src={additionalImage}
              alt={additionalImageTag}
              sx={{
                maxWidth: '100%',
                display: ['none', 'block']
              }}
            />
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: ['center', 'flex-start'],
            px: ['0', 'lg']
          }}
        >
          <h1
            sx={{
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: ['lg', 'xxl'],
              marginTop: 0,
              marginBottom: 'sm',
              color: 'white',
              lineHeight: 1
            }}
          >
            {title}
          </h1>
          <p
            sx={{
              fontSize: 'xs',
              fontWeight: 'bold',
              marginBottom: 'sm',
              textAlign: ['center', 'left']
            }}
          >
            {content}
          </p>
          <p
            sx={{
              fontSize: 'xs',
              marginY: 0,
              fontWeight: 'light',
              marginBottom: ['sm', 0]
            }}
          >
            {usp}
          </p>
        </div>
        <ButtonLink
          sx={{
            maxWidth: '200px',
            flexShrink: 0,
            paddingY: 'xs',
            paddingX: 'md',
            alignSelf: ['center', 'flex-end']
          }}
          variant="inverse"
          href={href}
        >
          Learn more
        </ButtonLink>
      </div>
    </div>
  )
}

export default AdBanner
