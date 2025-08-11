import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar.jsx'
import Footer from './layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import FloatingCTA from './components/FloatingCTA.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App(){
  return (
<HashRouter>
      <ScrollToTop />
      {/* 這個外層很重要 */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />   {/* Footer 一定要在這個 flex 容器裡 */}
      </div>
      <FloatingCTA /> {/* 這個固定定位，放外面 OK */}
    </HashRouter>
  )
}