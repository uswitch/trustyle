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
  className?: string
}

const EmailSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <g fill="none">
      <ellipse cx="17.848" cy="17.864" fill="#008FE9" rx="17.848" ry="17.864" />
      <path
        fill={colors.white}
        d="M10.598 24.02h14.68c.608 0 1.101-.493 1.101-1.102v-9.52c0-.608-.493-1.101-1.101-1.101h-14.68c-.608 0-1.102.493-1.102 1.1v9.521c0 .609.494 1.102 1.102 1.102z"
      />
      <path
        fill={colors.azure}
        d="M17.958 20.225a1.78 1.78 0 01-1.108-.383l-5.156-4.099.744-.892 5.155 4.098a.59.59 0 00.73-.001l5.126-4.097.746.892-5.124 4.096a1.782 1.782 0 01-1.113.386"
      />
    </g>
  </svg>
)

const CalSVG = () => (
  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
      fill={colors.blueGrey}
    />
    <path
      d="M11.578 24.358h12.595v-7.995H11.578v7.995zm14.029-11.654H10.144a.653.653 0 00-.668.64v12.387c0 .354.299.64.668.64h15.463c.37 0 .669-.286.669-.64V13.344c0-.354-.3-.64-.67-.64h.001zm-13.235-1.139h1.738V9.287h-1.738v2.278zm9.848 0h1.738V9.287H22.22v2.278z"
      fill={colors.white}
    />
  </svg>
)

const CheckSVG = () => (
  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
      fill={colors.blueGrey}
    />
    <path
      d="M18 27.9c5.468 0 9.9-4.432 9.9-9.9S23.468 8.1 18 8.1 8.1 12.532 8.1 18s4.432 9.9 9.9 9.9z"
      fill={colors.white}
    />
    <path
      d="M21.452 14.7l1.498 1.399-5.952 6.026-3.948-3.808 1.559-1.342 2.45 2.364 4.393-4.639z"
      fill={colors.blueGrey}
    />
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

export const BulletListTimeline: React.FC<Props> = ({ stages, className }) => (
  <ul css={st.highlights} className={className}>
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

export default BulletListTimeline
