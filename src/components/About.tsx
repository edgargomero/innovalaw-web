import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const values = [
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Confianza',
      text: 'Relaciones duraderas basadas en transparencia y compromiso con cada cliente.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Excelencia',
      text: 'Especialistas calificados y actualizados en la legislación vigente.',
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Seguridad',
      text: '100% de confidencialidad y protección de tus datos e información.',
    },
  ]

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-primary-deeper relative overflow-hidden noise">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary-dark/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[100px]" />
        {/* Vertical line */}
        <div className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent text-xs uppercase tracking-[0.3em]">
                Quiénes Somos
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-10">
              Más de una década{' '}
              <span className="italic font-medium text-accent-light">defendiendo</span>{' '}
              tus intereses
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-[1.8] mb-12 max-w-lg">
              Somos un estudio jurídico diseñado para brindarte tranquilidad.
              Nuestro equipo de especialistas enfatiza ética, moral y buen gobierno
              corporativo en cada solución que construimos para ti.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                'Atención personalizada 24/7',
                'Múltiples áreas del derecho',
                'Más de 10 años de experiencia',
                'Asesoría presencial y remota',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full border border-accent/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  </div>
                  <span className="text-white/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contacto"
              className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide uppercase hover:text-accent-light transition-colors"
              whileHover={{ x: 4 }}
            >
              Conocer más sobre nosotros
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.12 }}
                className="group p-6 sm:p-8 border border-white/8 hover:border-accent/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-[1.8] text-sm sm:text-base">
                      {value.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="p-6 sm:p-8 border-l-2 border-accent bg-accent/5"
            >
              <p className="text-white/70 italic text-lg font-['Cormorant_Garamond'] leading-[1.8]">
                "Nuestra misión es brindarte tranquilidad, asesoramiento y apoyo
                en cada paso del camino."
              </p>
              <span className="text-accent text-sm mt-4 block">
                — Eudo David Hernández, Socio Fundador
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
