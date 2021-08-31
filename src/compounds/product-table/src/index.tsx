import ProductTableRow from './components/row'
import ProductTableAddonResponsive from './components/addon-responsive'
import ProductTableAddonFooter from './components/addon-footer'
import ProductTableAddonInfo from './components/addon-info'
import ProductTableCellBase from './components/cell-base'
import ProductTableCellImage from './components/cell-image'
import ProductTableHeaderImage from './components/header-image'
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
import ProductTableDataAuto, {
  Plain as PlainProductTableDataAuto
} from './components/data-auto'
import ProductTableCircularPercentageBar from './components/data-percentage'
import {
  Addon,
  AddonArg,
  AddonContext,
  AddonContextProps,
  CellContext,
  CellContextProps
} from './generics'
import ProductTableAddonAccordion from './components/addon-accordion'

const ProductTable = {
  Row: ProductTableRow,
  addons: {
    footer: ProductTableAddonFooter,
    responsive: ProductTableAddonResponsive,
    info: ProductTableAddonInfo,
    accordion: ProductTableAddonAccordion
  },
  cells: {
    Base: ProductTableCellBase,
    Image: ProductTableCellImage,
    Split: ProductTableCellSplit,
    Placeholder: ProductTableCellPlaceholder,
    Content: ProductTableCellContent,
    Cta: ProductTableCellCta,
    HeaderImage: ProductTableHeaderImage
  },
  text: {
    Range: PlainProductTableDataRange,
    TextSubscript: PlainProductTableDataTextSubscript,
    Value: PlainProductTableDataValue,
    Auto: PlainProductTableDataAuto
  },
  data: {
    Range: ProductTableDataRange,
    TextSubscript: ProductTableDataTextSubscript,
    Value: ProductTableDataValue,
    Auto: ProductTableDataAuto,
    CircularPercentageBar: ProductTableCircularPercentageBar
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
