import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Decorative top line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-navy-light border border-white/5 flex items-center justify-center">
                <span className="font-['Cormorant_Garamond'] text-lg font-bold text-accent">IL</span>
              </div>
              <div>
                <span className="text-xl font-['Cormorant_Garamond'] font-bold">InnovaLaw</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-accent/70">
                  Consultoría Jurídica
                </span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Estudio jurídico diseñado para brindarte tranquilidad,
              asesoramiento y apoyo en tus necesidades legales.
            </p>
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <svg className="w-4 h-4 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Pedro de Valdivia 291, Of 1306, Santiago
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-6">
              Navegación
            </span>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/35 text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-6">
              Servicios
            </span>
            <ul className="space-y-3">
              {[
                'Innova Migración',
                'Innova Personas',
                'Innova Corporativo',
                'Innova Financiero',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-white/35 text-sm hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-6">
              Redes
            </span>
            <a
              href="https://instagram.com/innovalawcl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white/35 hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 border border-white/8 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-sm">Instagram</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            &copy; {currentYear} InnovaLaw. Todos los derechos reservados.
          </p>
          <p className="text-white/10 text-xs tracking-wide">
            Diseñado con excelencia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
