/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import Author from '@uswitch/trustyle.author'
import dayjs from '@uswitch/trustyle.date'

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  authors: AuthorProps[]
  date: number
  variant?: string
  className?: string
}

const AuthorsGroup: React.FC<Props> = ({
  variant,
  date,
  authors,
  className
}) => {
  const getVariant = (element?: string) =>
    'compounds.' + variant ? `${variant}.${element}` : element

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        variant: getVariant('base')
      }}
      className={className}
    >
      <div
        sx={{
          display: ['none', 'block']
        }}
      >
        {dayjs(date).format('LL')}
        {<Styled.h6>Written by</Styled.h6>}
      </div>
      {authors.map((author: AuthorProps, key: number) => (
        <div
          key={key}
          sx={{ paddingBottom: 'sm', variant: getVariant('author') }}
        >
          <Author {...author} />
        </div>
      ))}
      <div
        sx={{
          display: ['block', 'none']
        }}
      >
        Updated on {dayjs(date).format('LL')}
      </div>
    </div>
  )
}

export default AuthorsGroup
