import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const items = [
    {
      number: '01',
      title: 'Compromiso Total',
      text: 'Cada caso recibe atención dedicada de un equipo especialista que entiende la urgencia de tus necesidades.',
    },
    {
      number: '02',
      title: 'Resultados Medibles',
      text: 'Estrategias legales basadas en evidencia y enfocadas en obtener el mejor resultado posible.',
    },
    {
      number: '03',
      title: 'Confidencialidad Absoluta',
      text: 'Tu información está protegida bajo los más altos estándares de seguridad y discreción profesional.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="line-accent" />
          <span className="text-accent text-xs uppercase tracking-[0.3em]">
            Nuestro Diferencial
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`group relative py-10 md:py-0 md:px-10 ${
                index < items.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-warm-gray'
                  : ''
              } ${index === 0 ? 'md:pl-0' : ''} ${index === items.length - 1 ? 'md:pr-0' : ''}`}
            >
              <span className="text-6xl font-['Cormorant_Garamond'] font-bold text-warm-gray group-hover:text-accent/30 transition-colors duration-500">
                {item.number}
              </span>
              <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold text-primary-deeper mt-6 mb-4">
                {item.title}
              </h3>
              <p className="text-slate/60 leading-[1.8] text-sm sm:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
