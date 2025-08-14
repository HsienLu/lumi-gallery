import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'

export default function Services(){
  const items = [
    { 
      title: '人像外拍', 
      desc: '自然互動、人像故事感。含精修10張。', 
      price: '但要可接受網路公開做為作品集', 
      includes: ['1.5–2hr 拍攝', '基本調色全交件'] 
    },
    { 
      title: '人像棚拍', 
      desc: '棚內燈光，適合主題人像與形象照。', 
      price: '但棚費均分，且要可接受公開做為作品集', 
      includes: ['1.5–2hr 拍攝', '基本調色全交件'] 
    },
    { 
      title: '親子活動寫真', 
      desc: '捕捉親子互動與活動的自然瞬間。', 
      price: '但要可接受網路公開做為作品集', 
      includes: ['1.5–2hr 拍攝', '基本調色全交件'] 
    }
  ];

  return (
    <main className="py-10">
      <Container>
        {/* 服務方案 */}
        <SectionTitle
          overline="服務方案"
          title="Services"
          subtitle="可依需求客製內容與時程，價格僅供參考。歡迎私訊討論。"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-3xl border border-[var(--brand)]/40 p-6">
              <h3 className="text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-black/80">{it.desc}</p>

              <div className="mt-3">
                <div className="text-base font-semibold">費用：Free</div>
                <p className="mt-1 text-sm text-black/70">{it.price}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-black/80">
                {it.includes.map((v, k) => <li key={k}>• {v}</li>)}
              </ul>

              <Button as="a" href="#/contact" className="mt-5 w-full">
                諮詢此方案
              </Button>
            </div>
          ))}
        </div>

        {/* 合作提醒 */}
        <div className="mt-10 rounded-3xl border border-[var(--brand)]/40 p-6">
          <h3 className="font-semibold">合作小提醒</h3>

          {/* 兩欄卡片式列表：手機一欄、桌機兩欄 */}
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-black/80">
            <li className="flex items-start gap-3 p-3 rounded-2xl border border-[var(--brand)]/30 hover:bg-[var(--brand)]/5 transition">
              <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">🧡</span>
              <div>
                <div className="font-medium">作品分享（以公開為主）</div>
                <p className="text-sm text-black/70">作品優先公開於作品集／社群；若有隱私考量，也可事前先進行溝通。</p>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-2xl border border-[var(--brand)]/30 hover:bg-[var(--brand)]/5 transition">
              <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">📅</span>
              <div>
                <div className="font-medium">改期提醒</div>
                <p className="text-sm text-black/70">若需要改期，盡量於 3 天前告知。當日如有突發狀況，也可以一起協調調整。<b>拜託請不要突然消失!</b></p>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-2xl border border-[var(--brand)]/30 hover:bg-[var(--brand)]/5 transition">
              <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">☔️</span>
              <div>
                <div className="font-medium">天候彈性</div>
                <p className="text-sm text-black/70">若遇降大雨或是颱風，依事前溝通可改期或取消，安全與效果優先。</p>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-2xl border border-[var(--brand)]/30 hover:bg-[var(--brand)]/5 transition">
              <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">📸</span>
              <div>
                <div className="font-medium">檔案說明</div>
                <p className="text-sm text-black/70">交付為基本調色全檔＋精修；RAW 檔一般不提供，如有特別需求可以事先聊聊。</p>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-2xl border border-[var(--brand)]/30 hover:bg-[var(--brand)]/5 transition">
              <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">🏠</span>
              <div>
                <div className="font-medium">棚拍費用</div>
                <p className="text-sm text-black/70">若需租棚，費用平均分攤，我以可先幫忙協助估價與詢問。</p>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-2xl border border-[var(--brand)]/30 hover:bg-[var(--brand)]/5 transition">
              <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">👶</span>
              <div>
                <div className="font-medium">親子安全</div>
                <p className="text-sm text-black/70">若含未成年，邀請監護人在場更安心，互動也會更自然。</p>
              </div>
            </li>
          </ul>

          <p className="mt-4 text-sm text-black/60">有任何想法都可以先聊聊，我會依你的舒適度安排～ </p>
        </div>
      </Container>
    </main>
  )
}
