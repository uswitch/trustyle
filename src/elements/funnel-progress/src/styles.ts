import { css, SerializedStyles } from '@emotion/core'

export const funnelProgress: SerializedStyles = css({
  display: 'flex',
  flexFlow: 'row',
  userSelect: 'none'
})

export const phaseIcon = (
  variant: 'open' | 'complete' | 'incomplete'
): SerializedStyles =>
  css({
    transition: 'background 0.4s, border-color 0.4s, color 0.4s',
    background:
      variant === 'open'
        ? '#FFFFFF'
        : variant === 'complete'
        ? '#028EE9'
        : '#FFFFFF',
    border:
      variant === 'open'
        ? '2px solid #A1E7FE'
        : variant === 'complete'
        ? '2px solid #028EE9'
        : '2px solid #B0B8BF',
    borderRadius: '999px',
    width: '20px',
    height: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: variant === 'open' ? '#008FE9' : '#B0B8BF',
    fontSize: '14px'
  })

export const phaseWrap = (open: boolean): SerializedStyles =>
  css({
    flex: 1,
    flexGrow: open ? 1 : 0,
    marginLeft: '5px',
    background: '#E6F4FD',
    borderRadius: '999px',
    whiteSpace: 'nowrap',
    position: 'relative',
    overflow: open ? 'hidden' : 'visible',
    transition: 'flex-grow 0.4s',
    '&:first-child': {
      marginLeft: '0px'
    }
  })

export const phaseLabel: SerializedStyles = css({
  position: 'relative',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export const phasePart: SerializedStyles = css({
  display: 'inline-block',
  verticalAlign: 'top',
  marginLeft: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '24px',
  color: '#002396',
  '&:first-child': {
    marginLeft: '0px'
  }
})

export const phaseProgress: SerializedStyles = css({
  position: 'absolute',
  background: '#A1E7FE',
  minWidth: '24px',
  borderRadius: '999px',
  top: 0,
  bottom: 0,
  left: 0,
  transition: `width 0.4s`
})
