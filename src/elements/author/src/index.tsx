/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import dayjs from '@uswitch/trustyle.date'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  editorName?: string
  editorRole?: string
  authorImage?: React.ReactElement
  date: number
  authorUrl: string
  editorUrl?: string
  className?: string
}

const Author: React.FC<Props> = ({
  name,
  role,
  editorName,
  editorRole,
  authorImage,
  date,
  authorUrl,
  editorUrl,
  className
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        variant: 'elements.author.main'
      }}
      className={className}
    >
      {authorImage && (
        <Styled.a
          href={authorUrl}
          sx={{
            flexShrink: 0,
            height: [48, 56],
            width: [48, 56],
            marginRight: 'sm',
            variant: 'elements.author.image-link'
          }}
        >
          <authorImage.type
            {...authorImage.props}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              borderRadius: '50%',
              variant: 'elements.author.image'
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
            variant: 'elements.author.heading'
          }}
          as="h2"
        >
          <a
            href={authorUrl}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              borderBottom: 0,
              variant: 'elements.author.link'
            }}
          >
            Written by {name}, {role}
          </a>
        </Styled.h6>
        <Styled.p
          sx={{
            fontSize: 'xxs',
            marginY: 0,
            variant: 'elements.author.text'
          }}
        >
          <Styled.a
            href={editorUrl}
            sx={{
              textDecoration: 'none',
              borderBottom: 0,
              variant: 'elements.author.link'
            }}
          >
            {editorName &&
              `Edited by ${editorName}${editorRole ? `, ${editorRole}` : ''}, `}
          </Styled.a>
          {date !== undefined && dayjs(date).format('LL')}
        </Styled.p>
      </div>
    </div>
  )
}

export default Author
