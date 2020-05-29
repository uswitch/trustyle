/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'

type Type = 'notification' | 'alert'
export type ErrorMessages = string | { [index: string]: ErrorMessages }

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: Type
  children: React.ReactNode
}

const ARROW_SIZE = 8

export const InputAlert: React.FC<Props> = ({ type, children, ...props }) => {
  const { theme }: any = useThemeUI()

  const padding = get(theme, 55, theme.space.xs)
  const notificationColor = get(
    theme,
    'elements.input-alert.notificationColor',
    '#65717b'
  )
  const alertColor = get(theme, 'elements.input-alert.alertColor', '#db1818')

  return (
    <div
      {...props}
      sx={{
        fontFamily: 'base',
        fontSize: 'base',
        lineHeight: 1.38,
        color: get(theme, 'elements.input-alert.color', 'white'),
        padding: padding,
        marginTop: `calc(${ARROW_SIZE}px + ${padding}px)`,
        position: 'relative',
        borderRadius: get(theme, 'elements.input-alert.radii', theme.radii.sm),
        backgroundColor: type === 'alert' ? alertColor : notificationColor,
        '&:before': {
          position: 'absolute',
          content: "''",
          top: -ARROW_SIZE,
          width: 0,
          height: 0,
          borderLeft: `${ARROW_SIZE}px solid transparent`,
          borderRight: `${ARROW_SIZE}px solid transparent`,
          borderBottomWidth: ARROW_SIZE,
          borderBottomStyle: 'solid',
          borderBottomColor: type === 'alert' ? alertColor : notificationColor
        }
      }}
    >
      {children}
    </div>
  )
}
