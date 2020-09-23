/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import AwardsTag from '@uswitch/trustyle.awards-tag'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  content?: React.ReactElement
  usp: string
  sponsor: { logo: string; name: string }
  awardLabel?: string
  backgroundColor?: string
  textColor?: string
  backgroundImage: string
  backgroundSize?: string[]
  backgroundPosition?: string[]
  desktopAwardImage?: string
  desktopAwardImageTag?: string
  href: string
  imageCritical?: boolean
  className?: string
}

const AdBanner: React.FC<Props> = ({
  title,
  content,
  usp,
  sponsor,
  backgroundColor = 'black',
  textColor = 'white',
  backgroundImage,
  backgroundSize = ['100%'],
  backgroundPosition = ['center'],
  awardLabel,
  desktopAwardImage = '',
  desktopAwardImageTag = '',
  href,
  imageCritical = true,
  className
}) => {
  return (
    <div
      className={className}
      sx={{
        backgroundColor: backgroundColor,
        color: 'white',
        position: 'relative',
        px: ['sm', 'md'],
        pb: ['sm', 'md'],
        paddingTop: ['210px', 'lg']
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
          top: 'lg',
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
            display: ['flex', 'none'],
            zIndex: '1'
          }}
        >
        <AwardsTag award={awardLabel} />
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
            <ImgixImage
              src={sponsor.logo}
              alt={sponsor.name}
              width={148}
              imgixParams={{
                fit: 'fillmax'
              }}
              critical={imageCritical}
            />
          </div>
          <div>
            <ImgixImage
              src={desktopAwardImage}
              alt={desktopAwardImageTag}
              height={60}
              sx={{
                maxWidth: '100%',
                display: ['none', 'block']
              }}
              imgixParams={{
                fit: 'fillmax'
              }}
              critical={imageCritical}
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
              color: textColor,
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
              marginTop: 0,
              textAlign: ['center', 'left'],
              color: textColor
            }}
          >
            {content}
          </p>
          <p
            sx={{
              fontSize: 'xs',
              marginY: 0,
              fontWeight: 'light',
              marginBottom: ['sm', 0],
              color: textColor
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
