import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Innova Migración',
    subtitle: 'Visas y Residencia',
    description:
      'Soluciones legales para migrantes: visas, residencia permanente, reunificación familiar, recursos de amparo y protección constitucional.',
    features: ['Recurso de Amparo', 'Visas y Permisos', 'Residencia Permanente', 'Reunificación Familiar'],
  },
  {
    id: '02',
    title: 'Innova Personas',
    subtitle: 'Derecho Individual',
    description:
      'Acompañamiento jurídico personalizado en cada circunstancia, con estrategias adaptadas a tus necesidades legales específicas.',
    features: ['Derecho Civil', 'Derecho Laboral', 'Defensa Penal', 'Mediación'],
  },
  {
    id: '03',
    title: 'Innova Corporativo',
    subtitle: 'Empresas y Negocios',
    description:
      'Asesoría integral para tu inclusión al mundo empresarial: constitución, registro de marcas, compliance y gobierno corporativo.',
    features: ['Constitución de Empresas', 'Registro de Marcas', 'Modelos de Cumplimiento', 'Gobierno Corporativo'],
  },
  {
    id: '04',
    title: 'Innova Financiero',
    subtitle: 'Gestión y Planificación',
    description:
      'Planes estratégicos para afianzar tus metas financieras: evaluación crediticia, asesoría de perfil y eliminación de deudas.',
    features: ['Evaluación Crediticia', 'Asesoría de Arriendo', 'Eliminación de Deudas', 'Planificación Financiera'],
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative noise">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="line-accent" />
              <span className="text-accent text-xs uppercase tracking-[0.3em]">
                Áreas de Práctica
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-deeper leading-[1.15]">
              Servicios jurídicos{' '}
              <span className="italic font-medium text-accent">especializados</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-slate/60 text-base sm:text-lg leading-[1.8] max-w-md">
              Especialistas calificados en cada área del derecho, enfatizando ética,
              moral y buen gobierno corporativo en cada solución.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group border-t border-warm-gray last:border-b"
            >
              <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-sm text-accent font-medium">{service.id}</span>
                </div>

                {/* Title */}
                <div className="md:col-span-11 lg:col-span-3">
                  <h3 className="text-3xl lg:text-4xl font-['Cormorant_Garamond'] font-bold text-primary-deeper group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent mt-2 block">
                    {service.subtitle}
                  </span>
                </div>

                {/* Description */}
                <div className="md:col-span-7 lg:col-span-4">
                  <p className="text-slate/60 leading-[1.8] text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="md:col-span-4 lg:col-span-3">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate/50 group-hover:text-slate/70 transition-colors">
                        <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex md:justify-end">
                  <motion.div
                    className="w-10 h-10 border border-warm-gray rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="w-4 h-4 text-slate/30 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
