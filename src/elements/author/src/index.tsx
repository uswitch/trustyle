/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  authorImage?: React.ReactElement
  titleUrl: string
  subtitleUrl?: string
  className?: string
}

const Author: React.FC<Props> = ({
  title,
  subtitle,
  authorImage,
  titleUrl,
  subtitleUrl,
  className
}) => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      variant: 'author.main'
    }}
    className={className}
  >
    {authorImage && (
      <Styled.a
        href={titleUrl}
        sx={{
          flexShrink: 0,
          height: [48, 56],
          width: [48, 56],
          marginRight: 'sm',
          variant: 'author.image-link'
        }}
      >
        <authorImage.type
          {...authorImage.props}
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
            borderRadius: '50%',
            variant: 'author.image'
          }}
        />
      </Styled.a>
    )}

    <div>
      <Styled.h6
        sx={{
          marginTop: 0,
          marginBottom: 'xxs',
          fontWeight: 'bold',
          paddingBottom: 0,
          variant: 'author.heading'
        }}
        as="h2"
      >
        <a
          href={titleUrl}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            variant: 'author.link'
          }}
        >
          {title}
        </a>
      </Styled.h6>
      <Styled.p
        sx={{
          fontSize: 'xxs',
          marginY: 0,
          variant: 'author.text'
        }}
      >
        <Styled.a
          href={subtitleUrl}
          sx={{
            textDecoration: 'none',
            variant: 'author.link'
          }}
        >
          {subtitle}
        </Styled.a>
      </Styled.p>
    </div>
  </div>
)

export default Author
