/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  labelText: string
  shareUrl: string
  twitterMessage?: string
  mailSubject: string
}

const SocialSharing: React.FC<Props> = ({
  className = '',
  labelText,
  shareUrl,
  twitterMessage,
  mailSubject
}) => {
  const styles = (element: string) => `elements.social-sharing.${element}`

  const encodedShareUrl = encodeURIComponent(shareUrl)

  return (
    <Styled.div
      className={className}
      sx={{
        variant: styles('main')
      }}
    >
      {(labelText && (
        <Styled.div
          sx={{
            variant: styles('label')
          }}
        >
          {labelText}
        </Styled.div>
      )) ||
        ''}

      <Styled.div
        sx={{
          variant: styles('buttons')
        }}
      >
        <Styled.a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
          target="_blank"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            borderBottom: 0,
            variant: styles('fb')
          }}
        >
          <Icon glyph="facebook2" size={20} color="#1877f2" />
        </Styled.a>
        <Styled.a
          href={`https://twitter.com/intent/tweet?url=${encodedShareUrl}${
            twitterMessage ? `&text=${encodeURIComponent(twitterMessage)}` : ''
          }`}
          target="_blank"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            borderBottom: 0,
            variant: styles('tw')
          }}
        >
          {' '}
          <Icon glyph="twitter" size={20} color="#1d9bf0" />
        </Styled.a>
        <Styled.a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
          target="_blank"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            borderBottom: 0,
            variant: styles('ln')
          }}
        >
          {' '}
          <Icon glyph="linkedIn" size={24} color="#2867b2" />
        </Styled.a>
        <Styled.a
          href={`mailto:?subject=${encodeURIComponent(
            mailSubject
          )}&body=${encodedShareUrl}`}
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            borderBottom: 0,
            variant: styles('email')
          }}
        >
          {' '}
          <Icon glyph="email" size={16} color="primary" />
        </Styled.a>
      </Styled.div>
    </Styled.div>
  )
}

export default SocialSharing
