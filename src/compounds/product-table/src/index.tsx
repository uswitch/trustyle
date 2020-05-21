import * as React from 'react'

import ProductTableRow from './components/row'
import ProductTableAddonResponsive from './components/addon-responsive'
import ProductTableAddonFooter from './components/addon-footer'
import ProductTableCellBase from './components/cell-base'
import ProductTableCellImage from './components/cell-image'
import ProductTableCellSplit from './components/cell-split'
import ProductTableCellPlaceholder from './components/cell-placeholder'
import ProductTableCellContent from './components/cell-content'
import ProductTableCellCta from './components/cell-cta'
import ProductTableDataRange, {
  Plain as PlainProductTableDataRange
} from './components/data-range'
import ProductTableDataValue, {
  Plain as PlainProductTableDataValue
} from './components/data-value'
import ProductTableDataTextSubscript, {
  Plain as PlainProductTableDataTextSubscript
} from './components/data-text-subscript'
import {
  Addon,
  AddonArg,
  AddonContext,
  AddonContextProps,
  CellContext,
  CellContextProps
} from './generics'

const ProductTable = {
  Row: ProductTableRow,
  addons: {
    footer: ProductTableAddonFooter,
    responsive: ProductTableAddonResponsive
  },
  cells: {
    Base: ProductTableCellBase,
    Image: ProductTableCellImage,
    Split: ProductTableCellSplit,
    Placeholder: ProductTableCellPlaceholder,
    Content: ProductTableCellContent,
    Cta: ProductTableCellCta
  },
  text: {
    Range: PlainProductTableDataRange,
    TextSubscript: PlainProductTableDataTextSubscript,
    Value: PlainProductTableDataValue
  },
  data: {
    Range: ProductTableDataRange,
    TextSubscript: ProductTableDataTextSubscript,
    Value: ProductTableDataValue
  }
}

export default ProductTable

export {
  CellContext,
  CellContextProps,
  AddonContext,
  AddonContextProps,
  Addon,
  AddonArg
}
