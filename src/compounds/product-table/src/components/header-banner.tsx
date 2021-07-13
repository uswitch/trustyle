/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface BannerInfo {
  text: string
  linkText: string
}

interface ProductTableHeaderBannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bannerInfo: BannerInfo
  badge?: boolean
  onClick: () => void
}

export const ProductTableHeaderBanner: React.FC<ProductTableHeaderBannerProps> = ({
  bannerInfo,
  badge = false,
  onClick
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD555',
        padding: 'sm',
        color: 'primary',
        lineHeight: 'base',
        fontSize: 'sm',
        fontWeight: 'bold'
      }}
    >
      <span sx={{ marginTop: badge ? '10px' : '0' }}>
        {bannerInfo.text}&nbsp;
        <span
          sx={{
            variant: 'styles.a',
            fontWeight: 'base',
            cursor: 'pointer'
          }}
          onClick={() => onClick()}
        >
          {bannerInfo.linkText}
        </span>
      </span>
    </div>
  )
}
