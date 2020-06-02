/** @jsx jsx */

import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import { ProgressBar } from '@uswitch/trustyle.progress-bar'

interface Step {
  name: string
  selected: boolean
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  initSteps: Step[]
  onClickStep: () => void
  onClickBack: () => void
}

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  onClickStep?: (e: any) => void
  number: number
  name?: string
}

interface NumberProps extends React.HTMLAttributes<HTMLDivElement> {
  number: number
  variant: string
}

const Number: React.FC<NumberProps> = ({ variant, number }) => {
  return (
    <span
      sx={{
        variant: variant,
        borderRadius: '50%',
        display: 'inline-block',
        textAlign: 'center',
        width: '24px',
        height: '24px',
        cursor: 'pointer'
      }}
    >
      {number}
    </span>
  )
}

const StepSelected: React.FC<StepProps> = ({ number, name }) => (
  <span sx={{ display: 'table-cell', width: '100%' }}>
    <Number number={number} variant="compounds.stepper.selectedNumberCircle" />
    <span sx={{ cursor: 'pointer' }}>{name}</span>
  </span>
)

const StepUnselected: React.FC<StepProps> = ({ onClickStep, number }) => (
  <span sx={{ display: 'table-cell' }} onClick={onClickStep}>
    <Number
      variant="compounds.stepper.unselectedNumberCircle"
      number={number}
    />
  </span>
)

const Stepper: React.FC<Props> = ({
  initSteps,
  onClickStep = () => {},
  onClickBack = () => {}
}) => {
  const [currentStep, setCurrentStep] = useState(
    initSteps.findIndex(({ selected }) => selected)
  )
  const [steps, setSteps] = useState(initSteps)

  const goToStep = (toStep: number) =>
    steps.map((step: Step, idx: number) => ({
      ...step,
      selected: idx === toStep
    }))

  const oneStepBack = (currentStepIdx: number) => {
    if (currentStepIdx === 0) return steps
    setCurrentStep(currentStepIdx - 1)
    setSteps(goToStep(currentStepIdx - 1))
  }

  return (
    <div sx={{ variant: 'compounds.stepper' }}>
      <div sx={{ display: 'table', variant: 'compounds.stepper' }}>
        {steps.map(({ name, selected }, idx) =>
          selected ? (
            <StepSelected name={name} number={idx + 1} />
          ) : (
            <StepUnselected
              onClickStep={() => {
                setSteps(goToStep(idx))
                onClickStep()
              }}
              number={idx + 1}
            />
          )
        )}
      </div>
      <ProgressBar current={currentStep} max={steps.length - 1} />
      <div
        onClick={() => {
          oneStepBack(currentStep)
          onClickBack()
        }}
      >
        {'<'}
      </div>
    </div>
  )
}

export default Stepper
