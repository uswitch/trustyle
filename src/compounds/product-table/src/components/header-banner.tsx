/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface BannerInfo {
  text: string
  link: string
  linkText: string
}

interface ProductTableHeaderBannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bannerInfo: BannerInfo
  badge?: boolean
}

export const ProductTableHeaderBanner: React.FC<ProductTableHeaderBannerProps> = ({
  bannerInfo,
  badge = false
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
      <span sx={{ marginTop: [badge ? '10px' : '0', '10px'] }}>
        {bannerInfo.text}&nbsp;
        <a
          href={bannerInfo.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: 'base' }}
        >
          {bannerInfo.linkText}
        </a>
      </span>
    </div>
  )
}
