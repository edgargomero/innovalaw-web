import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen gap-0 md:gap-0 lg:gap-0 relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
