import { AboutReport } from './AboutReport'
import './App.scss'
import { BannerStart } from './BannerStart'
import { CTA } from './CTA'
import { Footer } from './Footer'
import { Header } from './Header'
import { MainConclusions } from './MainConclusions'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { Section5 } from './Section5'
import { Section6 } from './Section6'
import { Section7 } from './Section7'
import { TranslationProvider } from './TranslationContext'

function App() {

  return (
    <>

      <TranslationProvider>
        <Header />
        <BannerStart />
        <MainConclusions />
        <section>
          <span id="sectionTarget__1" className="target-scroll"></span>
          <CTA />
        </section>

        <Section3 />
        <Section4 />
        <Section5 />
        <section>
          <CTA />
        </section>
        <AboutReport />
        <Section6 />

        <Section7 />
        <Footer />
      </TranslationProvider>
    </>
  )
}

export default App
