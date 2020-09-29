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
  desktopAwardImage?: string
  desktopAwardImageTag?: string
  buttonLabel?: string
  buttonVariant?: string
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
  awardLabel,
  desktopAwardImage = '',
  desktopAwardImageTag = '',
  buttonLabel = 'Learn more',
  buttonVariant = 'inverse',
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
        variant: 'compounds.ad-banner.wrapper'
      }}
    >
      <div
        sx={{
          position: 'absolute',
          width: ['', '', '50%'],
          top: '0',
          left: ['0', '0', 'auto'],
          right: '0',
          bottom: ['', '', '0'],
          backgroundImage: `url(${backgroundImage})`,
          variant: 'compounds.ad-banner.background-image'
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
          flexDirection: ['column', 'column', 'row'],
          alignItems: ['center', 'center', 'flex-start'],
          zIndex: '1'
        }}
      >
        <div
          sx={{
            mb: 'sm',
            display: ['flex', 'flex', 'none'],
            zIndex: '1'
          }}
        >
          <AwardsTag award={awardLabel} />
        </div>
        <div
          sx={{
            maxWidth: '200px',
            marginLeft: ['0', '0', 'sm'],
            zIndex: '1'
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
                display: ['none', 'none', 'block']
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
            alignItems: ['center', 'center', 'flex-start'],
            px: ['0', '0', 'lg'],
            zIndex: '1'
          }}
        >
          <h1
            sx={{
              color: textColor,
              variant: 'compounds.ad-banner.title'
            }}
          >
            {title}
          </h1>
          <p
            sx={{
              color: textColor,
              variant: 'compounds.ad-banner.content'
            }}
          >
            {content}
          </p>
          <p
            sx={{
              variant: 'compounds.ad-banner.usp',
              color: textColor
            }}
          >
            {usp}
          </p>
        </div>
        <div
          sx={{
            flexShrink: 0,
            alignSelf: ['center', 'center', 'flex-end'],
            zIndex: 1
          }}
        >
          <ButtonLink
            sx={{
              variant: 'compounds.ad-banner.button'
            }}
            variant={buttonVariant}
            href={href}
          >
            {buttonLabel}
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default AdBanner
