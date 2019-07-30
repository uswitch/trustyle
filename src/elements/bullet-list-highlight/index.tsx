/** @jsx jsx */

import React from 'react'
import { jsx } from '@emotion/core'
import * as colors from '@uswitch/trustyle.styles/lib/colors'
import { Icon } from '@uswitch/trustyle.icon'

import * as st from './styles'

interface BulletProps {
  children: React.ReactNode
}

interface Props {
  highlights: React.ReactNode[]
}

const Bullet: React.FC<BulletProps> = ({ children }) => (
  <li css={st.highlight}>
    <span>
      <i css={st.highlightBullet}>
        <Icon glyph="arrow" color={colors.white} direction="right" />
      </i>
    </span>
    <div css={st.highlightBulletContent}>{children}</div>
  </li>
)

export const BulletListHighlight: React.FC<Props> = ({ highlights }) => (
  <ul css={st.highlights}>
    {highlights.map((highlight, key) => (
      <Bullet key={key}>{highlight}</Bullet>
    ))}
  </ul>
)
