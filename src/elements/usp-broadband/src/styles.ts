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
  height: 32,
  'div svg': {
    size: '20px'
  }
})
