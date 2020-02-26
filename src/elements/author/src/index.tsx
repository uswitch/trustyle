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
  editorUrl: string
}

const Author: React.FC<Props> = ({
  name,
  role,
  editorName,
  editorRole,
  authorImage,
  date,
  authorUrl,
  editorUrl
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        variant: 'author.main'
      }}
    >
      {authorImage && (
        <a
          href={authorUrl}
          sx={{
            flexShrink: 0,
            height: ['48px', '56px'],
            width: ['48px', '56px'],
            marginRight: 'sm'
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
        </a>
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
            href={authorUrl}
            sx={{
              textDecoration: 'none',
              variant: 'author.link'
            }}
          >
            Written by {name}, {role}
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
            href={editorUrl}
            sx={{
              textDecoration: 'none',
              variant: 'author.link'
            }}
          >
            {editorName &&
              `Edited by ${editorName}${editorRole ? `, ${editorRole}` : ''}, `}
          </Styled.a>
          {dayjs(date).format('LL')}
        </Styled.p>
      </div>
    </div>
  )
}

export default Author
