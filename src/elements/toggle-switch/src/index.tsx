/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  checked: boolean
  compact?: boolean
  onChange?: (e: React.SyntheticEvent) => void
  icons?: {
    checked: React.ReactNode
    unchecked: React.ReactNode
  }
}

const ToggleSwitch: React.FC<Props> = ({
  checked,
  compact = false,
  onChange,
  icons,
  className,
  ...props
}) => {
  const state = checked ? 'checked' : 'unchecked'
  const variantRoot = compact
    ? 'toggleSwitch2.variants.compact'
    : 'toggleSwitch2.base'

  return (
    <div
      sx={{ display: 'inline-block', verticalAlign: 'middle' }}
      className={className}
    >
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
        sx={
          compact
            ? {}
            : {
                height: 40,
                width: 80,
                padding: 4,
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: '50vw',
                transition: 'background-color 400ms, border-color 400ms',
                variant: `${variantRoot}.${state}`
              }
        }
        px={
          compact
            ? {}
            : {
                backgroundColor: checked ? 'featureColor' : null,
                borderColor: checked ? 'featureColor' : null
              }
        }
      >
        <Palette
          as="div"
          sx={{
            ...(compact
              ? { width: 40, height: 40 }
              : {
                  width: 39,
                  height: 38,
                  transform: checked ? 'translateX(40px)' : 'translateX(0)'
                }),
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50vw',
            transition:
              'transform 400ms, border-color 400ms, background-color 400ms',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            variant: `${variantRoot}.${state}.switch`
          }}
          px={
            compact
              ? {
                  backgroundColor: checked ? 'featureColor' : null,
                  borderColor: checked ? 'featureColor' : null
                }
              : {}
          }
        >
          {checked ? icons?.checked : icons?.unchecked}
        </Palette>
      </Palette>
    </div>
  )
}

export default ToggleSwitch
