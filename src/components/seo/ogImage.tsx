import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const OG_SIZE = { width: 1200, height: 630 }

// Shared branded social-share image used by both the Open Graph and Twitter
// card route conventions. No external fonts (keeps generation self-contained).
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#1C1C1E',
          color: '#FFFFFF',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: '120px',
            height: '10px',
            background: '#E8520A',
            marginBottom: '40px',
          }}
        />
        <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1.05 }}>
          Dallas Concrete Pros
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#D1D5DB',
            marginTop: '24px',
            maxWidth: '900px',
          }}
        >
          Concrete Contractors serving Dallas &amp; the DFW Metroplex
        </div>
        <div style={{ fontSize: 40, color: '#E8520A', marginTop: '40px', fontWeight: 700 }}>
          {site.phone}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  )
}
