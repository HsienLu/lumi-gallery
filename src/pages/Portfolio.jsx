// src/pages/Portfolio.jsx
import { lazy, Suspense, useMemo, useState } from 'react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import ImageCard from '../components/ImageCard.jsx'

// 原始大圖（當 fallback 用）— 保留即可
import sampleImg1 from '/sample-photo/20250524-DSC02579-1.jpg'
import sampleImg2 from '/sample-photo/20250525-DSC02971-2.jpg'
import sampleImg3 from '/sample-photo/20250427-0022-3.jpg'
import sampleImg4 from '/sample-photo/20250427-0005-4.jpg'
import sampleImg5 from '/sample-photo/DSC08702-5.jpg'
import sampleImg6 from '/sample-photo/DSC08674-6.jpg'

// Lightbox 改為 lazy（使用時才載入）
const Lightbox = lazy(() => import('../components/Lightbox.jsx'))

const SAMPLE_IMAGES = [
  {
    id: 1, title: '人像外拍', cat: 'portrait',
    src: sampleImg1,
    webp800:  '/sample-photo/20250524-DSC02579-1-800.webp',
    webp1200: '/sample-photo/20250524-DSC02579-1-1200.webp',
    jpg1200:  '/sample-photo/20250524-DSC02579-1-1200.jpg',
    w: 1600, h: 1200,
  },
  {
    id: 2, title: '人像外拍', cat: 'portrait',
    src: sampleImg2,
    webp800:  '/sample-photo/20250525-DSC02971-2-800.webp',
    webp1200: '/sample-photo/20250525-DSC02971-2-1200.webp',
    jpg1200:  '/sample-photo/20250525-DSC02971-2-1200.jpg',
    w: 1600, h: 1200,
  },
  {
    id: 3, title: '人像棚拍', cat: 'studio',
    src: sampleImg3,
    webp800:  '/sample-photo/20250427-0022-3-800.webp',
    webp1200: '/sample-photo/20250427-0022-3-1200.webp',
    jpg1200:  '/sample-photo/20250427-0022-3-1200.jpg',
    w: 1600, h: 1200,
  },
  {
    id: 4, title: '人像棚拍', cat: 'studio',
    src: sampleImg4,
    webp800:  '/sample-photo/20250427-0005-4-800.webp',
    webp1200: '/sample-photo/20250427-0005-4-1200.webp',
    jpg1200:  '/sample-photo/20250427-0005-4-1200.jpg',
    w: 1600, h: 1200,
  },
  {
    id: 5, title: '親子寫真', cat: 'baby',
    src: sampleImg5,
    webp800:  '/sample-photo/DSC08702-5-800.webp',
    webp1200: '/sample-photo/DSC08702-5-1200.webp',
    jpg1200:  '/sample-photo/DSC08702-5-1200.jpg',
    w: 1600, h: 1200,
  },
  {
    id: 6, title: '親子寫真', cat: 'baby',
    src: sampleImg6,
    webp800:  '/sample-photo/DSC08674-6-800.webp',
    webp1200: '/sample-photo/DSC08674-6-1200.webp',
    jpg1200:  '/sample-photo/DSC08674-6-1200.jpg',
    w: 1600, h: 1200,
  },
]

export default function Portfolio() {
  const [cat, setCat] = useState('all')
  const [selected, setSelected] = useState(null)

  const data = useMemo(
    () => SAMPLE_IMAGES.filter(i => (cat === 'all' ? true : i.cat === cat)),
    [cat]
  )

  const tabBtn = (key, label) => (
    <Button
      key={key}
      variant={cat === key ? 'solid' : 'outline'}
      onClick={() => setCat(key)}
      size="sm"
    >
      {label}
    </Button>
  )

  return (
    <main className="py-10">
      <Container>
        <div className="mb-5 flex flex-wrap gap-2">
          {tabBtn('all', '全部')}
          {tabBtn('portrait', '人像外拍')}
          {tabBtn('studio', '人像棚拍')}
          {tabBtn('baby', '親子寫真')}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ contentVisibility:'auto' }}>
          {data.map((item, idx) => (
            <ImageCard
              key={item.id}
              item={item}
              onSelect={setSelected}
              priority={idx === 0} // 只有畫面第一張給高優先
            />
          ))}
        </div>
      </Container>

      <Suspense fallback={null}>
        {selected && (
          <Lightbox open={!!selected} image={selected} onClose={() => setSelected(null)} />
        )}
      </Suspense>
    </main>
  )
}
