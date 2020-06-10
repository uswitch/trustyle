/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  href: string
}

const ReadMoreCard: React.FC<Props> = ({ text, href }) => {
  const outerElementSx = {
    variant: 'styles.h4',

    display: 'block',
    borderWidth: 0,
    borderLeftWidth: 6,
    borderStyle: 'solid',
    borderColor: 'primary',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      textDecoration: 'underline',
      color: 'anchor-hover',
      backgroundColor: 'grey-10'
    },
    paddingLeft: 'md',
    paddingRight: 'xl',
    paddingTop: 'sm',
    paddingBottom: 'base',
    backgroundColor: 'grey-05'
  }

  return (
    <a href={href} sx={outerElementSx}>
      {text}
    </a>
  )
}

export default ReadMoreCard
