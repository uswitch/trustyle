/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import css from '@emotion/css'
import { colors } from '@uswitch/trustyle.styles'

import * as st from './styles'

type Position = 'first' | 'middle' | 'last'

interface BulletProps {
  children: React.ReactNode
  position: Position
}

interface Props {
  stages: React.ReactNode[]
}

const EmailSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <ellipse cx="17.848" cy="17.864" fill="#008FE9" rx="17.848" ry="17.864" />
      <path
        fill={colors.white}
        d="M10.598 24.02h14.68c.608 0 1.101-.493 1.101-1.102v-9.52c0-.608-.493-1.101-1.101-1.101h-14.68c-.608 0-1.102.493-1.102 1.1v9.521c0 .609.494 1.102 1.102 1.102z"
      />
      <path
        fill={colors.azure}
        d="M17.958 20.225a1.78 1.78 0 0 1-1.108-.383l-5.156-4.099.744-.892 5.155 4.098c.212.168.52.168.73-.001l5.126-4.097.746.892-5.124 4.096a1.782 1.782 0 0 1-1.113.386"
      />
    </g>
  </svg>
)

const CalSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <defs>
      <filter
        id="a"
        width="220.8%"
        height="228.3%"
        x="-60.4%"
        y="-61.5%"
        filterUnits="objectBoundingBox"
      >
        <feMerge>
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx="18" cy="18" r="18" fill={colors.blueGrey} />
      <g fill={colors.white} filter="url(#a)" transform="translate(9.31 9.287)">
        <path d="M2.268 15.071h12.595V7.076H2.268v7.995zM16.297 3.417H.834c-.37 0-.668.286-.668.64v12.387c0 .354.299.64.668.64h15.463c.37 0 .669-.286.669-.64V4.057c0-.354-.3-.64-.67-.64zM3.062 2.278H4.8V0H3.062zM12.91 2.278h1.738V0H12.91z" />
      </g>
    </g>
  </svg>
)

const CheckSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <defs>
      <filter
        id="a"
        width="207.1%"
        height="207.1%"
        x="-53%"
        y="-53%"
        filterUnits="objectBoundingBox"
      >
        <feMerge>
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx="18" cy="18" r="18" fill={colors.blueGrey} />
      <g filter="url(#a)" transform="translate(8.1 8.1)">
        <circle cx="9.9" cy="9.9" r="9.9" fill="#FFF" />
        <path
          fill={colors.blueGrey}
          fillRule="nonzero"
          d="M13.352 6.6l1.498 1.399-5.952 6.026-3.948-3.808 1.559-1.342 2.45 2.364z"
        />
      </g>
    </g>
  </svg>
)

const Bullet: React.FC<BulletProps> = ({ position, children }) => (
  <li css={css([st.highlight, st[position]])}>
    <div css={st.highlightBulletIconContainer}>
      <i css={st.highlightBullet}>
        {position === 'first' && <EmailSVG />}
        {position === 'middle' && <CalSVG />}
        {position === 'last' && <CheckSVG />}
      </i>
    </div>
    <div css={st.highlightBulletContent}>{children}</div>
  </li>
)

export const BulletListTimeline: React.FC<Props> = ({ stages }) => (
  <ul css={st.highlights}>
    {stages.map((stage, index) => {
      const isFirst = index === 0
      const isLast = index === stages.length - 1
      return (
        <Bullet
          key={index}
          position={isFirst ? 'first' : isLast ? 'last' : 'middle'}
        >
          {stage}
        </Bullet>
      )
    })}
  </ul>
)
