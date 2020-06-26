/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Button, Variant } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

interface Button {
  text: string
  showIcon?: boolean
  onClick?: () => void
}

interface Props {
  yesButton?: Button
  noButton?: Button
}
const HelpfulVote: React.FC<Props> = ({
  yesButton = {
    text: 'Yes',
    showIcon: true
  },
  noButton = {
    text: 'No',
    showIcon: true
  }
}) => {
  const btnVariant: Variant = 'secondary'
  const btnSx = {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start',
    border: 'none',
    svg: {
      marginRight: 'xs'
    },
    variant: 'compounds.helpful-vote.button'
  }

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        alignItems: ['start', 'center'],
        padding: ['sm', 'md'],
        border: '1px solid',
        width: '100%',
        height: 'fit-content',
        boxSizing: 'border-box',
        maxWidth: 611,
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: 'md',
        lineHeight: 'heading',
        variant: 'compounds.helpful-vote.container'
      }}
    >
      <div
        sx={{
          marginRight: ['sm', 'md'],
          flex: 'none',
          marginBottom: ['md', 0]
        }}
      >
        Did you find this guide useful?
      </div>
      <div
        sx={{
          width: '100%',
          display: 'flex'
        }}
      >
        <Button
          onClick={yesButton.onClick}
          sx={{ ...btnSx, marginRight: 'xs' }}
          variant={btnVariant}
        >
          {yesButton.showIcon && (
            <Icon color="uswitch-navy" glyph="check" size={16} />
          )}
          {yesButton.text}
        </Button>
        <Button onClick={noButton.onClick} sx={btnSx} variant={btnVariant}>
          {noButton.showIcon && (
            <Icon color="uswitch-navy" glyph="close" size={16} />
          )}
          {noButton.text}
        </Button>
      </div>
    </div>
  )
}

export default HelpfulVote
