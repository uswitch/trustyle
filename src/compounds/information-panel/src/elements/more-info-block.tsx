/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface MoreInformationBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export const MoreInformationBlock: React.FC<MoreInformationBlockProps> = ({
  title,
  children
}) => (
  <div
    sx={{
      background: '#fff',
      color: '#333',
      alignItems: 'center',
      fontSize: '14px',
      boxSizing: 'border-box',
      display: 'block',
      width: ['auto', '50%'],
      marginTop: 'sm',
      marginBottom: [0, 'sm'],
      marginLeft: 'sm',
      marginRight: 'sm',
      ':nth-of-type(even)': {
        marginLeft: ['sm', '0']
      }
    }}
  >
    <div
      sx={{
        padding: '15px 20px 20px',
        lineHeight: ['1.618em', 'inherit']
      }}
    >
      <div sx={{ variant: 'compounds.information-panel.block.title' }}>
        {title}
      </div>

      <div sx={{ background: '#fff', overflow: 'auto' }}>{children}</div>
    </div>
  </div>
)

export default MoreInformationBlock
