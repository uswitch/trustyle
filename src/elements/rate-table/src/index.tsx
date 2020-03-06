import * as React from 'react'

import RateTableRow from './components/row'
import RateTableCellImage from './components/cell-image'
import RateTableCellSplit from './components/cell-split'
import RateTableCellPlaceholder from './components/cell-placeholder'
import RateTableCellPrimary from './components/cell-primary'
import RateTableCellCta from './components/cell-cta'
import RateTableDataRange from './components/data-range'

const RateTable = {
  Row: RateTableRow,
  cells: {
    Image: RateTableCellImage,
    Split: RateTableCellSplit,
    Placeholder: RateTableCellPlaceholder,
    Primary: RateTableCellPrimary,
    Cta: RateTableCellCta
  },
  Data: {
    Range: RateTableDataRange
  }
}

export default RateTable
