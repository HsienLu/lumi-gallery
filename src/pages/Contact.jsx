import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import DmExamplesCard from '../components/DmExamplesCard.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <main className="py-10">
      <Container>
        <SectionTitle
          overline="聯絡我"
          title="Contact"
          subtitle="留下您的需求，我會盡快回覆。也可直接透過 IG 私訊我。"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* 左側：已拆成獨立元件 */}
          <ContactForm />

          {/* 右側：資訊卡片區 */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-[var(--brand)]/40 p-6">
              <h3 className="font-semibold">社群與快速聯絡</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button as="a" href="https://instagram.com/lumi_potraits" target="_blank" rel="noopener noreferrer" variant="outline" size="sm">Instagram</Button>
                <Button as="a" href="https://www.threads.com/lumi_potraits" target="_blank" rel="noopener noreferrer" variant="outline" size="sm">Threads</Button>
                <Button as="a" href="mailto:sjps946403@gmail.com" variant="outline" size="sm">Email</Button>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--brand)]/40 p-6">
              <h3 className="font-semibold">簡易預約流程</h3>
              <ol className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">📝</span>
                  <p className="text-black/80">填寫表單 <span className="text-black/60">→ 想拍內容／日期時段／地點或區域</span></p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">📅</span>
                  <p className="text-black/80">檔期回覆 <span className="text-black/60">→ 48 小時內確認是否可拍</span></p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">💬</span>
                  <p className="text-black/80">拍前討論 <span className="text-black/60">→ 集合點、穿搭與妝髮；外拍備天候方案</span></p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">📷</span>
                  <p className="text-black/80">正式拍攝 <span className="text-black/60">→ 依時長完成；現場 2–3 張預覽確認方向</span></p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 grid place-items-center rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">⬇️</span>
                  <p className="text-black/80">成品交付 <span className="text-black/60">→ 7–14 天內提供基本調色全檔（線上相簿）</span></p>
                </li>
              </ol>
            </div>

            <DmExamplesCard igUrl="https://instagram.com/lumi_potraits" />
          </div>
        </div>
      </Container>
    </main>
  )
}