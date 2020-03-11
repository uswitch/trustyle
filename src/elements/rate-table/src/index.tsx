import * as React from 'react'

import RateTableRow from './components/row'
import RateTableAddonHeader from './components/addon-header'
import RateTableAddonFooter from './components/addon-footer'
import RateTableCellBase from './components/cell-base'
import RateTableCellImage from './components/cell-image'
import RateTableCellSplit from './components/cell-split'
import RateTableCellPlaceholder from './components/cell-placeholder'
import RateTableCellContent from './components/cell-content'
import RateTableCellCta from './components/cell-cta'
import RateTableDataRange from './components/data-range'

const RateTable = {
  Row: RateTableRow,
  addons: {
    Footer: RateTableAddonFooter,
    Header: RateTableAddonHeader
  },
  cells: {
    Base: RateTableCellBase,
    Image: RateTableCellImage,
    Split: RateTableCellSplit,
    Placeholder: RateTableCellPlaceholder,
    Content: RateTableCellContent,
    Cta: RateTableCellCta
  },
  Data: {
    Range: RateTableDataRange
  }
}

export default RateTable
