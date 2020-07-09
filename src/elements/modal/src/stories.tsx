/** @jsx jsx */
import { jsx } from 'theme-ui'
import { action } from '@storybook/addon-actions'

import AllThemes from '../../../utils/all-themes'

import Modal from './'

export default {
  title: 'Elements|Modal'
}

export const PartialHeight = () => (
  <Modal
    ariaLabel="An example modal element"
    onClose={action('Clicked close')}
    focusLockProps={{
      whiteList: node => document.getElementById('app')?.contains(node) ?? false
    }}
  >
    Modal content
  </Modal>
)

PartialHeight.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const FullHeight = () => (
  <Modal
    height="full"
    ariaLabel="An example modal element"
    onClose={action('Clicked close')}
    focusLockProps={{
      whiteList: node => document.getElementById('app')?.contains(node) ?? false
    }}
  >
    Modal content
  </Modal>
)

FullHeight.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const PartialOverflowingContent = () => (
  <Modal
    ariaLabel="An example modal element"
    onClose={action('Clicked close')}
    focusLockProps={{
      whiteList: node => document.getElementById('app')?.contains(node) ?? false
    }}
  >
    {[...Array(100)].map((_, i) => (
      <p key={i}>test</p>
    ))}
  </Modal>
)

PartialOverflowingContent.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const FullOverflowingContent = () => (
  <Modal
    height="full"
    ariaLabel="An example modal element"
    onClose={action('Clicked close')}
    focusLockProps={{
      whiteList: node => document.getElementById('app')?.contains(node) ?? false
    }}
  >
    {[...Array(100)].map((_, i) => (
      <p key={i}>test</p>
    ))}
  </Modal>
)

FullOverflowingContent.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => (
  <AllThemes themes={['uswitch']}>
    <Modal
      ariaLabel="An example modal element"
      onClose={action('Clicked close')}
    >
      Modal content
    </Modal>
  </AllThemes>
)
