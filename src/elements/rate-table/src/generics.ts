import * as React from 'react'

/**
 * NOTE: Nothing in this file can be accessed from outside the package unless it
 * it also exported in index.tsx
 */

export interface CellContextProps {
  gridRowStart?: number
  gridRowSpan?: number
  gridColumnStart?: number
  gridColumnSpan?: number
  accentCellCount?: number
  accentCellIndex?: number
  firstInSplit?: boolean
  inSplit?: boolean
  inFlexbox?: boolean
  extraRules?: object
}

export const CellContext = React.createContext<CellContextProps>({})

export interface AddonContextProps {
  inAddon: string | false
  extraRules?: object
}

export const AddonContext = React.createContext<AddonContextProps>({
  inAddon: false
})

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
