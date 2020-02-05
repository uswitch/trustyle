/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

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
  <div sx={{ variant: `funnelProgress.base.phaseIcon.variants.${variant}` }}>
    {step}
  </div>
)

const FunnelPhase: React.FC<FunnelPhaseProps> = ({
  step,
  phase: { open, complete, title, progress }
}) => (
  <div
    sx={{
      variant: !open
        ? 'funnelProgress.base.phase.base'
        : 'funnelProgress.base.phase.variants.open'
    }}
  >
    <div
      sx={{ variant: 'funnelProgress.base.progress.base' }}
      style={{
        width: `${STARTING_PROGRESS * 100 +
          progress * (1 - STARTING_PROGRESS) * 100}%`
      }}
    />
    <div sx={{ variant: 'funnelProgress.base.phaseLabel.base' }}>
      <div sx={{ variant: 'funnelProgress.base.phaseLabelPart.base' }}>
        <PhaseIcon
          step={step}
          variant={open ? 'open' : complete ? 'complete' : 'incomplete'}
        />
      </div>
      {open && (
        <div sx={{ variant: 'funnelProgress.base.phaseLabelPart.base' }}>
          {title}
        </div>
      )}
    </div>
  </div>
)

const FunnelProgress: React.FC<Props> = ({ phases, ...rest }) => (
  <div {...rest} sx={{ variant: 'funnelProgress.base' }}>
    {phases.map((phase, ind) => (
      <FunnelPhase key={ind} step={ind + 1} phase={phase} />
    ))}
  </div>
)

export default FunnelProgress
