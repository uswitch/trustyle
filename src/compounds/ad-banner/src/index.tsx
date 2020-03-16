/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Button } from '@uswitch/trustyle.button'
import BadgeWithIcon from '@uswitch/trustyle.badge-with-icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  content?: React.ReactElement
  usp: string
  sponsor: { logo: string; name: string }
  label: string
  backgroundImage: string
  backgroundSize?: string[]
  backgroundPosition?: string[]
}

const AdBanner: React.FC<Props> = ({
  title,
  content,
  usp,
  sponsor,
  backgroundImage,
  backgroundSize = ['100%'],
  backgroundPosition = ['center'],
  label
}) => {
  return (
    <div
      sx={{
        backgroundColor: 'uswitch-navy',
        color: '#FFFFFF',
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
          <BadgeWithIcon label={label} />
        </div>
        <div
          sx={{
            maxWidth: '200px'
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
          <img
            src="https://bit.ly/3d7arga"
            alt="Uswitch Awards"
            sx={{
              maxWidth: '100%',
              display: ['none', 'block']
            }}
          />
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
              color: '#FFFFFF',
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
        <Button
          sx={{
            background: '#FFFFFF',
            flexShrink: 0,
            paddingY: 'xs',
            paddingX: 'md',
            alignSelf: ['center', 'flex-end']
          }}
          variant="secondary"
        >
          Learn more
        </Button>
      </div>
    </div>
  )
}

export default AdBanner
