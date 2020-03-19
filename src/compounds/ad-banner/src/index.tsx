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
  badgeVariant?: string
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
  badgeIcon,
  badgeVariant = 'inverse'
}) => {
  return (
    <div
      sx={{
        backgroundColor: backgroundColor,
        color: 'white',
        position: 'relative',
        p: ['sm', 'md'],
        paddingTop: ['210px', 'md']
      }}
    >
      <div
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          maxHeight: '100%',
          height: '230px',
          bottom: ['', '0'],
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
          zIndex: '0'
        }}
      ></div>
      <div
        sx={{
          top: 'md',
          right: 'lg',
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
          alignItems: ['center', 'flex-start'],
          zIndex: '1'
        }}
      >
        <div
          sx={{
            mb: 'sm',
            display: ['block', 'none'],
            zIndex: '1'
          }}
        >
          <Badge variant={badgeVariant}>
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
            px: ['0', 'lg'],
            zIndex: '1'
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
        <div
          sx={{
            flexShrink: 0,
            alignSelf: ['center', 'flex-end'],
            zIndex: 1
          }}
        >
          <ButtonLink
            sx={{
              maxWidth: '200px',
              paddingY: 'xs',
              paddingX: 'md'
            }}
            variant="inverse"
            href={href}
          >
            Learn more
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default AdBanner
