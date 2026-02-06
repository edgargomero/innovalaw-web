import { lazy, Suspense } from 'react'
import Navbar from './components/organisms/Navbar'
import HeroSection from './components/organisms/HeroSection'

const StatsSection = lazy(() => import('./components/organisms/StatsSection'))
const ServicesSection = lazy(() => import('./components/organisms/ServicesSection'))
const AboutSection = lazy(() => import('./components/organisms/AboutSection'))
const CTA = lazy(() => import('./components/organisms/CTA'))
const ContactSection = lazy(() => import('./components/organisms/ContactSection'))
const Footer = lazy(() => import('./components/organisms/Footer'))

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Suspense>
          <StatsSection />
          <ServicesSection />
          <AboutSection />
          <CTA />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
