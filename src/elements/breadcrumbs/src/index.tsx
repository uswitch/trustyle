/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

import useWindowSize from './hook-window-size'

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  crumbs: { fields: any; [key: string]: any }[]
  title?: string
  customSeparator?: React.ReactNode | (() => React.ReactNode)
  customBackIcon?: React.ReactNode | (() => React.ReactNode)
  customHomeIcon?: React.ReactNode | (() => React.ReactNode)
}

const Breadcrumbs: React.FC<Props> = ({
  crumbs,
  title,
  customSeparator = '>',
  customBackIcon = '<',
  customHomeIcon
}) => {
  const { theme }: any = useThemeUI()
  const windowSize = useWindowSize()

  const homeIcon = customHomeIcon || (
    <div
      sx={{
        display: 'inline-block',
        width: '1.25em',
        height: '1em',
        variant: 'breadcrumbs.homeIcon'
      }}
    >
      <Icon
        glyph="home"
        color={theme.colors[theme.breadcrumbs?.homeIcon?.color]}
      />
    </div>
  )

  const isMobile = windowSize.innerWidth < parseInt(theme.breakpoints[0])
  if (isMobile) {
    const BackIcon =
      typeof customBackIcon === 'function'
        ? customBackIcon
        : () => customBackIcon

    let href, backTo

    if (crumbs.length) {
      const lastCrumb = crumbs[crumbs.length - 1]
      href = lastCrumb.fields.path
      backTo = lastCrumb.fields.displayText
    } else {
      href = '/'
      backTo = homeIcon
    }

    return (
      <Styled.a
        sx={{
          display: 'inline-block',
          color: 'inherit',
          textDecoration: 'none',
          fontSize: 'xxs',
          variant: 'breadcrumbs.mobileLink'
        }}
        href={href}
      >
        <span
          sx={{
            marginRight: 'xxs',
            verticalAlign: customBackIcon === 'function' ? 'middle' : undefined
          }}
        >
          <BackIcon />
        </span>

        {backTo}
      </Styled.a>
    )
  }

  const liStyling = {
    display: 'inline'
  }

  const anchorStyling = {
    color: 'inherit',
    stroke: 'inherit',
    textDecoration: 'none',
    variant: 'breadcrumbs.a',
    ':visited': {
      color: 'inherit'
    }
  }

  const Separator = () => {
    const InnerSeparator =
      typeof customSeparator === 'function'
        ? customSeparator
        : () => customSeparator

    return (
      <span
        sx={{
          display: 'inline-block',
          marginX: 'xxs',
          verticalAlign: customSeparator === 'function' ? 'middle' : undefined
        }}
      >
        <InnerSeparator />
      </span>
    )
  }

  return (
    <ul
      sx={{
        listStyleType: 'none',
        paddingLeft: 0,
        fontSize: 'xxs',
        variant: 'breadcrumbs.main'
      }}
    >
      <li sx={liStyling}>
        <Styled.a sx={anchorStyling} href="/">
          {homeIcon}
        </Styled.a>

        {(crumbs.length || title) && <Separator />}
      </li>

      {crumbs.map((crumb, i) => (
        <li sx={liStyling} key={i}>
          <Styled.a sx={anchorStyling} href={crumb.fields.path}>
            {crumb.fields.displayText}
          </Styled.a>

          {(i !== crumbs.length - 1 || title) && <Separator />}
        </li>
      ))}

      {title && (
        <li sx={{ ...liStyling, variant: 'breadcrumbs.title' }}>{title}</li>
      )}
    </ul>
  )
}

export default Breadcrumbs
