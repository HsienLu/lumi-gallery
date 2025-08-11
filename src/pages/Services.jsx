import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'

export default function Services(){
  const items = [
    { title: '人像外拍', desc: '自然互動、人像故事感。含精修10張。', price: 'NT$3,500–6,000', includes: ['1.5–2hr 拍攝', '基本調色全交件', '精修10張'] },
    { title: '活動紀錄', desc: '會議、展演、派對。含線上相簿交件。', price: 'NT$2,500/小時起', includes: ['連拍瞬間捕捉', '重點快修5張', '當日備份'] },
    { title: '形象/商業', desc: '個人品牌、形象照、產品應用。', price: '私訊詢價', includes: ['專案討論與分鏡', '造型建議與場地協助', '合約與授權'] },
  ]
  return (
    <main className="py-10">
      <Container>
        <SectionTitle overline="服務方案" title="Services" subtitle="可依需求客製內容與時程，價格僅供參考。歡迎私訊討論。" />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-3xl border border-[var(--brand)]/40 p-6">
              <h3 className="text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-black/80">{it.desc}</p>
              <div className="mt-3 text-base font-semibold">{it.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-black/80">
                {it.includes.map((v, k) => <li key={k}>• {v}</li>)}
              </ul>
              <Button as="a" href="#/contact" className="mt-5 w-full">諮詢此方案</Button>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
