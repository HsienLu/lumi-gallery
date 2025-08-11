import { useEffect, useMemo, useState } from 'react'
import Container from '../components/Container.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import heroImg1 from '/hero-photo/20250427-0017.jpg'
import heroImg2 from '/hero-photo/20250525-DSC02727.jpg'
import heroImg3 from '/hero-photo/DSC08677.jpg'

export default function Home(){
  const slides = useMemo(() => ([
    { src: heroImg2, caption: '人像 / Portraits' },
    { src: heroImg1, caption: '棚拍 / Portraits' },
    { src: heroImg3, caption: '親子 / baby' }
  ]), [])
  const [idx, setIdx] = useState(0)
  useEffect(() => { const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 4200); return () => clearInterval(t) }, [slides.length])

  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={slides[idx].src} alt="hero" className="h-[68vh] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        <Container className="h-[68vh] grid content-end py-10">
          <div className="max-w-xl rounded-3xl bg-white/85 p-6 backdrop-blur">
            <Badge>攝影 / Portrait · Street · Event</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">用鏡頭記錄真實與溫度</h1>
            <p className="mt-2 text-black/70">人像、街拍、活動紀錄。以自然互動為核心，呈現情感與故事感。</p>
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
          <SectionTitle overline="精選作品" title="近期拍攝精選" subtitle="不同題材的代表影像，感受光影與情緒。" />
          <div className="grid gap-4 md:grid-cols-3">
            {slides.map((s, i) => (
              <figure key={i} className="group overflow-hidden rounded-3xl border border-[var(--brand)]/40">
                <img src={s.src} alt={s.caption} className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
                <figcaption className="p-3 text-sm text-black/70">{s.caption}</figcaption>
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
            <p className="mt-2 text-black/80">歡迎私訊洽談拍攝企劃與預算，提供人像、形象、活動紀錄等方案。</p>
          </div>
          <div className="md:justify-self-end">
            <Button as="a" href="#/contact" variant="solid" size="lg" className="w-full md:w-auto">立即預約</Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
