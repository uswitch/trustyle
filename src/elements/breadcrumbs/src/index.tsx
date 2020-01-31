/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

const HomeIcon: React.FC = () => {
  const { theme }: any = useThemeUI()

  return (
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
}

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  crumbs: { fields: any; [key: string]: any }[]
  title?: string
  customSeparator?: React.ReactNode | (() => React.ReactNode)
  customBackIcon?: React.ReactNode | (() => React.ReactNode)
  customHomeIcon?: React.ReactNode | (() => React.ReactNode)
}

const MobileBreadcrumbs: React.FC<Props> = ({
  crumbs,
  customBackIcon = '<',
  customHomeIcon
}) => {
  const BackIcon =
    typeof customBackIcon === 'function' ? customBackIcon : () => customBackIcon

  let href, backTo

  if (crumbs.length) {
    const lastCrumb = crumbs[crumbs.length - 1]
    href = lastCrumb.fields.path
    backTo = lastCrumb.fields.displayText
  } else {
    href = '/'
    backTo = customHomeIcon || <HomeIcon />
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

const DesktopBreadcrumbs: React.FC<Props> = ({
  crumbs,
  title,
  customSeparator = '>',
  customHomeIcon
}) => {
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

  const Separator =
    typeof customSeparator === 'function'
      ? customSeparator
      : () => customSeparator

  const separatorStyling = {
    display: 'inline-block',
    marginX: 'xxs',
    verticalAlign: customSeparator === 'function' ? 'middle' : undefined
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
          {customHomeIcon || <HomeIcon />}
        </Styled.a>

        {(crumbs.length || title) && (
          <span sx={separatorStyling}>
            <Separator />
          </span>
        )}
      </li>

      {crumbs.map((crumb, i) => (
        <li sx={liStyling} key={i}>
          <Styled.a sx={anchorStyling} href={crumb.fields.path}>
            {crumb.fields.displayText}
          </Styled.a>

          {(i !== crumbs.length - 1 || title) && (
            <span sx={separatorStyling}>
              <Separator />
            </span>
          )}
        </li>
      ))}

      {title && (
        <li sx={{ ...liStyling, variant: 'breadcrumbs.title' }}>{title}</li>
      )}
    </ul>
  )
}

const Breadcrumbs: React.FC<Props> = ({
  crumbs,
  title,
  customSeparator = '>',
  customBackIcon = '<',
  customHomeIcon
}) => {
  return (
    <React.Fragment>
      <div sx={{ display: ['block', 'none'] }}>
        <MobileBreadcrumbs
          crumbs={crumbs}
          customBackIcon={customBackIcon}
          customHomeIcon={customHomeIcon}
        />
      </div>
      <div sx={{ display: ['none', 'block'] }}>
        <DesktopBreadcrumbs
          crumbs={crumbs}
          title={title}
          customSeparator={customSeparator}
          customHomeIcon={customHomeIcon}
        />
      </div>
    </React.Fragment>
  )
}

export default Breadcrumbs
