import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: 'Innova Migración',
      description:
        'Orientado a migrantes con herramientas para solucionar problemas legales relacionados con visas, residencia permanente y reunificación familiar.',
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      title: 'Innova Personas',
      description:
        'Brindamos acompañamiento en cualquier circunstancia con soluciones personalizadas para tus necesidades legales individuales.',
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      title: 'Innova Corporativo',
      description:
        'Promovemos tu inclusión al mundo empresarial con asesoría en constitución de empresas, registro de marcas y modelos de cumplimiento.',
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: 'Innova Financiero',
      description:
        'Desarrollamos planes que permiten afianzar tus metas y proyectos financieros, con evaluación de créditos y asesoría de perfil.',
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
      title: 'Recurso de Amparo',
      description:
        'Acción judicial para restaurar derechos fundamentales en casos de visas denegadas, órdenes de expulsión y violaciones de derechos.',
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      title: 'Recurso de Protección',
      description:
        'Protección de derechos constitucionales incluyendo libertad económica, de trabajo, religiosa e igualdad ante la ley.',
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Herramientas que permiten abarcar tus necesidades legales con
            especialistas calificados en cada área
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, color: '#0170B9' }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mb-6 text-[#0170B9]"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
