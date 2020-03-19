import * as React from 'react'

import RateTableRow from './components/row'
import RateTableAddonResponsive from './components/addon-responsive'
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
    footer: RateTableAddonFooter,
    responsive: RateTableAddonResponsive
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
