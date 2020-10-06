const generateComponentTheme = (
  name = 'UNAMED_COMPONENT',
  base = {},
  variants = {}
) => ({
  name,
  theme: {
    base,
    variants
  }
})

export const name = 'buttons'

export const theme = () =>
  generateComponentTheme(
    name,
    {
      px: 'sm',
      py: 'sm',
      fontWeight: 'bold',
      border: 'none',
      fontFamily: 'heading',
      borderRadius: '4px',
      ':disabled': {
        opacity: '0.3',
        cursor: 'not-allowed'
      },
      btnSize: {
        large: {
          px: 'xl',
          py: 'base',
          fontSize: 'md'
        },
        small: {
          px: 40,
          py: 13,
          fontSize: 'sm'
        }
      }
    },
    {
      primary: {
        variant: 'elements.buttons.base',
        color: 'white',
        backgroundColor: 'primary',
        ':hover:not(:disabled)': {
          backgroundColor: 'primary--dark'
        },
        ':focus': {
          backgroundColor: 'primary--dark'
        },
        ':active': {
          backgroundColor: 'primary--dark'
        }
      },
      secondary: {
        variant: 'elements.buttons.base',
        color: 'grey-70',
        border: '#E0E1E4 1px solid',
        backgroundColor: 'button-secondary',
        ':hover:not(:disabled)': {
          backgroundColor: 'button-secondary--hover'
        },
        ':focus': {
          backgroundColor: 'button-secondary--hover'
        },
        ':active': {
          backgroundColor: 'button-secondary--hover'
        }
      },
      icon: {
        display: 'flex',
        flexDirection: ['column', 'row', 'row'],
        button: {
          variant: 'elements.buttons.variants.secondary',
          mb: ['sm', 0],
          maxWidth: ['100%', '218px'],
          boxShadow:
            '0px 2px 3px rgba(24, 24, 61, 0.06), 0px 5px 5px rgba(24, 24, 61, 0.06), 0px 8px 7px rgba(24, 24, 61, 0.06)',
          span: {
            display: 'flex',
            flexDirection: ['row', 'column'],
            justifyContent: ['flex-start', 'center'],
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: 'heading',
            minHeight: [55, 'auto']
          },
          img: {
            maxHeight: ['inherit', 45],
            maxWidth: [50, 'inherit'],
            mr: ['md', 0]
          }
        }
      }
    }
  )
