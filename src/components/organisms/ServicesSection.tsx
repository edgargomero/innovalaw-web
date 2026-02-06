import { useRef } from 'react'
import SectionTitle from '../atoms/SectionTitle'
import ServiceCard, { ServiceProps } from '../molecules/ServiceCard'

const services: ServiceProps[] = [
    {
        id: '01',
        title: 'Innova Migración',
        subtitle: 'Movilidad Global',
        description: 'Gestión integral de visas y residencia definitiva en Chile. Resolvemos situaciones migratorias complejas con agilidad.',
        features: ['Visas de Trabajo', 'Residencia Definitiva', 'Nacionalización', 'Reconsideraciones'],
    },
    {
        id: '02',
        title: 'Innova Personas',
        subtitle: 'Derecho Civil y Familiar',
        description: 'Protección de tus derechos e intereses personales y familiares. Asesoría sensible y efectiva en momentos clave.',
        features: ['Divorcios', 'Herencias y Testamentos', 'Indemnizaciones', 'Compraventa de Propiedades'],
    },
    {
        id: '03',
        title: 'Innova Corporativo',
        subtitle: 'Soluciones para Empresas',
        description: 'Soporte legal estratégico para el crecimiento de tu negocio. Desde la constitución hasta la gestión contractual.',
        features: ['Constitución de Sociedades', 'Marcas y Patentes', 'Contratos Laborales', 'Compliance'],
    },
    {
        id: '04',
        title: 'Innova Financiero',
        subtitle: 'Defensa de Deudores',
        description: 'Estrategias legales para la reorganización y protección de tu patrimonio frente a deudas y embargos.',
        features: ['Ley de Quiebras', 'Repactación de Deudas', 'Defensa ante Embargos', 'Protección Patrimonial'],
    },
]

const ServicesSection = () => {
    // Note: Re-using the logic, but ensuring naming is consistent.
    const ref = useRef(null)
    // const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section id="servicios" className="py-24 lg:py-32 bg-faf8f5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    eyebrow="Nuestras Áreas de Práctica"
                    title={<>Experiencia legal <span className="text-accent italic font-medium">especializada</span></>}
                    subtitle="Soluciones adaptadas a cada etapa de tu vida personal y empresarial."
                />

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
