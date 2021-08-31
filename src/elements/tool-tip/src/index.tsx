/** @jsx jsx */

import { useState } from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: any
  content: any
  variant?: string
}

interface ToolTipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: any
  content: any
}

interface ToolTipModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any
  close?: any
  isOpen?: any
  type?: any
}

const ToolTipModal: React.FC<ToolTipModalProps> = ({
  children,
  close,
  isOpen,
  type
}) => {
  const handleKeypress = (key: any) =>
    (key === 'Enter' || key === 'Escape') && close()

  return (
    <div
      sx={{
        display: isOpen ? 'flex' : 'none',
        variant: 'elements.tool-tip.base.modal.wrapper'
      }}
      onClick={close}
      onKeyPress={handleKeypress}
      role="link"
      tabIndex={0}
    >
      <div
        sx={{
          width: type === 'calculator' ? ['90%', '50%'] : '100%',
          variant: 'elements.tool-tip.base.modal.content'
        }}
      >
        <div sx={{ variant: 'elements.tool-tip.base.modal.icon' }}>
          <Icon glyph="close" color={'rgba(0,0,0,0.6)'} size={18} />
        </div>
        {children}
      </div>
    </div>
  )
}

const Triangle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="12"
    viewBox="0 0 20 12"
    fill="none"
  >
    <path
      d="M2.12268 2.5L17.8773 2.5L10 11.2526L2.12268 2.5Z"
      fill="white"
      stroke="#141424"
    />
    <path d="M19.5 0L10 10.5L0.5 0L19.5 0Z" fill="white" />
  </svg>
)

const ToolTipContent: React.FC<ToolTipContentProps> = ({ title, content }) => {
  return (
    <div>
      <div
        sx={{
          fontSize: '16px',
          fontWeight: 'bold',
          pb: '10px',
          fontFamily: 'heading'
        }}
      >
        {title}
      </div>
      <p
        sx={{
          fontSize: '14px',
          lineHeight: '21px',
          fontFamily: 'heading',
          textAlign: 'left' as const,
          m: '0'
        }}
      >
        {content}
      </p>
    </div>
  )
}

const ToolTip: React.FC<Props> = ({ title, content, variant }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(!modalOpen)
  const handleKeypress = (key: any) => key === 'Enter' && toggleModal()
  const variantPath = (element: string) =>
    `elements.tool-tip.${variant ? `variants.${variant}` : 'base'}${element}`

  return (
    <div
      onKeyPress={handleKeypress}
      onClick={toggleModal}
      role="link"
      tabIndex={0}
      sx={{ variant: variantPath('.wrapper') }}
    >
      <Icon glyph="question-filled" color="grey" size={22} />
      <span sx={{ variant: variantPath('.content.desktop') }}>
        <ToolTipContent title={title} content={content} />
        <div sx={{ variant: variantPath('.content.desktop.arrow') }}>
          {Triangle}
        </div>
        {/* <div sx={{ position: 'absolute', bottom: -16 }}>{Triangle}</div> */}
      </span>
      <div sx={{ display: ['block', 'none'] }}>
        <ToolTipModal close={toggleModal} isOpen={modalOpen}>
          <div sx={{ variant: variantPath('.content.mobile') }}>
            <ToolTipContent title={title} content={content} />
          </div>
        </ToolTipModal>
      </div>
    </div>
  )
}

export default ToolTip
