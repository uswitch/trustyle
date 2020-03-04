/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'

interface Props {
  checked: boolean
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
  ...props
}) => {
  const state = checked ? 'checked' : 'unchecked'
  return (
    <div sx={{ display: 'inline-block' }}>
      <input
        checked={checked}
        onChange={onChange}
        {...props}
        sx={{
          variant: 'srOnly'
        }}
        type="checkbox"
      />
      <Palette
        as="div"
        role="checkbox"
        tabIndex={0}
        aria-checked={checked}
        aria-label={props['aria-label']}
        onClick={onChange}
        onKeyDown={onChange}
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
        px={{
          backgroundColor: checked ? 'featureColor' : null,
          borderColor: checked ? 'featureColor' : null
        }}
      >
        <Palette
          as="div"
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
          px={{
            borderColor: checked ? 'featureColor' : null
          }}
        >
          {checked ? icons?.checked : icons?.unchecked}
        </Palette>
      </Palette>
    </div>
  )
}

export default ToggleSwitch
