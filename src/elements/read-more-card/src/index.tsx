/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  href: string
}

const outerElementSx = {
  variant: 'styles.h4',

  display: 'flex',
  alignItems: 'center',
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
  paddingRight: 'sm',
  paddingTop: 'sm',
  paddingBottom: 'base',
  backgroundColor: 'grey-05'
}

const ReadMoreCard: React.FC<Props> = ({ text, href }) => {
  return (
    <a href={href} sx={outerElementSx}>
      <div sx={{ flexGrow: 1 }}>{text}</div>
      <div sx={{ flexShrink: 0, paddingLeft: 'md' }}>
        <Icon glyph={'arrow'} color={'primary'} direction={'right'} size={18} />
      </div>
    </a>
  )
}

export default ReadMoreCard
