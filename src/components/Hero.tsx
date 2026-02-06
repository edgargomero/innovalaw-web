import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end pb-24 lg:pb-32 hero-gradient noise overflow-hidden"
    >
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] border border-white rounded-full"
        />
        {/* Second circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] border border-white rounded-full"
        />
        {/* Diagonal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-[45%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent origin-left"
        />
        {/* Vertical accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent origin-top hidden lg:block"
        />
        {/* Gold dot grid */}
        <div className="absolute bottom-20 right-12 hidden lg:grid grid-cols-5 gap-3 opacity-20">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.03 }}
              className="w-1 h-1 bg-accent rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
              Estudio Jurídico de Excelencia
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.15] font-bold text-white mb-10"
          >
            Protegemos{' '}
            <span className="text-accent-light">tus derechos</span>
            <br />
            con excelencia
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg lg:text-xl text-white/80 max-w-xl mb-16 leading-[1.8]"
          >
            Asesoramiento jurídico integral en migración, derecho corporativo,
            financiero y personas. Más de una década de compromiso con tu tranquilidad.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contacto"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary-deeper text-sm font-semibold tracking-wide uppercase hover:bg-accent-light transition-all duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar Consulta
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="#servicios"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white/90 text-sm tracking-wide uppercase hover:border-accent hover:text-accent transition-all duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              Explorar Servicios
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar with stats teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 sm:mt-24 pt-8 border-t border-white/10 flex flex-wrap gap-8 sm:gap-12 lg:gap-20"
        >
          {[
            { number: '10+', label: 'Años de experiencia' },
            { number: '24/7', label: 'Atención personalizada' },
            { number: '100%', label: 'Confidencialidad' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="text-3xl lg:text-4xl font-['Cormorant_Garamond'] font-bold text-white">
                {stat.number}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-white/70">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: [0.45, 0, 0.55, 1] }}
          className="w-[1px] h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default Hero
