/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  authorImage?: React.ReactElement
  titleUrl: string
  variant?: string | 'condensed'
  subtitleUrl?: string
  className?: string
}

const Author: React.FC<Props> = ({
  title,
  subtitle,
  authorImage,
  titleUrl,
  variant,
  subtitleUrl,
  className
}) => {
  const getVariant = (element: string) =>
    `elements.author.${variant ? variant + '.' + element : element}`

  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        variant: getVariant('base')
      }}
      className={className}
    >
      {authorImage && (
        <Styled.a
          href={titleUrl}
          sx={{
            flexShrink: 0,
            height: [40, 64],
            width: [40, 64],
            marginRight: 'sm',
            variant: getVariant('imageLink')
          }}
        >
          <authorImage.type
            {...authorImage.props}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              borderRadius: '50%',
              variant: getVariant('image')
            }}
          />
        </Styled.a>
      )}

      <div>
        <Styled.h5
          sx={{
            marginTop: 0,
            fontWeight: 'bold',
            paddingBottom: 0,
            marginBottom: [0, 'xxs'],
            variant: getVariant('title')
          }}
        >
          <a
            href={titleUrl}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              variant: getVariant('link')
            }}
          >
            {title}
          </a>
        </Styled.h5>
        <Styled.p
          sx={{
            fontSize: 'xxs',
            marginY: 0,
            variant: getVariant('subtitle')
          }}
        >
          <Styled.a
            href={subtitleUrl}
            sx={{
              textDecoration: 'none',
              variant: getVariant('link')
            }}
          >
            {subtitle}
          </Styled.a>
        </Styled.p>
      </div>
    </div>
  )
}

export default Author
