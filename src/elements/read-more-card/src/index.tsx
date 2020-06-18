/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  href: string
  className?: string
  variant?: string
}

const baseStyle = {
  outer: {
    variant: 'styles.h4',

    display: 'flex',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: 'grey-05'
  },
  text: {
    flexGrow: 1
  },
  icon: {
    flexShrink: 0,
    paddingLeft: 'md'
  }
}

const variantStyles = {
  default: {
    outer: {
      ...baseStyle.outer,

      alignItems: 'center',
      borderWidth: 0,
      borderLeftWidth: 6,
      borderStyle: 'solid',
      borderColor: 'primary',
      paddingLeft: 'md',
      paddingRight: 'sm',
      paddingTop: 'sm',
      paddingBottom: 'base',
      '&:hover': {
        textDecoration: 'underline',
        color: 'anchor-hover',
        backgroundColor: 'grey-10'
      }
    },
    text: {
      ...baseStyle.text
    },
    icon: {
      ...baseStyle.icon
    }
  },
  cupcard: {
    outer: {
      ...baseStyle.outer,
      padding: 'md',
      flexDirection: 'column',
      alignItems: 'stretch',
      height: 176,
      '&:hover': {
        boxShadow: 'card',
        opacity: 1
      }
    },
    text: {
      ...baseStyle.text,
      marginBottom: 'md'
    },
    icon: {
      ...baseStyle.icon,
      alignSelf: 'flex-end'
    }
  }
}

const getStyle = (variant: string) =>
  variantStyles[variant] || variantStyles.default

const ReadMoreCard: React.FC<Props> = ({ text, href, className, variant }) => {
  const style = getStyle(variant)

  console.log(style.outer)

  return (
    <a href={href} sx={style.outer} className={className}>
      <div sx={style.text}>{text}</div>
      <div sx={style.icon}>
        <Icon glyph={'arrow'} color={'primary'} direction={'right'} size={18} />
      </div>
    </a>
  )
}

export default ReadMoreCard
