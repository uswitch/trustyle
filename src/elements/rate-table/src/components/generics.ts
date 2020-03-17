import * as React from 'react'

export interface CellContextProps {
  gridRowStart: number
  gridRowSpan: number
  gridColumnStart: number
  gridColumnSpan: number
  accentCellCount?: number
  accentCellIndex?: number
  firstInSplit?: boolean
  inSplit?: boolean
  inAddon?: string
  extraRules?: object
}

export const CellContext = React.createContext<CellContextProps>({
  gridRowStart: 1,
  gridRowSpan: 1,
  gridColumnStart: 1,
  gridColumnSpan: 1,
  accentCellCount: 1,
  firstInSplit: false,
  inSplit: false
})

export interface Addon<ComponentType = React.HTMLAttributes<any>> {
  header?: React.FC<ComponentType>
  body?: React.FC<ComponentType>
}

export interface AddonArg {
  addon: Addon
  component: React.ReactNode
}
