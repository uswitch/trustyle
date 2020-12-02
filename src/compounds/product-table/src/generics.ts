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

export interface CardContextProps {
  isCard?: boolean
}

export const CellContext = React.createContext<CellContextProps>({})
export const CardContext = React.createContext<CardContextProps>({})

export interface AddonContextProps {
  inAddon: string | false
  order?: number
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

const formatters: { [unit: string]: (value: number) => string } = {
  pounds: value =>
    value % 1 === 0 ? `£${value}` : `£${Number(value).toFixed(2)}`,

  // Alternative version of the pounds formatter that takes care of adding 0 as needed
  'full-pounds': value => `£${value.toFixed(2)}`,
  percent: value => `${value}%`,

  /**
   * The simplicity of this funciton will need addressing in the future, however Kb, Mb, and Gb are
   * all proven on the Uswitch site.
   */
  'data-transfer': (kilobits = 0) => {
    if (kilobits < 1000) return `${kilobits || 0}Kb`
    if (kilobits >= 1e6) return `${Math.floor(kilobits / 1e6)}Gb`

    return `${Math.floor(kilobits / 1000)}Mb`
  },

  /**
   * The simplicity of this funciton will need addressing in the future, however MB and GB are all
   * proven on the Uswitch site.
   */
  data: (megabytes = 0) => {
    if (megabytes >= 1000) return `${Math.floor(megabytes / 1000)}GB`

    return `${megabytes || 0}MB`
  }
}

// Should be fleshed out and moved into a util package
export function numberFormatter(value: number | string, unit: string): string {
  if (typeof value === 'string') {
    return value
  }

  const unitValue = unit || ''
  const formatter = unitValue.split(' ').join('-')
  return formatters[formatter]
    ? formatters[formatter](value)
    : `${value} ${unitValue}`.trim()
}

export const forceMobile = (force = false) => (styles: any[]) => {
  if (!force) return styles
  return styles[0]
}
