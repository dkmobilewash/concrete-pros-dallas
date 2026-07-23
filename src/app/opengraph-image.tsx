import { renderOgImage, OG_SIZE } from '@/components/seo/ogImage'

export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'Dallas Concrete Pros — Concrete Contractors in Dallas, TX'

export default function Image() {
  return renderOgImage()
}
