export interface Item {
  title: string
  description?: string
  href?: string
  linkLabel?: string
  icon?: string
  items?: Item[]
}

export interface Logo {
  img: string
  alt?: string
  href?: string
}
