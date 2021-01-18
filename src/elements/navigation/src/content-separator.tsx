/** @jsx jsx */

import React from 'react'
import { jsx, Styled } from 'theme-ui'

import { makeStyles, useNavigation } from '.'

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  title?: string
}

const ContentSeparator: React.FC<Props> = ({ title, children, ...props }) => {
  const { styles = makeStyles() } = useNavigation()

  return (
    <li
      sx={{
        borderBottom: '1px solid',
        borderColor: 'light-grey-blue',
        mb: 'md',
        ':last-of-type': {
          borderBottom: 'none'
        },
        variant: styles('content-separator')
      }}
      {...props}
    >
      {title && (
        <Styled.h5
          sx={{
            textTransform: 'uppercase',
            fontFamily: 'base',
            fontWeight: 'bold',
            fontSize: [10, 10],
            opacity: 0.5,
            margin: 0,
            mb: 'sm',
            variant: styles('content-separator.title')
          }}
        >
          {title}
        </Styled.h5>
      )}

      {children}
    </li>
  )
}

export default ContentSeparator
