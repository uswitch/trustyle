import { ThemeUIStyleObject } from '@theme-ui/css'

import { getUspColor } from './helper'

export const listItem: ThemeUIStyleObject = {
  listStyle: 'none'
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
  minHeight: 32,
  height: 'initial',
  'div svg': {
    size: 20,
    marginTop: color === 'black-friday' ? '2px' : '1px'
  },
  padding: '4px 8px',
  fontSize: '14px',
  whiteSpace: 'normal',
  borderRadius: 16,
  alignItems: 'flex-start',
  '.usp-label': {
    lineHeight: '20px',
    alignSelf: 'center'
  }
})
