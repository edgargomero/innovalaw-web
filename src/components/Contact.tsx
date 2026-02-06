import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactDetails = [
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      label: 'Oficina',
      lines: ['Pedro de Valdivia 291, Of 1306', 'Providencia, Santiago, Chile'],
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      label: 'Email',
      lines: ['info@innovalaw.cl'],
      href: 'mailto:info@innovalaw.cl',
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      label: 'Horario',
      lines: ['Lunes - Viernes: 9:00 - 18:00', 'Atención 24/7 online'],
    },
  ]

  const inputClasses = 'w-full px-1 sm:px-2 py-4 bg-transparent border-0 border-b border-warm-gray text-slate placeholder:text-slate/60 text-sm transition-all duration-300 focus:border-accent'

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white relative noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="line-accent" />
              <span className="text-accent text-xs uppercase tracking-[0.3em]">
                Contacto
              </span>
              <div className="line-accent" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-deeper leading-[1.15] mb-8">
              Conversemos sobre{' '}
              <span className="italic font-medium text-accent">tu caso</span>
            </h2>

            <p className="text-slate/80 leading-[1.8] text-base sm:text-lg max-w-xl mx-auto">
              Envíanos un mensaje y nos pondremos en contacto contigo a la brevedad.
              Tu primera consulta es sin compromiso.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >

            <div className="space-y-8 mb-12">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={detail.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-1">
                      {detail.label}
                    </span>
                    {detail.lines.map((line, i) => (
                      <p key={i} className="text-slate/80 text-sm">
                        {detail.href ? (
                          <a href={detail.href} className="hover:text-accent transition-colors">{line}</a>
                        ) : line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-4">
                Síguenos
              </span>
              <a
                href="https://instagram.com/innovalawcl"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-slate/80 hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 border border-warm-gray flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-sm">@innovalawcl</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <div>
                  <input type="text" required placeholder="Nombre" className={inputClasses} />
                </div>
                <div>
                  <input type="text" required placeholder="Apellido" className={inputClasses} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <div>
                  <input type="email" required placeholder="Email" className={inputClasses} />
                </div>
                <div>
                  <input type="tel" required placeholder="Teléfono" className={inputClasses} />
                </div>
              </div>

              <div>
                <select required className={`${inputClasses} cursor-pointer`} defaultValue="">
                  <option value="" disabled>Servicio de interés</option>
                  <option value="migracion">Innova Migración</option>
                  <option value="personas">Innova Personas</option>
                  <option value="corporativo">Innova Corporativo</option>
                  <option value="financiero">Innova Financiero</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntanos brevemente sobre tu caso..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="pt-6">
                <motion.button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary-deeper text-white text-sm font-semibold tracking-wide uppercase hover:bg-primary-dark transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-5 border border-accent/20 bg-accent/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-primary-deeper font-semibold text-sm">Mensaje enviado</p>
                      <p className="text-slate/80 text-xs">Nos pondremos en contacto pronto.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
