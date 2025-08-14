import { useEffect, useState, useRef, useCallback } from 'react'

// Mobile-first Lightbox v3
// - 依你的需求：**點背景即可關閉**（移除大顆關閉鈕與手機半屏點擊區）
// - 仍支援：下滑關閉、左右滑動切換（onPrev/onNext）
// - 點圖片只切換 UI，不會關閉（避免誤觸）
export default function Lightbox({ open, onClose, image, onPrev, onNext }){
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showUI, setShowUI] = useState(true)

  // gesture state
  const startX = useRef(0)
  const startY = useRef(0)
  const dx = useRef(0)
  const dy = useRef(0)
  const mode = useRef(null) // 'h' | 'v'

  const handleClose = useCallback(() => {
    setShow(false)
    setTimeout(() => onClose?.(), 160)
  }, [onClose])

  useEffect(() => {
    if (open) {
      setShow(true)
      setLoading(true)
      setShowUI(true)
    } else {
      setShow(false)
    }
  }, [open, image?.src])

  // keyboard (desktop)
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') return handleClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onPrev, onNext, handleClose])

  // touch gestures on image
  const onTouchStart = (e) => {
    mode.current = null
    startX.current = e.touches[0].clientX
    startY.current = e.touches[0].clientY
    dx.current = 0
    dy.current = 0
  }
  const onTouchMove = (e) => {
    dx.current = e.touches[0].clientX - startX.current
    dy.current = e.touches[0].clientY - startY.current
    if (!mode.current && (Math.abs(dx.current) > 10 || Math.abs(dy.current) > 10)) {
      mode.current = Math.abs(dx.current) > Math.abs(dy.current) ? 'h' : 'v'
    }
    const el = document.getElementById('lgx-img')
    if (el) el.style.transform = `translate(${dx.current * 0.25}px, ${dy.current * 0.25}px)`
  }
  const onTouchEnd = () => {
    const el = document.getElementById('lgx-img')
    const H = Math.abs(dx.current)
    const V = Math.abs(dy.current)
    if (mode.current === 'h' && H > 60) {
      if (dx.current > 0 && onPrev) onPrev()
      if (dx.current < 0 && onNext) onNext()
    } else if (mode.current === 'v' && V > 80) {
      handleClose()
    }
    if (el) el.style.transform = 'translate(0, 0)'
  }

  if (!open || !image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[60] bg-black/90 transition-opacity ${show ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose} // 點背景關閉
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* 重要：這層不攔截點擊，讓背景點擊能觸發關閉 */}
      <div className="relative mx-auto h-[100svh] w-full sm:h-full sm:max-w-5xl sm:p-6 pointer-events-none">
        {/* loading */}
        {loading && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-10 w-10 animate-pulse rounded-full bg-white/30" />
          </div>
        )}

        {/* 圖片：只有圖片可互動，其餘點擊都會落到背景 */}
        <img
          id="lgx-img"
          src={image.src}
          alt={image.title}
          onLoad={() => setLoading(false)}
          onClick={(e) => { e.stopPropagation(); setShowUI((v) => !v) }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[92svh] sm:max-h-[88vh] w-auto max-w-[96svw] sm:max-w-full object-contain select-none"
          draggable={false}
        />

        {/* 桌面：右上關閉（手機以點背景/下滑為主） */}
        <div
          className={`pointer-events-none absolute left-0 right-0 top-0 flex items-start justify-end p-3 sm:p-4 transition-opacity ${showUI ? 'opacity-100' : 'opacity-0'}`}
          style={{ paddingTop: 'calc(env(safe-area-inset-top) + 4px)' }}
        >
          {/* <button
            aria-label="close"
            onClick={(e) => { e.stopPropagation(); handleClose() }}
            className="hidden sm:inline-flex pointer-events-auto rounded-full bg-white/90 text-black shadow px-3 py-2"
          >
            ×
          </button> */}
        </div>

        {/* caption 更靠近照片，且不阻擋點擊（pointer-events-none） */}
        {image.title && (
          <div className={`pointer-events-none absolute left-0 right-0 transition-opacity ${showUI ? 'opacity-100' : 'opacity-0'} sm:bottom-3 bottom-16`}>
            <div className="sm:hidden h-14 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 sm:static px-4 sm:px-0">
              <div className="mx-auto w-fit rounded-full bg-white/92 text-black px-4 py-2 text-xs sm:text-sm shadow">
                {image.title}
              </div>
            </div>
          </div>
        )}

        {/* 桌面左右箭頭（手機改用滑動切換） */}
        {onPrev && (
          <button
            className="hidden sm:grid absolute left-4 top-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow w-10 h-10 pointer-events-auto"
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            aria-label="previous"
          >
            ‹
          </button>
        )}
        {onNext && (
          <button
            className="hidden sm:grid absolute right-4 top-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow w-10 h-10 pointer-events-auto"
            onClick={(e) => { e.stopPropagation(); onNext() }}
            aria-label="next"
          >
            ›
          </button>
        )}
      </div>
    </div>
  )
}
