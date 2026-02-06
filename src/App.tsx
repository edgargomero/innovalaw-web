import Navbar from './components/organisms/Navbar'
import HeroSection from './components/organisms/HeroSection'
import StatsSection from './components/organisms/StatsSection'
import ServicesSection from './components/organisms/ServicesSection'
import AboutSection from './components/organisms/AboutSection'
import CTA from './components/organisms/CTA'
import ContactSection from './components/organisms/ContactSection'
import Footer from './components/organisms/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
