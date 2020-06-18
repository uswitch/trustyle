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
  detailed?: boolean
}

const AuthorProfile: React.FC<Props> = ({
  name,
  role,
  authorImage,
  authorUrl,
  bio,
  email,
  detailed = false,
  className = ''
}) => {
  return (
    <div
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        variant: 'authorProfile.main'
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
              borderRadius: '50%'
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
            variant: 'authorProfile.name'
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
        {detailed && (
          <React.Fragment>
            <Styled.h6>Details</Styled.h6>
            <ul
              sx={{
                listStyleType: 'none',
                paddingLeft: 'sm',
                fontSize: 'xs',
                marginY: 'xs',
                variant: 'authorProfile.details'
              }}
            >
              {email && (
                <li>
                  <div
                    sx={{
                      display: 'flex'
                    }}
                  >
                    <Icon glyph="email" size={22} color="grey-80" />
                    {email}
                  </div>
                </li>
              )}
            </ul>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default AuthorProfile
