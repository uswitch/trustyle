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
  className?: string
}

const AuthorProfile: React.FC<Props> = ({
  name,
  role,
  authorImage,
  authorUrl,
  bio,
  email,
  className = ''
}) => {
  return (
    <div
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        variant: 'elements.author-profile.main'
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
            alignSelf: 'baseline'
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
            variant: 'elements.author-profile.name'
          }}
          as="h2"
        >
          <a
            href={authorUrl}
            sx={{
              textDecoration: 'none'
            }}
          >
            {name}, {role}
          </a>
        </Styled.h2>
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
            variant: 'elements.author-profile.details',
            marginTop: 'sm',
            paddingLeft: 'xs'
          }}
        >
          {email && (
            <Styled.a
              href={'mailto:' + email}
              sx={{
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <div
                sx={{
                  display: 'flex'
                }}
              >
                <Icon glyph="email" size={22} color="grey-80" />
                {email}
              </div>
            </Styled.a>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorProfile
