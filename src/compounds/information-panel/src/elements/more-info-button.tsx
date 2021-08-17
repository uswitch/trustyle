/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface MoreInformationButtonProps {
  onClick: () => void
  href: string
  Wrapper: typeof React.Component
}

export const MoreInformationButton: React.FC<MoreInformationButtonProps> = ({
  onClick,
  children,
  href,
  Wrapper
}) => (
  <Wrapper
    styles={{
      width: '100%',
      fontSize: '14px',
      marginBottom: '0'
    }}
    href={href}
    onClick={onClick}
    variant="eligibility"
  >
    {children}
  </Wrapper>
)

export default MoreInformationButton
