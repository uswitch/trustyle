/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<any> {
  checked: boolean
  size?: number
  className?: string
}

const SaveForLater: React.FC<Props> = ({
  checked,
  onClick,
  className,
  size = 40
}) => {
  return (
    <label sx={{ display: 'block' }}>
      <input
        sx={{
          marginLeft: '-9000px',
          appearance: 'none',
          position: 'absolute'
        }}
        type="checkbox"
      />
      <span
        sx={{ backgroundColor: 'transparent', outline: '0', border: '0' }}
        className={className}
        onClick={onClick}
      >
        {checked ? (
          <Icon glyph="bookmark-filled" color="#91CA50" size={size} />
        ) : (
          <Icon glyph="bookmark" color="#575761" size={size} />
        )}
      </span>
    </label>
  )
}

export default SaveForLater
