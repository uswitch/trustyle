/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Sms: React.FC<Props> = ({ color, size }) => (
  <svg css={css([st.icon, st.size(size)])} viewBox="0 0 36 32">
    <defs>
      <path
        id="a"
        d="M10.712 1.363v2.133H2.399v26.371h18.358V18.134h2.4v12.212c0 .898-.795 1.654-1.817 1.654H1.817C.795 32 0 31.244 0 30.346V3.017c0-.898.795-1.654 1.817-1.654h8.895zm1.69 24.89c.662 0 1.2.478 1.2 1.066 0 .59-.538 1.067-1.2 1.067h-1.647c-.662 0-1.2-.478-1.2-1.067 0-.588.538-1.066 1.2-1.066zM32.935 0c.787 0 1.424.568 1.424 1.267l-.014 12.356c0 .698-.636 1.266-1.423 1.266H22.913l-3.953 2.967c-.854.73-2.54.279-2.54-.913v-2.071l-2.158.013c-.798.014-1.451-.558-1.451-1.267l.013-12.352c0-.698.637-1.266 1.424-1.266h18.687zM17.441 16.208l-.044.031-.042.034.086-.065zM31.959 2.133H15.223l-.012 10.614 2.158-.013c.797-.014 1.45.557 1.45 1.265v1.174l2.75-2.063c.266-.227.62-.353.987-.353h9.391l.012-10.624zm-8.356 6.213v2.133H18.88V8.346h4.722zm4.747-3.219V7.26H18.88V5.127h9.469z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(.75)">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#000" fill-rule="nonzero" xlinkHref="#a" />
      <g fill={color} mask="url(#b)">
        <ellipse
          cx="26.5"
          cy="23"
          rx="26.5"
          ry="23"
          transform="translate(-9 -7)"
        />
      </g>
    </g>
  </svg>
)
