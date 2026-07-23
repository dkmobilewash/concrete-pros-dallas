import { ImageResponse } from 'next/og'

export const contentType = 'image/png'

// Generates a 192px and 512px favicon (also referenced by the web manifest).
export function generateImageMetadata() {
  return [
    { id: '192', size: { width: 192, height: 192 }, contentType: 'image/png' },
    { id: '512', size: { width: 512, height: 512 }, contentType: 'image/png' },
  ]
}

export default function Icon({ id }: { id: string }) {
  const dim = id === '512' ? 512 : 192
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#E8520A',
          color: '#FFFFFF',
          fontSize: dim * 0.4,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.04em',
        }}
      >
        DCP
      </div>
    ),
    { width: dim, height: dim },
  )
}
