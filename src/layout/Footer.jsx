import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function Footer(){
  return (
    <footer className="border-t border-[var(--brand)]/40 bg-white">
      <Container className="py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-bold text-lg">
            {/* <span className="h-7 w-7 rounded-xl bg-[var(--brand)] text-black grid place-items-center">LG</span> */}
            LumiGallery
          </div>
          <p className="text-sm text-black/60">用鏡頭記錄真實與溫度。</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button as="a" href="https://instagram.com/lumi_potraits"  variant="outline" size="sm">Instagram</Button>
          <Button as="a" href="https://www.threads.com/lumi_potraits" variant="outline" size="sm">Threads</Button>
          <Button as="a" href="mailto:sjps946403@gmail.com" variant="outline" size="sm">Email</Button>
        </div>
        <div className="text-sm text-black/60 md:text-right">© {new Date().getFullYear()} LumiGallery. All rights reserved.</div>
      </Container>
    </footer>
  )
}
