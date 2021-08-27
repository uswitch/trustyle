/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  labelText?: string
  shareUrl: string
  twitterMessage?: string
  mailSubject: string
}

const SocialSharing: React.FC<Props> = ({
  className = '',
  labelText = 'Share this guide',
  shareUrl,
  twitterMessage,
  mailSubject
}) => {
  const styles = (element: string) => `compounds.social-sharing.${element}`

  const encodedShareUrl = encodeURIComponent(shareUrl)

  return (
    <Themed.div
      className={className}
      sx={{
        variant: styles('main')
      }}
    >
      {(labelText && (
        <Themed.div
          sx={{
            variant: styles('label')
          }}
        >
          {labelText}
        </Themed.div>
      )) ||
        ''}

      <Themed.div
        sx={{
          variant: styles('buttons')
        }}
      >
        <Themed.a
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
        </Themed.a>
        <Themed.a
          href={`https://twitter.com/intent/tweet?${
            twitterMessage
              ? `text=${encodeURIComponent(twitterMessage)}`
              : `url=${encodedShareUrl}`
          }`}
          target="_blank"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            borderBottom: 0,
            variant: styles('tw')
          }}
        >
          <Icon glyph="twitter" size={20} color="#1d9bf0" />
        </Themed.a>
        <Themed.a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
          target="_blank"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            borderBottom: 0,
            variant: styles('ln')
          }}
        >
          <Icon glyph="linkedIn" size={24} color="#2867b2" />
        </Themed.a>
        <Themed.a
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
          <Icon glyph="email" size={16} color="primary" />
        </Themed.a>
      </Themed.div>
    </Themed.div>
  )
}

export default SocialSharing
