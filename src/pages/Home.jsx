// src/pages/Home.jsx
import { useEffect, useMemo, useRef, useState } from 'react'
import Container from '../components/Container.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import HeroPicture from '../components/HeroPicture.jsx'

// ✅ 使用 public 路徑，避免把大圖打進 bundle
// 放置位置：public/hero-photo/*.webp|*.jpg
const HERO = [
  {
    id: 'h2',
    cap: '人像 / Portraits',
    alt: 'Portraits hero',
    webp800:  '/hero-photo/20250525-DSC02727-800.webp',
    webp1200: '/hero-photo/20250525-DSC02727-1200.webp',
    jpg1200:  '/hero-photo/20250525-DSC02727-1200.jpg',
    w: 3000, h: 2000,
  },
  {
    id: 'h1',
    cap: '棚拍 / Portraits',
    alt: 'Studio portraits hero',
    webp800:  '/hero-photo/20250427-0017-800.webp',
    webp1200: '/hero-photo/20250427-0017-1200.webp',
    jpg1200:  '/hero-photo/20250427-0017-1200.jpg',
    w: 3000, h: 2000,
  },
  {
    id: 'h3',
    cap: '親子 / Baby',
    alt: 'Family and baby hero',
    webp800:  '/hero-photo/DSC08677-800.webp',
    webp1200: '/hero-photo/DSC08677-1200.webp',
    jpg1200:  '/hero-photo/DSC08677-1200.jpg',
    w: 3000, h: 2000,
  },
]

// 「精選作品」縮圖（可重用 HERO 的素材）
const HIGHLIGHTS = [
  {
    cap: '人像 / Portraits',
    alt: 'Portraits highlight',
    webp800:  '/hero-photo/20250525-DSC02727-800.webp',
    webp1200: '/hero-photo/20250525-DSC02727-1200.webp',
    jpg1200:  '/hero-photo/20250525-DSC02727-1200.jpg',
    w: 1600, h: 1200,
  },
  {
    cap: '棚拍 / Portraits',
    alt: 'Studio portraits highlight',
    webp800:  '/hero-photo/20250427-0017-800.webp',
    webp1200: '/hero-photo/20250427-0017-1200.webp',
    jpg1200:  '/hero-photo/20250427-0017-1200.jpg',
    w: 1600, h: 1200,
  },
  {
    cap: '親子 / Baby',
    alt: 'Family and baby highlight',
    webp800:  '/hero-photo/DSC08677-800.webp',
    webp1200: '/hero-photo/DSC08677-1200.webp',
    jpg1200:  '/hero-photo/DSC08677-1200.jpg',
    w: 1600, h: 1200,
  },
]

// 縮圖：lazy + 多尺寸
function ThumbPicture({ item }) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${item.webp800} 800w, ${item.webp1200} 1200w`}
        sizes="(min-width:768px) 33vw, 100vw"
      />
      <img
        src={item.jpg1200}
        alt={item.alt || item.cap}
        width={item.w}
        height={item.h}
        className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
        loading="lazy"
        decoding="async"
        sizes="(min-width:768px) 33vw, 100vw"
      />
    </picture>
  )
}

export default function Home() {
  const slides = useMemo(() => HERO, [])
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)

  // ⏱ 延後啟動輪播避免干擾 LCP；同時預抓下一張
  useEffect(() => {
    const start = () => {
      if (timer.current) return
      timer.current = setInterval(() => {
        setIdx(i => {
          const next = (i + 1) % slides.length
          // 預抓下一張（不阻塞渲染）
          const n2 = (next + 1) % slides.length
          const preload = new Image()
          preload.decoding = 'async'
          preload.src = slides[n2].webp800 // 輕一點先抓 800
          return next
        })
      }, 4200)
    }

    // 若瀏覽器支援 requestIdleCallback，等瀏覽器空檔；否則 3.2s 後再啟動
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(start)
    } else {
      const t = setTimeout(start, 3200)
      return () => clearTimeout(t)
    }

    return () => { if (timer.current) clearInterval(timer.current) }
  }, [slides])

  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <HeroPicture
            item={slides[idx]}
            priority
            className="h-[68vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>

        <Container className="h-[68vh] grid content-end py-10">
          <div className="max-w-xl rounded-3xl bg-white/85 p-6 backdrop-blur">
            <Badge>攝影 / Portrait · Street · Event</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">用鏡頭記錄真實與溫度</h1>
            <p className="mt-2 text-black/70">
              人像、街拍、活動紀錄。以自然互動為核心，呈現情感與故事感。
            </p>
            <div className="mt-4 flex gap-3">
              <Button as="a" href="#/contact">聯絡我</Button>
              <Button as="a" href="#/portfolio" variant="outline">看作品</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-14">
        <Container>
          <SectionTitle
            overline="精選作品"
            title="近期拍攝精選"
            subtitle="不同題材的代表影像，感受光影與情緒。"
          />
          <div className="grid gap-4 md:grid-cols-3" style={{ contentVisibility: 'auto' }}>
            {HIGHLIGHTS.map((s, i) => (
              <figure key={i} className="group overflow-hidden rounded-3xl border border-[var(--brand)]/40">
                <ThumbPicture item={s} />
                <figcaption className="p-3 text-sm text-black/70">{s.cap}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--brand)] text-black">
        <Container className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">需要攝影服務？</h3>
            <p className="mt-2 text-black/80">
              歡迎私訊洽談拍攝企劃與預算，提供人像、形象、活動紀錄等方案。
            </p>
          </div>
          <div className="md:justify-self-end">
            <Button as="a" href="#/contact" variant="solid" size="lg" className="w-full md:w-auto">
              立即預約
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
