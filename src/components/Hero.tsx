import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDuration = Math.random() * 3 + 2 + 's'
      particle.style.opacity = String(Math.random() * 0.5 + 0.2)
      document.querySelector('.particles')?.appendChild(particle)

      setTimeout(() => particle.remove(), 5000)
    }

    const interval = setInterval(createParticle, 300)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center gradient-primary overflow-hidden"
    >
      <div className="particles absolute inset-0 pointer-events-none" />

      <style>{`
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          bottom: -10px;
          animation: rise linear forwards;
        }

        @keyframes rise {
          to {
            bottom: 110%;
            transform: translateX(${Math.random() * 100 - 50}px);
          }
        }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          InnovaLaw
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-white/90 mb-4"
        >
          Abogados en Santiago a tu alcance
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Estudio jurídico diseñado para brindarte tranquilidad, asesoramiento y
          apoyo en tus necesidades legales
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contacto"
            className="px-8 py-4 bg-white text-[#0170B9] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Contáctanos
          </motion.a>

          <motion.a
            href="#servicios"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0170B9] transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Nuestros Servicios
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 mx-auto text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
