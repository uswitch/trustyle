/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface EligibilityProps extends React.HTMLAttributes<HTMLDivElement> {
  moreInformationPanel: React.ReactNode[]
  moreInformationButton?: React.ReactNode
  moreInformationLabel?: string
}

export const Eligibility: React.FC<EligibilityProps> = ({
  moreInformationPanel,
  moreInformationButton,
  moreInformationLabel = 'More information'
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div sx={{ background: '#f2f3f4' }}>
      <div
        sx={{
          display: 'block',
          margin: 'auto',
          height: open ? 'auto' : '0px',
          transition: 'height .4s ease-in-out',
          overflow: 'hidden'
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            alignItems: 'stretch',
            background: '#f2f3f4',
            justifyContent: 'center'
          }}
        >
          {moreInformationPanel}
        </div>

        <div
          sx={{
            padding: ['15px 20px 20px', '0 20px'],
            maxWidth: '420px',
            margin: '0 auto'
          }}
        >
          {moreInformationButton}
        </div>
      </div>

      <button
        sx={{
          background: '#f2f3f4',
          border: 'none',
          borderBottom: ['1px dashed #b1b1b1', 'none'],
          width: '100%',
          margin: 'auto',
          padding: '8px',
          lineHeight: '1.618em',
          color: '#34454E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          boxSizing: 'border-box',
          outline: 'none'
        }}
        onClick={() => setOpen(!open)}
      >
        <div sx={{ pr: '15px' }}>{moreInformationLabel}</div>
        <Icon
          color="#34454E"
          glyph={'caret'}
          direction={open ? 'up' : 'down'}
          size={10}
        />
      </button>
    </div>
  )
}

// export default Eligibility
