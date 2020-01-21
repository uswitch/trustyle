/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import dayjs from '@uswitch/trustyle.date'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  author: string
  authorImage?: React.ReactElement
  date: number
}

const Author: React.FC<Props> = ({ title, author, authorImage, date }) => {
  const { theme }: any = useThemeUI()

  const getTheme = (key: string) => theme.author && theme.author[key]

  return (
    <div
      sx={{
        padding: 'md',
        borderRadius: 1,
        display: 'flex',
        alignItems: ['normal', 'center'],
        flexDirection: ['column', 'row'],
        ...getTheme('main')
      }}
    >
      {authorImage && (
        <div
          sx={{
            flexShrink: 0,
            height: ['80px', '110px'],
            width: ['80px', '110px'],
            marginRight: [0, 'md']
          }}
        >
          <authorImage.type
            {...authorImage.props}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              borderRadius: '50%',
              ...getTheme('image')
            }}
          />
        </div>
      )}

      <div>
        <Styled.h4
          sx={{
            marginTop: ['1em', 0],
            ...getTheme('heading')
          }}
        >
          {title}
        </Styled.h4>
        <Styled.p
          sx={{
            fontSize: 'xs',
            ...getTheme('text')
          }}
        >
          Updated on {dayjs(date).format('LL')}
        </Styled.p>
        <Styled.a
          sx={{
            color: 'dark-1',
            fontSize: ['xs', 'base'],
            ...getTheme('link')
          }}
        >
          More from {author}
        </Styled.a>
      </div>
    </div>
  )
}

export default Author
