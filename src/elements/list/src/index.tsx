/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

type Variant = 'pros' | 'cons'

interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
  listType?: 'numeric' | 'bullet'
  variant?: Variant
  title?: string
}

export const List: React.FC<ListProps> = ({
  children,
  variant,
  title,
  listType = 'bullet',
  ...props
}) => {
  const getVariant = (element: string) =>
    `elements.list.${variant ? `variants.${variant}.${element}` : element}`

  const sx: any = {
    listStyle: 'none',
    paddingLeft: 'sm',
    marginY: 'sm',
    variant: getVariant('base')
  }

  const childrenWithProps = React.Children.map(
    children,
    (childComponent: any) => {
      return React.cloneElement(childComponent, { listType, variant })
    }
  )

  return (
    <div>
      {title && (
        <Styled.h6 sx={{ variant: getVariant('title') }}>{title}</Styled.h6>
      )}
      {listType === 'numeric' ? (
        <ol {...props} sx={sx}>
          {childrenWithProps}
        </ol>
      ) : (
        <ul {...props} sx={sx}>
          {childrenWithProps}
        </ul>
      )}
    </div>
  )
}

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  listType?: 'numeric' | 'bullet'
  variant?: Variant
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  variant,
  listType = 'bullet',
  ...props
}) => {
  const { theme }: any = useThemeUI()

  const element: any = theme?.elements?.list || theme?.list || {} // latter is backwards compatibility
  const before: any =
    element?.[listType]?.['::before'] || element?.[listType]?.[':before'] || {}
  const sx: any = {
    marginBottom: 'sm',
    counterIncrement: 'li',
    position: 'relative',
    paddingLeft: 'sm',
    // handle bug in eevee that results in incorrect extra spacing
    p: {
      display: 'inline'
    },
    '::before': {
      // https://www.w3.org/Style/Examples/007/color-bullets.en.html
      position: 'absolute',
      left: '-1em',
      width: '1.5em',
      textAlign: 'right',
      direction: 'rtl'
    }
  }

  if (listType === 'bullet') {
    sx['::before'] = {
      content: '"• "',
      color:
        theme.list && theme.list.bullet ? theme.list.bullet.color : 'black',
      ...sx['::before'],
      ...before
    }
  } else if (listType === 'numeric') {
    sx['::before'] = {
      content: 'counter(li)',
      color:
        theme.list && theme.list.numeric ? theme.list.numeric.color : 'black',
      ...sx['::before'],
      ...before
    }
  }

  return (
    <li sx={sx} {...props}>
      {variant === 'pros' && <Icon color="green" glyph="tick" size={24} />}
      {variant === 'cons' && <Icon color="red" glyph="cross" size={24} />}
      {children}
    </li>
  )
}
