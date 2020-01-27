/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  isInitiallyOpen?: boolean
}

const Accordion: React.FC<Props> = ({
  title,
  isInitiallyOpen,
  children
}) => {
  const { theme: { accordion: accordionTheme = {}, colors = {} } }: any = useThemeUI()
  const [isOpen, setIsOpen] = useState(!!isInitiallyOpen)

  return <div>
    <button 
      sx={{
        cursor: 'pointer',
        border: 0,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        ...accordionTheme.button,
        ...(isOpen ? accordionTheme.isActive.button : {})
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
        color={isOpen ? colors[accordionTheme.isActive.caret.color] : colors[accordionTheme.caret.color]}
        glyph='caret'
        direction={isOpen ? 'up' : 'down'}
        size={16}
      />
    </button>        
    <div sx={{
      overflow: 'hidden',
      height: isOpen ? 'auto' : '0',
      paddingTop: isOpen ? 'xxs' : '0',
    }}>
      {children}
    </div>
  </div>
}

export default Accordion
