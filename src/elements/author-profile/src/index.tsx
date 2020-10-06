/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  authorImage?: React.ReactElement
  authorUrl: string
  bio: string
  email?: string
  twitterLink?: string
  linkedInLink?: string
  className?: string
  showDetails?: boolean
  variant: string
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
  variant
}) => {
  const makeStyles = (variant: string) => (element?: string) =>
    `elements.author-profile${variant ? `.variants.${variant}` : `.base`}${
      element ? `.${element}` : ''
    }`

  const styles = makeStyles(variant)

  return (
    <div
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        variant: styles('main')
      }}
    >
      {authorImage && (
        <Styled.a
          href={authorUrl}
          sx={{
            flexShrink: 0,
            height: '87px',
            width: '87px',
            marginRight: 'sm',
            alignSelf: 'baseline',
            borderBottom: 0,
            paddingRight: '0px !important'
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
        </Styled.a>
      )}

      <div
        sx={{
          paddingY: 'xs'
        }}
      >
        <Styled.h2
          sx={{
            marginTop: 0,
            marginBottom: 'xxs',
            fontWeight: 'bold',
            paddingBottom: 0,
            variant: styles('name')
          }}
          as="h2"
        >
          <a
            href={authorUrl}
            sx={{
              textDecoration: 'none',
              borderBottom: 0
            }}
          >
            <span>{name}</span>
            <span>{role}</span>
          </a>
        </Styled.h2>
      </div>
      <Styled.p
        sx={{
          fontSize: 'sm',
          marginY: 0,
          width: ['100%', '75%', '60%']
        }}
      >
        {bio}
      </Styled.p>
      <div
        sx={{
          variant: styles('details'),
          marginTop: 'sm',
          paddingLeft: 'xs'
        }}
      >
        {email && (
          <Styled.a
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
              <Icon
                glyph="email-filled"
                size={22}
                color="grey-80"
                fill="black"
              />
              {showDetails && <span>{email}</span>}
            </div>
          </Styled.a>
        )}

        {twitterLink && (
          <Styled.a
            href={twitterLink}
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
          </Styled.a>
        )}
        {linkedInLink && (
          <Styled.a
            href={linkedInLink}
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
          </Styled.a>
        )}
      </div>
    </div>
  )
}

export default AuthorProfile
