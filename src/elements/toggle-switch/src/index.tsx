/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'

interface Props {
  on: boolean,
  onClick: Function,
  className: string,
}

const ToggleSwitch: React.FC<Props> = ({
  on = true,
  onClick,
  className = '',
  ...toggleProps
}) => {
  const { theme }: any = useThemeUI()
  const [toggleState, setToggleState] = useState(on)

  const toggleSwitch = (e: React.MouseEvent) => {
    e.preventDefault()
    setToggleState(!toggleState)

    const switchEvent = Object.assign(e, { toggleState: toggleState })
    if (typeof onClick === 'function') onClick(switchEvent)
  }

  return (
    <div>
      <div>
        <input type="checkbox" className="checkbox" />
      </div>
    </div>
  )
}

export default ToggleSwitch
