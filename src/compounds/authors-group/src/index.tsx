/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import Author from '@uswitch/trustyle.author'
import dayjs from '@uswitch/trustyle.date'

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle: string
  titleUrl?: string
  subtitleUrl?: string
  authorImage?: React.ReactElement
  className?: string
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  authors: AuthorProps[]
  date: number
  variant?: 'condensed' | string
  className?: string
}

const AuthorsGroup: React.FC<Props> = ({
  variant,
  date,
  authors,
  className
}) => {
  const getVariant = (element: string) =>
    `compounds.authorsGroup.${variant ? `${variant}.${element}` : element}`

  return (
    <div sx={{ variant: getVariant('base') }}>
      <div
        sx={{
          marginBottom: 'md',
          paddingBottom: 'xxs',
          variant: getVariant('writtenBy')
        }}
      >
        <div
          sx={{
            fontSize: 'xxs',
            lineHeight: 'base',
            variant: getVariant('writtenBy.date')
          }}
        >
          {dayjs(date).format('LL')}
        </div>
        {
          <Styled.h6
            sx={{
              variant: getVariant('writtenBy.text')
            }}
          >
            Written by
          </Styled.h6>
        }
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          variant: getVariant('authors')
        }}
        className={className}
      >
        {authors.map((author: AuthorProps, key: number) => (
          <div
            key={key}
            sx={{ paddingBottom: 'sm', variant: getVariant('author') }}
          >
            <Author variant={variant} {...author} />
          </div>
        ))}
      </div>
      <Styled.p
        sx={{
          display: 'none',
          fontSize: 'xxs',
          variant: getVariant('updatedOn')
        }}
      >
        Updated on {dayjs(date).format('LL')}
      </Styled.p>
    </div>
  )
}

export default AuthorsGroup
