/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

import useWindowSize from './hook-window-size'

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  crumbs: { fields: any; [key: string]: any }[]
  title?: string
  separator?: React.ReactNode | (() => React.ReactNode)
  backIcon?: React.ReactNode | (() => React.ReactNode)
}

const Breadcrumbs: React.FC<Props> = ({
  crumbs,
  title,
  separator = '>',
  backIcon = '<'
}) => {
  const { theme }: any = useThemeUI()
  const windowSize = useWindowSize()

  const homeIcon = (
    <div
      sx={{
        display: 'inline-block',
        width: '1.25em',
        height: '1em',
        verticalAlign: 'top',
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
    const BackIcon = typeof backIcon === 'function' ? backIcon : () => backIcon

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
        <span sx={{ marginRight: 'xxs', verticalAlign: 'middle' }}>
          <BackIcon />
        </span>

        {backTo}
      </Styled.a>
    )
  }

  const liStyling = {
    display: 'inline'
  }

  const Separator = () => {
    const InnerSeparator =
      typeof separator === 'function' ? separator : () => separator

    return (
      <span
        sx={{
          display: 'inline-block',
          marginX: 'xxs',
          verticalAlign: 'middle'
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
        <Styled.a
          sx={{
            color: 'inherit',
            stroke: 'inherit',
            textDecoration: 'none',
            variant: 'breadcrumbs.a'
          }}
          href="/"
        >
          {homeIcon}
        </Styled.a>

        {(crumbs.length || title) && <Separator />}
      </li>

      {crumbs.map((crumb, i) => (
        <li sx={liStyling} key={i}>
          <Styled.a
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              variant: 'breadcrumbs.a'
            }}
            href={crumb.fields.path}
          >
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
