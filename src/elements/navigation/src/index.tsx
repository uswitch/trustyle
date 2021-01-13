/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import { Tab, Tabs } from '@uswitch/trustyle.tabs'
import { Icon } from '@uswitch/trustyle.icon'

interface NavItem {
  title: string
  description?: string
  href?: string
  linkLabel?: string
  icon?: string
  items?: NavItem[]
}

interface Logo {
  img: string
  alt?: string
  href?: string
}

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  logo: Logo
  items: NavItem[]
}

interface LogoProps {
  logo: Logo
}

interface NavTabsProps {
  items: NavItem[]
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  const { img, alt, href } = logo

  return (
    <Styled.a href={href}>
      <ImgixImage
        alt={alt}
        src={img}
        // sizes={imgSizes}
        // critical={critical}
        // {...imageProps}
        // imgixParams={{
        //   fit: imageSize === 'cover' ? 'crop' : 'fill',
        //   crop: 'faces,entropy',
        //   ar: '16:9',
        //   fill: 'solid',
        //   ...(imageProps.imgixParams || {})
        // }}
      />
    </Styled.a>
  )
}

const NavTabs: React.FC<NavTabsProps> = ({ items }) => (
  <Tabs>
    {items.map((item, i) => (
      <Tab title={item.title} key={i}>
        {item.items?.map(item => item.title)}
      </Tab>
    ))}
  </Tabs>
)

const Navigation: React.FC<NavProps> = ({ logo, items = [] }) => {
  console.log(logo)
  return (
    <nav>
      <Logo logo={logo} />

      <Icon glyph="close" size={17} color="black" />

      <NavTabs items={items} />
    </nav>
  )
}

export default Navigation
