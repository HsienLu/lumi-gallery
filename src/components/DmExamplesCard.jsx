// components/DmExamplesCard.jsx
import { useState, useEffect } from 'react'
import Button from './Button.jsx'

export default function DmExamplesCard({
    igUrl = 'https://instagram.com/lumi_potraits',
    title = '快速聯絡建議',
    description = '如想要得到盡快回覆，請直接私我 IG。',
    examples
}) {
    const dmExamples = examples ?? [
        `嗨，我想詢問人像外拍（互惠）～
日期：2025/09/20（六）下午
地點：大稻埕碼頭附近
風格：日系文青、自然互動
是否可公開：可以（若有不適合的部分再請協助篩選）
備註：可帶一套白襯衫＋牛仔褲，時間可彈性調整，謝謝！`,

        `嗨，想詢問人像棚拍（互惠）～
日期：2025/10/02（四）上午
地點：台北信義區（可一起討論合適棚）
風格：乾淨商業形象、背景純色
是否可公開：以公開為主（可挑選部分）
備註：願意均分場租，妝髮可自己準備或再討論建議。`,

        `嗨，想詢問親子活動寫真（互惠）～
日期：2025/09/28（日）上午
地點：新北板橋（家中／附近公園皆可）
成員：2 大 1 小（寶寶 11 個月）
是否可公開：可公開部分照片（以不露臉為主）
備註：希望捕捉日常互動與抓周小儀式，謝謝！`
    ]

    const [open, setOpen] = useState(false)
    const [copied, setCopied] = useState(null)

    // Esc 關閉 + 背景滾動鎖定
    useEffect(() => {
        if (!open) return
        const onKey = (e) => e.key === 'Escape' && setOpen(false)
        document.addEventListener('keydown', onKey)
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prev
        }
    }, [open])

    const copy = async (txt, i) => {
        try {
            await navigator.clipboard.writeText(txt)
        } catch {
            const ta = document.createElement('textarea')
            ta.value = txt
            document.body.appendChild(ta)
            ta.select()
            document.execCommand('copy')
            document.body.removeChild(ta)
        }
        setCopied(i)
        setTimeout(() => setCopied(null), 1200)
    }

    return (
        <>
            {/* 觸發卡片 */}
            <div className="rounded-3xl border border-[var(--brand)]/40 p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-black/60">{description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {/* 用原生 <a> 確保一定能新開分頁，即使 Button 沒有透傳 target */}
                    <a
                        href={igUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border px-3 py-1.5 text-sm hover:bg-black/5"
                        aria-label="前往 IG 私訊（另開新頁）"
                    >
                        前往 IG 私訊
                    </a>

                    {/* 若你的 Button 確認會透傳 props，也可改回 <Button as="a" ... target="_blank" /> */}
                    <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
                        查看私訊範例
                    </Button>
                </div>
            </div>

            {/* Modal：點背景任意處即可關閉（onClick 掛在外層），內容用 stopPropagation 阻擋 */}
            {open && (
                <div
                    className="fixed inset-0 z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="dm-title"
                >
                    {/* 背景遮罩：點一下就關閉 */}
                    <button
                        type="button"
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setOpen(false)}
                        aria-label="點背景關閉視窗"
                    />

                    {/* 置中容器：不吃事件，讓背景可點 */}
                    <div className="pointer-events-none absolute inset-0 grid place-items-center p-4">
                        {/* 對話框面板：才允許互動並阻擋冒泡 */}
                        <div
                            className="pointer-events-auto w-full max-w-2xl rounded-3xl border border-[var(--brand)]/40 bg-white p-6 shadow-xl"
                            role="document"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between">
                                <h3 id="dm-title" className="text-lg font-semibold">IG 私訊範例</h3>
                                <button
                                    className="rounded-full px-3 py-1 text-sm ring-1 ring-black/10 hover:bg-black/5"
                                    onClick={() => setOpen(false)}
                                    aria-label="關閉"
                                >
                                    ✕
                                </button>
                            </div>

                            <p className="mt-1 text-sm text-black/60">
                                可以直接複製以下文字，再依你的情況改一下日期、地點與人數喔！
                            </p>

                            <ul className="mt-4 space-y-3">
                                {dmExamples.map((txt, i) => (
                                    <li key={i} className="rounded-2xl border border-[var(--brand)]/30 p-3">
                                        <div className="flex items-center justify-between">
                                            <div className="font-medium">
                                                {i === 0 ? '人像外拍' : i === 1 ? '人像棚拍' : '親子活動寫真'}
                                            </div>
                                            <button
                                                onClick={() => copy(txt, i)}
                                                className="text-sm rounded-full px-3 py-1 ring-1 ring-[var(--brand)]/30 hover:bg-[var(--brand)]/5"
                                            >
                                                {copied === i ? '已複製 ✓' : '複製'}
                                            </button>
                                        </div>
                                        <pre className="mt-2 whitespace-pre-wrap text-sm text-black/80">{txt}</pre>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {/* 一定新開分頁 */}
                                <a
                                    href={igUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-xl border px-3 py-1.5 text-sm hover:bg-black/5"
                                >
                                    打開 IG
                                </a>
                                <button
                                    className="rounded-xl border px-3 py-1.5 text-sm hover:bg-black/5"
                                    onClick={() => setOpen(false)}
                                >
                                    關閉
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
