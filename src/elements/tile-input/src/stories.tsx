/** @jsx jsx */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { radios, optionsKnob as options } from '@storybook/addon-knobs'
import { jsx } from '@emotion/core'

import { TileInput } from './.'

const valuesRadio = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E'
}

storiesOf('Elements|Tile Inputs', module)
  .add('example', () => {
    const optionSelect = options('Radio', valuesRadio, 'A', { display: 'radio' })
    return (
      <div css={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {Object.keys(valuesRadio).map(radioValue => (
          <TileInput
            key={radioValue}
            name={radioValue}
            checked={radioValue === optionSelect}
            value={optionSelect}
            label={radioValue}
          >
            Test
          </TileInput>
        ))}
      </div>
    )
  })
