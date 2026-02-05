import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const CTA = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden gradient-primary">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Necesitas Asesoría Legal?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contáctanos hoy y recibe una consulta personalizada con nuestros
            especialistas. Estamos aquí para ayudarte.
          </p>
          <motion.a
            href="#contacto"
            className="inline-block px-10 py-5 bg-white text-[#0170B9] rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Agenda tu Consulta
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
