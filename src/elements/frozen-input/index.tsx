/** @jsx jsx */

import React from 'react'
import { jsx } from '@emotion/core'

import { Icon } from '../../elements/icon'
import { azure } from '../../styles/colors'

import * as st from './styles'

interface LockProps {
  fieldLabel?: string
  text: string
  unfreeze?: () => void
}

export const FrozenInput = ({ fieldLabel, text, unfreeze }: LockProps) => (
  <div css={st.root}>
    <p css={st.value}>{text}</p>
    <button aria-label={`Edit ${fieldLabel}`} css={st.edit} onClick={unfreeze}>
      <Icon color={azure} glyph="edit" />
    </button>
  </div>
)
