/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import SaveForLater from './'

export default {
  title: 'Elements/Save for later'
}

export const ExampleWithKnobs = () => {
  const [checked, setChecked] = React.useState(false)

  return (
    <div>
      <SaveForLater checked={checked} onClick={() => setChecked(!checked)} />
    </div>
  )
}
