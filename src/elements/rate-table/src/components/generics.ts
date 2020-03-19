import * as React from 'react'

export interface CellContextProps {
  gridRowStart?: number
  gridRowSpan?: number
  gridColumnStart?: number
  gridColumnSpan?: number
  accentCellCount?: number
  accentCellIndex?: number
  firstInSplit?: boolean
  inSplit?: boolean
  inAddon?: string
  inFlexbox?: boolean
  extraRules?: object
}

export const CellContext = React.createContext<CellContextProps>({})

export interface Addon<ComponentType = any> {
  defaultArguments?: { [key: string]: any }
  header?: React.FC<ComponentType>
  body?: React.FC<ComponentType>
  grid?: React.FC<ComponentType>
}

export interface AddonArg {
  addon: Addon
  component: React.ReactNode
  options?: { [key: string]: any }
}
