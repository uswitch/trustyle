/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  authorImage?: React.ReactElement
  authorUrl: string
  bio: string | React.ReactElement
  email?: string
  twitterLink?: string
  linkedInLink?: string
  className?: string
  showDetails?: boolean
  variant: string
  socialsHrefTarget?: '_blank' | '_self' | '_parent' | '_top'
}

const AuthorProfile: React.FC<Props> = ({
  name,
  role,
  authorImage,
  authorUrl,
  bio,
  email,
  twitterLink,
  linkedInLink,
  showDetails = false,
  className = '',
  variant,
  socialsHrefTarget
}) => {
  const makeStyles = (variant: string) => (element?: string) =>
    `elements.author-profile${variant ? `.variants.${variant}` : `.base`}${
      element ? `.${element}` : ''
    }`

  const styles = makeStyles(variant)

  const BioElement =
    bio == null || typeof bio === 'string' || bio instanceof String
      ? Themed.p
      : Themed.div

  const socials = []

  if (email) {
    socials.push(
      <Themed.a
        key={'eml-' + email}
        href={'mailto:' + email}
        sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          borderBottom: 0
        }}
      >
        <div
          sx={{
            display: 'flex'
          }}
        >
          <Icon glyph="email-filled" size={22} color="grey-80" />
          {showDetails && <span>{email}</span>}
        </div>
      </Themed.a>
    )
  }

  if (twitterLink) {
    socials.push(
      <Themed.a
        key={'twtr-' + twitterLink}
        href={twitterLink}
        target={socialsHrefTarget}
        sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          borderBottom: 0
        }}
      >
        <div
          sx={{
            display: 'flex'
          }}
        >
          <Icon glyph="twitter" size={22} color="grey-80" />
          {showDetails && <span>{twitterLink}</span>}
        </div>
      </Themed.a>
    )
  }

  if (linkedInLink) {
    socials.push(
      <Themed.a
        key={'lnkd-' + linkedInLink}
        href={linkedInLink}
        target={socialsHrefTarget}
        sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          borderBottom: 0
        }}
      >
        <div
          sx={{
            display: 'flex'
          }}
        >
          <Icon glyph="linkedIn" size={22} color="grey-80" />
          {showDetails && <span>{linkedInLink}</span>}
        </div>
      </Themed.a>
    )
  }

  return (
    <div
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row' as const,
        variant: styles('main')
      }}
    >
      {authorImage && (
        <Themed.a
          href={authorUrl}
          sx={{
            flexShrink: 0,
            height: '87px',
            width: '87px',
            marginRight: 'sm',
            alignSelf: 'baseline',
            borderBottom: 0,
            variant: styles('image')
          }}
        >
          <authorImage.type
            {...authorImage.props}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              height: '100%'
            }}
          />
        </Themed.a>
      )}

      <div
        sx={{
          paddingY: 'xs',
          variant: styles('content')
        }}
      >
        <Themed.h1
          sx={{
            marginTop: 0,
            marginBottom: 'xxs',
            fontWeight: 'bold',
            paddingBottom: 0,
            variant: styles('name')
          }}
          as="h1"
        >
          <a
            href={authorUrl}
            sx={{
              textDecoration: 'none',
              borderBottom: 0
            }}
          >
            <span>{name}</span>
            <span sx={{ variant: styles('role') }}>{role}</span>
          </a>
        </Themed.h1>
        <BioElement
          sx={{
            fontSize: 'sm',
            marginY: 0,
            width: ['100%', '75%', '60%'],
            variant: styles('bio')
          }}
        >
          {bio}
        </BioElement>
        {socials.length === 0 ? (
          ''
        ) : (
          <div
            sx={{
              marginTop: 'sm',
              paddingLeft: 'xs',
              variant: styles('details')
            }}
          >
            {socials}
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthorProfile
