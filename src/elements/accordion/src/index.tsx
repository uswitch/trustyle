/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  isInitiallyOpen: boolean
}

const Accordion: React.FC<Props> = ({
  title,
  isInitiallyOpen,
  children
}) => {
  const { theme: { accordionTheme = {}, colors = {} } }: any = useThemeUI()
  const [isOpen, setIsOpen] = useState(!!isInitiallyOpen)

  return <div sx={{ marginBottom: 'xxs' }}>
    <button 
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: 'base',
        background: 'none',
        border: 0,
        padding: '5px 0',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        fontWeight: 'bold',
        color: accordionTheme.textColor,
        alignItems: 'center'
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
        color={isOpen ? colors[accordionTheme.caret.activeColor] : colors[accordionTheme.caret.color]}
        glyph='caret'
        direction={isOpen ? 'up' : 'down'}
        size={16}
      />
    </button>        
    <div sx={{
      overflow: 'hidden',
      height: isOpen ? 'auto' : '0',
    }}>
      {children}
    </div>
  </div>
}

export default Accordion
