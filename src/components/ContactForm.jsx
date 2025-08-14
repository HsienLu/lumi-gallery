import { useState } from 'react'
import Button from '../components/Button.jsx'

export default function ContactForm({
  mailTo = 'sjps946403@gmail.com',           // 仍保留，但現版本預設先走 Google 表單
  subject = '拍攝洽詢 — LumiGallery',
  defaultType = 'IG',
  className = ''
}) {
  // 你的 Google 表單設定（已從你給的預填連結解析）
  const GOOGLE_FORM_ID = '1FAIpQLSfVeYUrj363BNqK7eCfhOjhpBCMM0Dt2vh-vBWZU13Q0y5j5Q'
  const ENTRY = {
    name: 'entry.1057131336',
    contactType: 'entry.1118792849',
    contact: 'entry.23171793',
    message: 'entry.2110246481',
  }
  const ACTION_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`

  const [form, setForm] = useState({
    name: '',
    contactType: defaultType,
    contact: '',
    message: '',
    website: '' // 蜜罐（隱藏，Bot 會填）
  })
  const [status, setStatus] = useState({ sending: false, success: false, error: '' })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const validate = () => {
    if (!form.name.trim()) return '請輸入姓名'
    if (!form.contact.trim()) return '請輸入聯絡帳號'
    if (!form.message.trim()) return '請輸入訊息內容'
    if (form.contactType === 'Email') {
      const ok = /\S+@\S+\.\S+/.test(form.contact.trim())
      if (!ok) return '請輸入正確的 Email 格式'
    }
    return ''
  }

  const submitToGoogleForm = async () => {
    const fd = new FormData()
    fd.append(ENTRY.name, form.name)
    fd.append(ENTRY.contactType, form.contactType) // ⚠️ 值需與表單選項文字一致
    fd.append(ENTRY.contact, form.contact)
    fd.append(ENTRY.message, form.message)

    // 可選的隱藏欄位（不是必填）
    // fd.append('fvv', '1')
    // fd.append('draftResponse', '[]')
    // fd.append('pageHistory', '0')

    await fetch(ACTION_URL, {
      method: 'POST',
      mode: 'no-cors', // 無法讀取回應狀態，屬正常行為
      body: fd
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // 蜜罐命中 → 忽略
    if (form.website) return

    const err = validate()
    if (err) {
      setStatus({ sending: false, success: false, error: err })
      return
    }

    setStatus({ sending: true, success: false, error: '' })
    try {
      await submitToGoogleForm()
      setStatus({ sending: false, success: true, error: '' })
      setForm({ name: '', contactType: defaultType, contact: '', message: '', website: '' })
    } catch (err) {
      // （可選）失敗時回退 mailto，若你想要保留退路可打開下列註解
      // const lines = [
      //   `姓名：${form.name}`,
      //   `聯絡方式：${form.contactType} — ${form.contact}`,
      //   `訊息：${form.message}`
      // ]
      // const body = encodeURIComponent(lines.join('\n'))
      // window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${body}`

      setStatus({ sending: false, success: false, error: '送出失敗，請稍後再試或直接 IG 私訊。' })
    }
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-3xl border border-[var(--brand)]/40 p-6 space-y-4 ${className}`}>
      {/* 蜜罐（隱藏欄位） */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">如果你是人類，請不要填這個欄位</label>
        <input
          id="website"
          name="website"
          value={form.website}
          onChange={update('website')}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

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
            className="rounded-xl border px-3 py-2 sm:w-40 bg-white"
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

      {/* 狀態顯示 */}
      {status.error && <div className="text-sm text-red-600">{status.error}</div>}
      {status.success && <div className="text-sm text-emerald-700">✅ 已送出！我會盡快回覆你。</div>}

      <Button size="lg" className="w-full" disabled={status.sending}>
        {status.sending ? '送出中…' : '送出'}
      </Button>

      {/* 既然改用 Google 表單，這段文案改一下較準確 */}
      <div className="text-sm text-black/60">送出後資料會直接寫入我的表單（Google Sheets）。</div>
    </form>
  )
}
