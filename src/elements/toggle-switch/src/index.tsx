/** @jsx jsx */
import { jsx } from 'theme-ui'

interface Props {
  checked: boolean
  className: string
  onChange?: (e: React.SyntheticEvent) => void
  'aria-label'?: string
  icons?: {
    checked: React.ReactNode
    unchecked: React.ReactNode
  }
}

const ToggleSwitch: React.FC<Props> = ({
  checked,
  onChange,
  icons,
  className = '',
  ...props
}) => {
  const state = checked ? 'checked' : 'unchecked'
  return (
    <div sx={{ display: 'inline-block' }} className={`toggle ${className}`}>
      <input
        checked={checked}
        onChange={onChange}
        {...props}
        sx={{
          variant: 'srOnly'
        }}
        type="checkbox"
        className="toggle__input"
      />
      <div
        sx={{
          width: 80,
          height: 40,
          padding: 4,
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: '50vw',
          transition: 'background-color 400ms, border-color 400ms',
          variant: `toggleSwitch.${state}`
        }}
        className={`toggle__container toggle__container--${state}`}
        role="checkbox"
        tabIndex={0}
        aria-checked={checked}
        aria-label={props['aria-label']}
        onClick={onChange}
        onKeyDown={onChange}
      >
        <div
          sx={{
            width: 39,
            height: 38,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50vw',
            transition: 'transform 400ms, border-color 400ms',
            transform: checked ? 'translateX(40px)' : 'translateX(0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            variant: `toggleSwitch.${state}.switch`
          }}
          className={`toggle__switch toggle__switch--${state}`}
        >
          {checked ? icons?.checked : icons?.unchecked}
        </div>
      </div>
    </div>
  )
}

export default ToggleSwitch
