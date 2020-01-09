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
    listStyle: 'none'
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
    marginBottom: '20px',
    counterIncrement: 'li',
    position: 'relative',
    paddingLeft: '20px',
    '::before': {
      position: 'absolute',
      left: '0px'
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
