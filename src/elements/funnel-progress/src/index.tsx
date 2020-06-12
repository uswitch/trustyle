/** @jsx jsx */

import React, { Fragment } from 'react'
import { jsx } from 'theme-ui'

type PhaseIconVariant = 'open' | 'complete' | 'incomplete'

// This is a bit of a hack to ensure that the progress bar starts after the 'step number'
const STARTING_PROGRESS = 0.1

interface Phase {
  key: string
  title: string
}

interface PhaseIconProps {
  variant: PhaseIconVariant
  step: number
}

interface FunnelPhaseProps {
  step: number
  open: boolean
  complete: boolean
  progress: number
  phase: Phase
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  phases: Phase[]
  currentPhaseKey: string
  progress: number
}

const PhaseIcon: React.FC<PhaseIconProps> = ({ variant, step }) => (
  <div sx={{ variant: `funnelProgress.base.phaseIcon.variants.${variant}` }}>
    {variant === 'complete' ? (
      <div sx={{ variant: 'funnelProgress.base.phaseCompleteIcon.base' }}>
        {step}
      </div>
    ) : (
      step
    )}
  </div>
)

const FunnelPhase: React.FC<FunnelPhaseProps> = ({
  step,
  open,
  complete,
  phase: { title }
}) => (
  <div
    sx={{
      variant: !open
        ? 'funnelProgress.base.phase.base'
        : 'funnelProgress.base.phase.variants.open'
    }}
  >
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

const FunnelProgress: React.FC<Props> = ({
  phases,
  currentPhaseKey,
  progress,
  ...rest
}) => {
  const currentPhaseIndex = phases.findIndex(
    ({ key }) => key === currentPhaseKey
  )

  return (
    <Fragment>
      <div {...rest} sx={{ variant: 'funnelProgress.base' }}>
        {phases.map((phase, ind) => (
          <FunnelPhase
            key={ind}
            step={ind + 1}
            open={ind === currentPhaseIndex}
            complete={ind < currentPhaseIndex}
            progress={progress}
            phase={phase}
          />
        ))}
      </div>
      <div
        sx={{
          variant: 'funnelProgress.base.progess.back',
          height: '4px',
          width: '100%',
          position: 'relative',
          backgroundColor: 'progress-bg',
          marginTop: '13px'
        }}
      >
        <div
          sx={{
            variant:
              progress !== 0
                ? 'funnelProgress.base.progress.base'
                : 'funnelProgress.base.progress.variants.start'
          }}
          style={{
            width:
              progress !== 0
                ? `${STARTING_PROGRESS * 100 +
                    progress * (1 - STARTING_PROGRESS) * 100}%`
                : '0%'
          }}
        />
      </div>
    </Fragment>
  )
}

export default FunnelProgress
