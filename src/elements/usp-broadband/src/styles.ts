import { ThemeUIStyleObject } from '@theme-ui/css'

import { getUspColor } from './helper'

export const listItem: ThemeUIStyleObject = {
  listStyle: 'none',
  marginBottom: '0 !important'
}

export const generateBadgeStyle = ({
  color = 'neutral'
}: {
  color?: string
}) => ({
  backgroundColor: color === 'black-friday' ? getUspColor(color) : 'white',
  color: color === 'black-friday' ? 'white' : 'black',
  border: color === 'black-friday' ? 'none' : `1px solid ${getUspColor(color)}`,
  width: 'auto',
  height: '32px',
  'div svg': {
    size: '20px'
  },
  borderRadius: '100px',
  padding: '4px 8px',
  fontSize: '14px',
  boxSizing: 'border-box',
  fontFamily:
    '"Helvetica Now Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
  display: 'inline-flex',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '400'
})
