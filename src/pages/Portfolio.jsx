import { useMemo, useState } from 'react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Lightbox from '../components/Lightbox.jsx'
import sampleImg1 from '/sample-photo/20250524-DSC02579-1.jpg'
import sampleImg2 from '/sample-photo/20250525-DSC02971-2.jpg'
import sampleImg3 from '/sample-photo/20250427-0022-3.jpg'
import sampleImg4 from '/sample-photo/20250427-0005-4.jpg'
import sampleImg5 from '/sample-photo/DSC08702-5.jpg'
import sampleImg6 from '/sample-photo/DSC08674-6.jpg'

const SAMPLE_IMAGES = [
  { id: 1, src: sampleImg1, title: '人像外拍', cat: 'portrait' },
  { id: 2, src: sampleImg2, title: '人像外拍', cat: 'portrait' },
  { id: 3, src: sampleImg3, title: '人像棚拍', cat: 'studio' },
  { id: 4, src: sampleImg4, title: '人像棚拍', cat: 'studio' },
  { id: 5, src: sampleImg5, title: '親子寫真', cat: 'baby' },
  { id: 6, src: sampleImg6, title: '親子寫真', cat: 'baby' },
]

export default function Portfolio(){
  const [cat, setCat] = useState('all')
  const [selected, setSelected] = useState(null)
  const data = useMemo(() => SAMPLE_IMAGES.filter(i => cat === 'all' ? true : i.cat === cat), [cat])
  const tabBtn = (key, label) => (
    <Button key={key} variant={cat === key ? 'solid' : 'outline'} onClick={() => setCat(key)} size="sm">{label}</Button>
  )

  return (
    <main className="py-10">
      <Container>
        {/* <SectionTitle overline="作品集" title="Portfolio" subtitle="分類瀏覽：人像 / 活動 / 街拍。點擊圖片可放大 (燈箱)。" /> */}
        <div className="mb-5 flex flex-wrap gap-2">
          {tabBtn('all','全部')}
          {tabBtn('portrait','人像外拍')}
          {tabBtn('studio','人像棚拍')}
          {tabBtn('baby','親子寫真')}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(item => (
            <figure key={item.id} className="group cursor-pointer overflow-hidden rounded-3xl border border-[var(--brand)]/40" onClick={() => setSelected(item)}>
              <img src={item.src} alt={item.title} className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
              <figcaption className="p-3 text-sm text-black/70">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
      <Lightbox open={!!selected} image={selected} onClose={() => setSelected(null)} />
    </main>
  )
}
