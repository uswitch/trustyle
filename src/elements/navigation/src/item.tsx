/** @jsx jsx */

import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Direction, Glyph, Icon } from '@uswitch/trustyle.icon'
import { Button } from '@uswitch/trustyle.button'

import { Item as ItemType } from './types'

import { makeStyles, useNavigation } from '.'

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  item: ItemType
  icon?: {
    glyph: Glyph
    direction?: Direction
    position?: 'right' | 'left'
    size?: number
    color?: string
  }
  minimized?: boolean
}

const Item: React.FC<Props> = ({
  item,
  icon = {},
  minimized = false,
  ...props
}) => {
  const {
    glyph = 'caret',
    direction = 'right',
    position = 'right',
    size = 12,
    color = 'text'
  } = icon
  const { title, description } = item
  const { styles = makeStyles() } = useNavigation()

  return (
    <li
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: ['xs', 'xs'],
        mb: minimized ? 'xs' : 'md',
        cursor: 'pointer',
        variant: styles(`nav-item${minimized ? '.minimized' : '.base'}`)
      }}
      {...props}
    >
      {!minimized && (
        <img
          sx={{
            backgroundColor: 'light-blue',
            borderRadius: '50%',
            width: 40,
            height: 40,
            mr: 10
          }}
          src={item.icon}
        />
      )}

      {icon && !minimized && (
        <Button
          variant="link"
          sx={{
            width: 24,
            height: 24,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: position !== 'right' ? '-1' : '1',
            ml: position === 'left' ? 0 : 'auto',
            mr: position === 'right' ? 0 : 'xs'
          }}
        >
          <Icon glyph={glyph} color={color} size={size} direction={direction} />
        </Button>
      )}

      <div sx={{ variant: styles('nav-item.title-container') }}>
        <Styled.h5
          sx={{
            fontWeight: minimized ? 'normal' : 'bold',
            fontSize: ['xs', 'xs'],
            lineHeight: '20px',
            my: 0,
            variant: styles(
              `nav-item${minimized ? '.minimized' : '.base'}.title`
            )
          }}
        >
          {title}
        </Styled.h5>

        {!minimized && description && (
          <Styled.p
            sx={{
              my: 0,
              fontSize: 12,
              color: 'dark-grey-blue',
              whiteSpace: 'nowrap'
            }}
          >
            {description}
          </Styled.p>
        )}
      </div>
    </li>
  )
}

export default Item
