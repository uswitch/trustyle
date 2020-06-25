/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
  listType?: 'numeric' | 'bullet'
}

export const List: React.FC<ListProps> = ({
  children,
  listType = 'bullet',
  ...props
}) => {
  const sx: any = {
    listStyle: 'none',
    paddingLeft: 'sm',
    marginY: 'sm'
  }

  const childrenWithProps = React.Children.map(
    children,
    (childComponent: any) => {
      return React.cloneElement(childComponent, { listType })
    }
  )

  return listType === 'numeric' ? (
    <ol {...props} sx={sx}>
      {childrenWithProps}
    </ol>
  ) : (
    <ul {...props} sx={sx}>
      {children}
    </ul>
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

  const sx: any = {
    marginBottom: 'sm',
    counterIncrement: 'li',
    position: 'relative',
    paddingLeft: 'sm',
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
      ...sx['::before'],
      content: '"• "',
      color: theme.list && theme.list.bullet ? theme.list.bullet.color : 'black'
    }
  } else if (listType === 'numeric') {
    sx['::before'] = {
      ...sx['::before'],
      content: 'counter(li)',
      color:
        theme.list && theme.list.numeric ? theme.list.numeric.color : 'black'
    }
  }

  return (
    <li sx={sx} {...props}>
      {children}
    </li>
  )
}
