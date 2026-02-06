import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(201,168,76,0.15)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-500 ${
              scrolled ? 'bg-primary-deeper' : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <span className={`font-['Cormorant_Garamond'] text-lg font-bold ${
                scrolled ? 'text-accent' : 'text-accent'
              }`}>IL</span>
            </div>
            <div>
              <span className={`text-xl font-['Cormorant_Garamond'] font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-primary-deeper' : 'text-white'
              }`}>
                InnovaLaw
              </span>
              <span className={`hidden sm:block text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                scrolled ? 'text-accent' : 'text-accent-light'
              }`}>
                Consultoría Jurídica
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide link-underline transition-colors duration-300 ${
                  scrolled
                    ? 'text-slate hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              className={`px-6 py-2.5 text-sm tracking-wide transition-all duration-300 ${
                scrolled
                  ? 'bg-primary-deeper text-white hover:bg-primary-dark'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/25 hover:bg-white/20'
              }`}
            >
              Consulta Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? 'text-primary-deeper' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú de navegación"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`block w-full h-[1.5px] origin-left transition-colors ${
                  scrolled ? 'bg-primary-deeper' : 'bg-white'
                }`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className={`block w-full h-[1.5px] transition-colors ${
                  scrolled ? 'bg-primary-deeper' : 'bg-white'
                }`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`block w-full h-[1.5px] origin-left transition-colors ${
                  scrolled ? 'bg-primary-deeper' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`block py-3 text-lg font-['Cormorant_Garamond'] font-semibold border-b transition-colors ${
                      scrolled
                        ? 'text-primary-deeper border-warm-gray hover:text-accent'
                        : 'text-white border-white/10 hover:text-accent'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contacto"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="inline-block mt-4 px-6 py-3 bg-accent text-white text-sm tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Consulta Gratuita
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
