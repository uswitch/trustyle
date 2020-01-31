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
}

const Author: React.FC<Props> = ({
  name,
  role,
  editorName,
  editorRole,
  authorImage,
  date
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
        <div
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
        </div>
      )}

      <div>
        <Styled.h6
          sx={{
            marginTop: 0,
            marginBottom: 'xxs',
            fontWeight: 'bold',
            variant: 'author.heading'
          }}
          as="h3"
        >
          Written by {name}, {role}
        </Styled.h6>
        <Styled.p
          sx={{
            fontSize: 'xxs',
            marginY: 0,
            variant: 'author.text'
          }}
        >
          {editorName && `Edited by ${editorName}, ${editorRole}, `}
          {dayjs(date).format('LL')}
        </Styled.p>
      </div>
    </div>
  )
}

export default Author
