import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  const linkCls = ({ isActive }) => `px-3 py-2 rounded-xl text-sm font-medium hover:bg-[var(--brand)]/20 ${isActive ? 'bg-[var(--brand)] text-black' : ''}`

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand)]/40 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between h-16">
        <a href="#/" className="flex items-center gap-2 font-bold text-lg">
          {/* <span className="h-7 w-7 rounded-xl bg-[var(--brand)] text-black grid place-items-center">LG</span> */}
          LumiGallery
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkCls} end>首頁</NavLink>
          <NavLink to="/portfolio" className={linkCls}>作品集</NavLink>
          <NavLink to="/services" className={linkCls}>服務方案</NavLink>
          <NavLink to="/about" className={linkCls}>關於我</NavLink>
          <NavLink to="/contact" className={linkCls}>聯絡我</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button as="a" href="#/contact" size="sm">預約拍攝</Button>
          <button className="md:hidden size-9 grid place-items-center rounded-xl border" onClick={() => setOpen(v => !v)} aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>
      {open && (
        <div className="md:hidden border-t bg-white">
          <Container className="py-2 flex flex-col">
            <NavLink to="/" className={linkCls} end>首頁</NavLink>
            <NavLink to="/portfolio" className={linkCls}>作品集</NavLink>
            <NavLink to="/services" className={linkCls}>服務方案</NavLink>
            <NavLink to="/about" className={linkCls}>關於我</NavLink>
            <NavLink to="/contact" className={linkCls}>聯絡</NavLink>
          </Container>
        </div>
      )}
    </header>
  )
}