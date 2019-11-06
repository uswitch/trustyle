/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Letter: React.FC<Props> = ({ color, size }) => (
  <svg css={css([st.icon, st.size(size)])} viewBox="0 0 36 32">
    <defs>
      <path
        id="a"
        d="M18.96 0c.651 0 1.277.221 1.75.616l5.96 4.206.095.076c.483.426.754 1.006.754 1.61v2.739h-2.304V6.509a.208.208 0 0 0-.05-.133l-5.93-4.186-.096-.076a.271.271 0 0 0-.179-.066H2.556c-.14 0-.252.1-.252.224v27.456c0 .124.113.224.252.224h22.406c.14 0 .253-.1.253-.224V24.27h2.304v5.458c0 1.255-1.145 2.272-2.557 2.272H2.556C1.144 32 0 30.983 0 29.728V2.272C0 1.017 1.144 0 2.556 0zm12.292 8.706l4.344 3.861c.45.4.45 1.049 0 1.448L22.814 25.377c-.201.18-.47.286-.754.299l-4.73.222c-.697.033-1.267-.489-1.208-1.108l.385-4.084a.98.98 0 0 1 .333-.638L29.623 8.706c.45-.4 1.179-.4 1.629 0zM11.9 21.86v2.048H5.872V21.86H11.9zm18.537-10.983L18.767 21.25l-.24 2.54 2.97-.14 11.655-10.36-2.715-2.413zm-15.59 6.85v2.047H5.872v-2.048h8.975zm3.143-4.046v2.048H5.765v-2.048H17.99zm-.39-9.869v4.78c0 .198.166.35.355.35h4.66v2.047h-4.66c-1.475 0-2.658-1.08-2.658-2.398V3.813H17.6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
      <g fill={color} mask="url(#b)">
        <ellipse
          cx="27.5"
          cy="23"
          rx="26.5"
          ry="23"
          transform="translate(-9 -7)"
        />
      </g>
      <g fill={color} mask="url(#b)">
        <ellipse cx="26.5" cy="23" rx="26.5" ry="23" />
      </g>
    </g>
  </svg>
)
