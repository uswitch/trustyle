/** @jsx jsx */

import { Fragment, useEffect, useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'
import { colors } from '@uswitch/trustyle.styles'

interface Props {
  text?: string
  freezable?: boolean
  inputRef?: React.RefObject<HTMLElement>
}

const editIconWidth = 69

export const FrozenInput: React.FC<Props> = ({
  text,
  freezable,
  inputRef,
  children
}) => {
  const [frozen, setFrozen] = useState(freezable && !!text)
  const { theme }: any = useThemeUI()
  const iconColor =
    (theme && theme.colors[theme.elements.input?.frozen?.button?.color]) ||
    colors.UswitchNavy

  useEffect(() => {
    if (freezable && !frozen && !!text && inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [frozen])

  if (!frozen) {
    return <Fragment>{children}</Fragment>
  }

  return (
    <Fragment>
      <div
        sx={{
          fontSize: 'xs',
          fontWeight: 'base',
          lineHeight: '1.29',
          alignItems: 'center',
          backgroundColor: 'frozen-bg',
          display: 'flex',
          height: '64px',
          justifyContent: 'space-between',
          variant: 'elements.input.frozen.base'
        }}
      >
        <p
          sx={{
            color: 'text',
            overflow: 'hidden',
            padding: '0 24px',
            textOverflow: 'ellipsis',
            width: `calc(100% - ${editIconWidth}px)`,
            variant: 'elements.input.frozen.text',
            m: 0
          }}
        >
          {text}
        </p>
        <button
          aria-label="Edit Value"
          sx={{ variant: 'elements.input.frozen.button' }}
          onClick={() => setFrozen(false)}
        >
          <Icon color={iconColor} glyph="edit" />
        </button>
      </div>

      <div sx={{ variant: 'elements.input.frozen.hidden' }}>{children}</div>
    </Fragment>
  )
}
