/** @jsx jsx */

import { Fragment, useState } from 'react'
import { jsx } from '@emotion/core'
import { Icon } from '@uswitch/trustyle.icon'
import { colors } from '@uswitch/trustyle.styles'

import * as st from './styles'

interface Props {
  fieldLabel?: string
  text?: string
  freezable?: boolean
}

export const FrozenInput: React.FC<Props> = ({
  fieldLabel,
  text,
  freezable,
  children
}) => {
  const [frozen, setFrozen] = useState(freezable && !!text)

  if (!frozen) {
    return <Fragment>{children}</Fragment>
  }

  return (
    <Fragment>
      <div css={st.root}>
        <p css={st.value}>{text}</p>
        <button
          aria-label={`Edit ${fieldLabel}`}
          css={st.edit}
          onClick={() => setFrozen(false)}
        >
          <Icon color={colors.azure} glyph="edit" />
        </button>
      </div>

      <div css={st.hidden}>{children}</div>
    </Fragment>
  )
}
