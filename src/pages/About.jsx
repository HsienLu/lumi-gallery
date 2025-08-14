import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'

export default function About(){
  return (
    <main className="py-10">
      <Container>
        <SectionTitle overline="關於我" title="Hi，我是 咸儒 Lumi" subtitle="專注人像、街拍與活動紀錄。以自然互動、真實情緒為核心的拍攝風格。" />
        <div className="grid gap-8 md:grid-cols-2 ">
          <img className="w-full rounded-3xl border border-[var(--brand)]/40 object-cover aspect-[4/3]" src="/introduction.jpg" alt="profile" />
          <div className="space-y-8 pt-4">
            <p>我喜歡以觀察與交流建立信任，在輕鬆的氛圍中捕捉人物最自然的狀態。器材為 Sony A7C II，習慣以自然光搭配簡潔用光呈現通透色調。</p>
            <ul className="list-disc pl-5 text-black/80">
              <li>服務地區：台北 / 新北 / 桃園 /其他地區，再麻煩私訊&gt;&lt;</li>
              <li>專業領域：人像外拍、活動紀錄、形象拍攝</li>
              <li>後製工具：Lightroom</li>
            </ul>
            <div className="flex gap-3 pt-2">
              <Button as="a" href="#/services" target=''>查看服務方案</Button>
              <Button as="a" variant="outline" href="#/contact">聯絡我</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
