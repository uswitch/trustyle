import { css } from 'theme-ui'

export const gliderStyles = css({
  '.glider-contain': {
    width: '100%',
    margin: '0 auto',
    position: 'relative'
  },
  '.glider': {
    margin: '0 auto',
    position: 'relative',
    'overflow-y': 'hidden',
    '-webkit-overflow-scrolling': 'touch',
    '-ms-overflow-style': 'none',
    transform: 'translateZ(0)'
  },
  '.glider-track': {
    transform: 'translateZ(0)',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    'z-index': 1
  },
  '.glider.draggable': {
    'user-select': 'none',
    cursor: 'grab'
  },
  '.glider.draggable .glider-slide img': {
    'user-select': 'none',
    'pointer-events': 'none'
  },
  '.glider.drag': {
    cursor: 'grabbing'
  },
  '.glider-slide': {
    'user-select': 'none',
    'justify-content': 'center',
    'align-content': 'center',
    width: '100%',
    'min-width': '150px'
  },
  '.glider-slide img': {
    'max-width': '100%'
  },
  '.glider::-webkit-scrollbar': {
    opacity: 0,
    height: 0
  },
  '.glider-prev,.glider-next': {
    'user-select': 'none',
    position: 'absolute',
    outline: 'none',
    background: 'none',
    padding: 0,
    'z-index': 2,
    'font-size': '40px',
    'text-decoration': 'none',
    left: '-23px',
    border: 0,
    top: '30%',
    cursor: 'pointer',
    color: '#666',
    opacity: 1,
    'line-height': 1,
    transition:
      'opacity .5s cubic-bezier(.17,.67,.83,.67), color .5s cubic-bezier(.17,.67,.83,.67)'
  },
  '.glider-prev:hover, .glider-next:hover, .glider-prev:focus, .glider-next:focus': {
    color: '#a89cc8'
  },
  '.glider-next': {
    right: '-23px',
    left: 'auto'
  },
  '.glider-next.disabled, .glider-prev.disabled': {
    opacity: 0.25,
    color: '#666',
    cursor: 'default'
  },
  '.glider-hide': {
    opacity: 0
  },
  '.glider-dots': {
    'user-select': 'none',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    margin: '20px auto',
    padding: 0
  },
  '.glider-dot': {
    border: 0,
    padding: 0,
    'user-select': 'none',
    outline: 'none',
    display: 'block',
    cursor: 'pointer',
    color: '#d0d0d3',
    'border-radius': '50%',
    background: '#d0d0d3',
    width: '8px',
    height: '8px',
    margin: '4px'
  },
  '.glider-dot:hover': {
    background: '#898991'
  },
  '.glider-dot:focus, .glider-dot.active': {
    background: '#141424'
  }
})
