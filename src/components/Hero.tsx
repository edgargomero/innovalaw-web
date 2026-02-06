import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-24 lg:pb-32 hero-gradient noise overflow-hidden"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl w-full flex flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-6 justify-center"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
              Estudio Jurídico de Excelencia
            </span>
            <div className="h-[1px] w-12 bg-accent" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.1] font-bold text-white mb-10 tracking-tight"
          >
            Protegemos{' '}
            <span className="text-accent-light relative inline-block">
              tus derechos
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
            <br />
            con excelencia
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg lg:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed"
          >
            Asesoramiento jurídico integral en migración, derecho corporativo,
            financiero y personas. Más de una década de compromiso con tu tranquilidad.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          >
            <motion.a
              href="#contacto"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary-deeper text-sm font-bold tracking-widest uppercase hover:bg-accent-light transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar Consulta
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="#servicios"
              className="inline-flex items-center gap-3 px-10 py-5 border border-white/20 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/5 hover:border-accent hover:text-accent transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
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
          className="mt-20 sm:mt-28 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-10 sm:gap-16 lg:gap-24 w-full max-w-5xl"
        >
          {[
            { number: '10+', label: 'Años de experiencia' },
            { number: '24/7', label: 'Atención personalizada' },
            { number: '100%', label: 'Confidencialidad' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl lg:text-5xl font-['Cormorant_Garamond'] font-bold text-white">
                {stat.number}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60 text-center">
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
