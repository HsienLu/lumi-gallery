import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`姓名: ${form.name}\nEmail: ${form.email}\n訊息: ${form.message}`)
    window.location.href = `mailto:you@example.com?subject=${encodeURIComponent('拍攝洽詢 — LumiGallery')}&body=${body}`
  }

  return (
    <main className="py-10">
      <Container>
        <SectionTitle overline="聯絡我" title="Contact" subtitle="留下您的需求，我會盡快回覆。也可直接透過 Line 或 IG 私訊我。" />
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-3xl border border-[var(--brand)]/40 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">姓名</label>
              <input required value={form.name} onChange={update('name')} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="您的稱呼" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" value={form.email} onChange={update('email')} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="name@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">訊息</label>
              <textarea required value={form.message} onChange={update('message')} className="mt-1 w-full rounded-xl border px-3 py-2 min-h-28" placeholder="想拍攝的內容、時間與地點..." />
            </div>
            <Button size="lg" className="w-full">送出</Button>
            <div className="text-sm text-black/60">送出後將開啟您的郵件軟體，並填入表單內容。</div>
          </form>
          <div className="space-y-4">
            <div className="rounded-3xl border border-[var(--brand)]/40 p-6">
              <h3 className="font-semibold">社群與快速聯絡</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button as="a" variant="outline" href="https://line.me/ti/p/~yourlineid">Line 加好友</Button>
                <Button as="a" variant="outline" href="https://instagram.com/yourhandle">IG 私訊</Button>
                <Button as="a" variant="outline" href="mailto:you@example.com">Email</Button>
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--brand)]/40 p-6">
              <h3 className="font-semibold">拍攝流程</h3>
              <ol className="mt-3 space-y-2 text-sm text-black/80">
                <li>1. 需求討論 → 題材、預算、時程</li>
                <li>2. 場地與造型建議 → 確認拍攝細節</li>
                <li>3. 拍攝當日 → 專注溝通與引導</li>
                <li>4. 後製交件 → 線上相簿下載</li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
