import hyRequest from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

interface BannerModel {
  imageUrl: string
}

interface BannersModel {
  banners: BannerModel[]
}

const About: React.FC<IProps> = () => {
  const [banners, setBanners] = useState<BannerModel[]>([])

  useEffect(() => {
    hyRequest
      .get<BannersModel>({
        url: '/banner'
      })
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setBanners(res.banners)
      })
      .catch((errr) => console.error(errr))
  }, [])

  return (
    <>
      {banners.map((banner) => {
        return <div key={banner.imageUrl}>{banner.imageUrl}</div>
      })}
    </>
  )
}

export default memo(About)
