/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

import * as st from './styles'

type PhaseIconVariant = 'open' | 'complete' | 'incomplete'

// This is a bit of a hack to ensure that the progress bar starts after the 'step number'
const STARTING_PROGRESS = 0.1

interface Phase {
  title: string
  open: boolean
  complete: boolean
  progress: number
}

interface PhaseIconProps {
  variant: PhaseIconVariant
  step: number
}

interface FunnelPhaseProps {
  step: number
  phase: Phase
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  phases: Phase[]
}

const PhaseIcon: React.FC<PhaseIconProps> = ({ variant, step }) => (
  <div css={st.phaseIcon(variant)}>{step}</div>
)

const FunnelPhase: React.FC<FunnelPhaseProps> = ({
  step,
  phase: { open, complete, title, progress }
}) => (
  <div css={st.phaseWrap(open)}>
    <div
      css={st.phaseProgress}
      style={{
        width: `${STARTING_PROGRESS * 100 +
          progress * (1 - STARTING_PROGRESS) * 100}%`
      }}
    />
    <div css={st.phaseLabel}>
      <div css={st.phasePart}>
        <PhaseIcon
          step={step}
          variant={open ? 'open' : complete ? 'complete' : 'incomplete'}
        />
      </div>
      {open && <div css={st.phasePart}>{title}</div>}
    </div>
  </div>
)

const FunnelProgress: React.FC<Props> = ({ phases, ...rest }) => {
  const { theme }: any = useThemeUI()

  console.log(theme)

  return (
    <div {...rest} css={st.funnelProgress}>
      {phases.map((phase, ind) => (
        <FunnelPhase key={ind} step={ind + 1} phase={phase} />
      ))}
    </div>
  )
}

export default FunnelProgress
