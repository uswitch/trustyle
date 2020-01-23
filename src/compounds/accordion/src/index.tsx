/** @jsx jsx */

import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

const Accordion: React.FC<Props> = ({
  title,
  children
}) => {
  // const { theme }: any = useThemeUI()
  const [isOpen, setIsOpen] = useState(false)

  return <div>
    <button 
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: 'base',
        background: 'none',
        border: 0,
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div 
        sx={{ 
          flex: '1', 
          textAlign: 'left' 
        }}>
        {title}
      </div>
      <Icon 
        color='black'
        glyph='caret'
        direction={isOpen ? 'down' : 'right'}
        size={16}
      />
    </button>        
    <div sx={{
      overflow: 'hidden',
      height: isOpen ? 'auto' : '0'
    }}>
      {children}
    </div>
  </div>
}

export default Accordion
