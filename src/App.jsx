import { LanguageProvider, useLang } from './i18n/LanguageContext'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function Site() {
  const { t, switching } = useLang()

  return (
    <div className={`transition-opacity duration-200 ease-out ${switching ? 'opacity-0' : 'opacity-100'}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-white"
      >
        {t.nav.skip}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
