/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import Stepper from './index.tsx'

export default {
  title: 'Compounds|Stepper'
}

const initSteps = [
  { name: 'Step 1', selected: true },
  { name: 'Step 2', selected: false },
  { name: 'Step 3', selected: false }
]

export const Example = () => <Stepper initSteps={initSteps} />
