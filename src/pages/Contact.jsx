import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import DmExamplesCard from '../components/DmExamplesCard.jsx'
import { useState } from 'react'
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    contactType: 'IG',   // 預設 IG
    contact: '',
    message: ''
  })
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [
      `姓名：${form.name}`,
      `聯絡方式：${form.contactType} — ${form.contact}`,
      `訊息：${form.message}`
    ]
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href =
      `mailto:sjps946403@gmail.com?subject=${encodeURIComponent('拍攝洽詢 — LumiGallery')}&body=${body}`
  }

  return (
    <main className="py-10">
      <Container>
        <SectionTitle
          overline="聯絡我"
          title="Contact"
          subtitle="留下您的需求，我會盡快回覆。也可直接透過 IG 私訊我。"
        />
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-3xl border border-[var(--brand)]/40 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">姓名</label>
              <input
                required
                value={form.name}
                onChange={update('name')}
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="您的稱呼"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">聯絡方式（擇一）*</label>
              <div className="mt-1 flex flex-col sm:flex-row gap-2">
                <select
                  value={form.contactType}
                  onChange={update('contactType')}
                  className="rounded-xl border px-3 py-2 sm:w-40"
                >
                  <option>IG</option>
                  <option>Line</option>
                  <option>Facebook</option>
                  <option>Threads</option>
                  <option>Email</option>
                </select>

                <input
                  required
                  type={form.contactType === 'Email' ? 'email' : 'text'}
                  value={form.contact}
                  onChange={update('contact')}
                  className="flex-1 rounded-xl border px-3 py-2"
                  placeholder={
                    form.contactType === 'Email'
                      ? 'name@example.com'
                      : form.contactType === 'Line'
                        ? 'Line ID 或連結'
                        : '＠帳號 或 個人頁連結'
                  }
                />
              </div>
              <p className="mt-1 text-xs text-black/60">
                例：Line：@yourid｜IG：@yourid｜
                FB：粉專/個人頁連結｜Threads：@yourid
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium">訊息</label>
              <textarea
                required
                value={form.message}
                onChange={update('message')}
                className="mt-1 w-full rounded-xl border px-3 py-2 min-h-28"
                placeholder="想拍攝的內容、時間與地點...。例：想拍攝溫柔文青風的人像外拍，時間 2025/09/20 下午2:00，地點大稻埕碼頭附近。"
              />
            </div>

            <Button size="lg" className="w-full">送出</Button>
            <div className="text-sm text-black/60">送出後將開啟您的郵件軟體，並填入表單內容。</div>
          </form>

          <div className="space-y-4">
            <div className="rounded-3xl border border-[var(--brand)]/40 p-6">
              <h3 className="font-semibold">社群與快速聯絡</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button as="a" href="https://instagram.com/lumi_potraits" variant="outline" size="sm">Instagram</Button>
                <Button as="a" href="https://www.threads.com/lumi_potraits" variant="outline" size="sm">Threads</Button>
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

                  <DmExamplesCard igUrl="https://instagram.com/lumi_potraits"/>

            {/* 你也可以把「合作小提醒」卡片加在這裡 */}
          </div>
        </div>
      </Container>
    </main>
  )
}
