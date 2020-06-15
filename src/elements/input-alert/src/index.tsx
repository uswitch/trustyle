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

  const padding = get(theme, 'input-alert.padding')
  const notificationColor = get(theme, 'input-alert.notificationColor')
  const alertColor = get(theme, 'input-alert.alertColor')

  return (
    <div
      {...props}
      sx={{
        variant: 'input-alert',
        marginTop: `calc(${ARROW_SIZE}px + ${padding}px)`,
        backgroundColor: type === 'alert' ? alertColor : notificationColor,
        '&:before': {
          variant: 'input-alert.before',
          top: -ARROW_SIZE,
          borderLeft: `${ARROW_SIZE}px solid transparent`,
          borderRight: `${ARROW_SIZE}px solid transparent`,
          borderBottomWidth: ARROW_SIZE,
          borderBottomColor: type === 'alert' ? alertColor : notificationColor
        }
      }}
    >
      {children}
    </div>
  )
}
