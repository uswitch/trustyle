/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Button } from '../../button/src'
import { ButtonLink } from '../../button-link/src'

import ButtonGroup from './'

export default {
  title: 'Elements|Button Group'
}

export const Example = () => {
  return (
    <ButtonGroup>
      <Button variant="primary">Primary button</Button>
      <ButtonLink variant="secondary">Secondary button link</ButtonLink>
    </ButtonGroup>
  )
}
