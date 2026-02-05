import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      title: 'Confianza',
      description:
        'Construimos relaciones duraderas basadas en la transparencia y el compromiso con nuestros clientes.',
    },
    {
      title: 'Excelencia',
      description:
        'Buscamos la excelencia en cada caso, con especialistas calificados y actualizados en la legislación vigente.',
    },
    {
      title: 'Seguridad',
      description:
        'Garantizamos 100% de confidencialidad y protección de tus datos e información legal.',
    },
  ]

  const features = [
    'Atención personalizada 24/7',
    'Especialistas en múltiples áreas del derecho',
    'Más de 10 años de experiencia',
    'Asesoría presencial y remota',
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="gradient-text">Nosotros</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Somos un estudio jurídico diseñado para brindarte tranquilidad,
              asesoramiento y apoyo. Buscamos herramientas que permitan abarcar
              tus necesidades con especialistas que enfatizan ética, moral y buen
              gobierno corporativo.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0170B9] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contacto"
              className="inline-block px-8 py-4 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Conoce Más
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 gradient-primary text-white"
          >
            <h3 className="text-3xl font-bold mb-8">Nuestros Valores</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border-l-4 border-white pl-4"
                >
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-white/90">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
