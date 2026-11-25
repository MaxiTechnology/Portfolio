import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()
  const mainContent = useRef(null)

  // Start a new page at its heading. Leave history navigation to the browser.
  useEffect(() => {
    if (navigationType === 'PUSH') {
      mainContent.current.focus({ preventScroll: true })
      window.scrollTo(0, 0)
    }
  }, [pathname, navigationType])

  // Only the content inside Routes changes when a visitor follows a link.
  return (
    <>
      <Navbar />
      <main className="container" ref={mainContent} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
