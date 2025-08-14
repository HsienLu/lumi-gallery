import { useState } from 'react'
import Button from '../components/Button.jsx'

export default function ContactForm({
  mailTo = 'sjps946403@gmail.com',
  subject = '拍攝洽詢 — LumiGallery',
  defaultType = 'IG',
  className = ''
}) {
  const [form, setForm] = useState({
    name: '',
    contactType: defaultType,
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
    window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-3xl border border-[var(--brand)]/40 p-6 space-y-4 ${className}`}>
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
          例：Line：@yourid｜IG：@yourid｜FB：粉專/個人頁連結｜Threads：@yourid
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
  )
}