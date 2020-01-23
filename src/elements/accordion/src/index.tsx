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
  const { theme }: any = useThemeUI()
  const { colors = {} }  = theme
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
        padding: 0,
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
        color={isOpen ? colors[theme.accordion.caret.activeColor] : colors[theme.accordion.caret.color]}
        glyph='caret'
        direction={isOpen ? 'up' : 'down'}
        size={16}
      />
    </button>        
    <div sx={{
      overflow: 'hidden',
      height: isOpen ? 'auto' : '0',
      paddingTop: 'xxs'
    }}>
      {children}
    </div>
  </div>
}

export default Accordion
