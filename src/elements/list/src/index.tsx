/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'

interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
  listType?: 'numeric' | 'bullet'
  variant?: string
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
      return React.cloneElement(childComponent, { listType })
    }
  )

  return (
    <div>
      {title && <Styled.h6>{title}</Styled.h6>}
      {listType === 'numeric' ? (
        <ol {...props} sx={sx}>
          {childrenWithProps}
        </ol>
      ) : (
        <ul {...props} sx={sx}>
          {children}
        </ul>
      )}
    </div>
  )
}

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  listType?: 'numeric' | 'bullet'
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
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
      {children}
    </li>
  )
}
