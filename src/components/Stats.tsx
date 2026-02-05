import { useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { duration: 2000 })
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  )

  if (isInView && spring.get() === 0) {
    spring.set(value)
  }

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

const Stats = () => {
  const stats = [
    { value: 10, suffix: '+', label: 'Años de Experiencia' },
    { value: 100, suffix: '%', label: 'Confidencialidad' },
    { value: 24, suffix: '/7', label: 'Atención Personalizada' },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold gradient-text mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Stats
