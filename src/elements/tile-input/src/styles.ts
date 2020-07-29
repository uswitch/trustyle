import { SxStyleProp, Theme } from 'theme-ui'

const svgSafeColor = (color: string) => color.replace('#', '%23')

interface InputTile {
  input: {
    tile: {
      inputColor: string
    }
  }
}

export const input = (type: 'radio' | 'checkbox') => (
  theme: Theme & InputTile
): SxStyleProp => {
  let inputColor = 'black'

  if (
    theme.elements &&
    theme.elements.input &&
    theme.elements.input.tile &&
    theme.elements.input.tile.inputColor &&
    typeof theme.elements.input.tile.inputColor === 'string'
  ) {
    inputColor = theme.elements.input.tile.inputColor
  }

  return {
    marginLeft: '-9000px',
    appearance: 'none',
    position: 'absolute',
    '&:checked + span': {
      borderColor: inputColor,
      boxShadow: 'linkInset',
      color: 'black',
      '&::before': {
        borderColor: inputColor,
        boxShadow: 'inset 0 0 0 2px white',
        ...(type === 'radio'
          ? {
              backgroundColor: inputColor
            }
          : {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${svgSafeColor(
                inputColor
              )}" viewBox="-1 -2 14 12"><path d="M9.603 1L11 2.507 4.681 9 1 4.898l1.453-1.446L4.74 5.999z" /></svg>')`
            })
      }
    },
    '&:focus': {
      outline: 0
    },
    '&:focus + span': {
      boxShadow: 'linkInset'
    }
  }
}

export const container = (type: 'radio' | 'checkbox') => (): SxStyleProp => ({
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'block',
  minHeight: '130px',
  position: 'relative',
  width: '100%',
  '&:before': {
    borderRadius: type === 'radio' ? '50%' : 4,
    content: '" "',
    display: 'block',
    height: '17px',
    margin: '11px 0 0 11px',
    width: '17px',
    variant: 'elements.input.tile.before'
  },
  variant: 'elements.input.tile'
})

export const content: SxStyleProp = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: 'xs',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& > *': {
    width: '100%'
  }
}

// Wrapper to prevent flexbox from stretching images with a percentage width
export const childrenWrapper: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    maxWidth: '80%'
  }
}
