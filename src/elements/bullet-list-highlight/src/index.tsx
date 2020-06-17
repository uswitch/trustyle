/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { colors } from '@uswitch/trustyle.styles'
import { Icon } from '@uswitch/trustyle.icon'

import * as st from './styles'

interface BulletProps {
  children: React.ReactNode
  className?: string
}

interface Props {
  highlights: React.ReactNode[]
  className?: string
}

const Bullet: React.FC<BulletProps> = ({ children, className }) => (
  <li css={st.highlight} className={className}>
    <span>
      <i css={st.highlightBullet}>
        <Icon glyph="arrow" color={colors.white} direction="right" />
      </i>
    </span>
    <div css={st.highlightBulletContent}>{children}</div>
  </li>
)

export const BulletListHighlight: React.FC<Props> = ({
  highlights,
  className
}) => (
  <ul css={st.highlights} className={className}>
    {highlights.map((highlight, key) => (
      <Bullet key={key}>{highlight}</Bullet>
    ))}
  </ul>
)
