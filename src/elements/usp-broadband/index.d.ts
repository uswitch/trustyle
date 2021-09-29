declare module '@uswitch/spark.badge' {
  interface BadgeProps {
    variant?:
      | 'base'
      | 'error'
      | 'warning'
      | 'success'
      | 'light'
      | 'dark'
      | 'primary'
    size?: 'small' | 'medium' | 'large'
    leftIcon?: JSX.Element
    children?: React.ReactNode
    css?: any
    sx?: any
  }

  export const Badge: (props: BadgeProps) => JSX.Element
}
