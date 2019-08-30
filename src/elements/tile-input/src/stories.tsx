/** @jsx jsx */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { array, radios } from '@storybook/addon-knobs'
import { jsx } from '@emotion/core'

import { TileInput } from './.'

const defaultChoices = ['A', 'B', 'C', 'D', 'E']

storiesOf('Elements|Tile Inputs', module)
  .add('example', () => {
    const choices = array('Choices', defaultChoices)
    return (
      <div css={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {choices.map(choice => (
          <TileInput
            name={choice}
            checked={choice === choices[0]}
            value={choice}
            label={choice}
          >
            Test
          </TileInput>
        ))}
      </div>
    )
  })
