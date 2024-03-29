/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed, useThemeUI } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

type Variant = 'pros' | 'cons' | 'checklist' | 'check-circle' | 'bullet'

const getTitleIcon = (variant?: Variant) => {
  const { theme }: any = useThemeUI()
  let titleIcon: Glyph | undefined
  if (variant === 'pros') titleIcon = 'thumb-up'
  if (variant === 'cons') titleIcon = 'thumb-down'

  return variant && titleIcon ? (
    <Icon
      color={theme.elements?.list && theme.elements.list[variant].color}
      glyph={titleIcon}
      size={24}
    />
  ) : null
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
      color: element && element.bullet ? element.bullet.color : 'black',
      ...sx['::before'],
      ...before
    }
  } else if (listType === 'numeric') {
    sx['::before'] = {
      content: 'counter(li)',
      color: element && element.numeric ? element.numeric.color : 'black',
      ...sx['::before'],
      ...before
    }
  }

  return (
    <li sx={sx} {...props}>
      {variant && (
        <Icon
          color={theme.elements?.list[variant]?.color}
          glyph={theme.elements?.list[variant]?.glyph}
          size={24}
        />
      )}
      {children}
    </li>
  )
}

interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
  listType?: 'numeric' | 'bullet'
  variant?: Variant
  title?: string
  items?: any[]
}

export const List: React.FC<ListProps> = ({
  children,
  variant,
  title,
  listType = 'bullet',
  items = [],
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

  const h6 = (
    <Themed.h6 sx={{ variant: getVariant('title') }}>
      <span sx={{ display: 'none' }}>{getTitleIcon(variant)}</span>
      {title}
    </Themed.h6>
  )

  const childrenWithProps = () => {
    return React.Children.map(children, (childComponent: any) => {
      return React.cloneElement(childComponent, { listType, variant })
    })
  }

  const listItems = () => {
    return items.map((item, i) => (
      <ListItem key={i} listType={listType} variant={variant}>
        {item}
      </ListItem>
    ))
  }

  const Items = items.length ? listItems() : childrenWithProps()

  return (
    <div>
      {title && h6}
      {listType === 'numeric' ? (
        <ol {...props} sx={sx}>
          {Items}
        </ol>
      ) : (
        <ul {...props} sx={sx}>
          {Items}
        </ul>
      )}
    </div>
  )
}
