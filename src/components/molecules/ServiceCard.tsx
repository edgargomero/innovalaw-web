import { motion } from 'framer-motion'

export interface ServiceProps {
    id: string
    title: string
    subtitle: string
    description: string
    features: string[]
}

interface ServiceCardProps {
    service: ServiceProps
    index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border border-warm-gray p-10 lg:p-12 hover:border-accent card-hover overflow-hidden transition-colors duration-500 h-full flex flex-col shadow-lg"
        >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center h-full">
                {/* ID */}
                <span className="text-6xl font-['Cormorant_Garamond'] text-warm-gray font-bold opacity-50 mb-6 group-hover:text-accent/20 transition-colors duration-500">
                    {service.id}
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-['Cormorant_Garamond'] font-bold text-primary-deeper mb-3">
                    {service.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-accent mb-6 block">
                    {service.subtitle}
                </span>

                <div className="w-12 h-[1px] bg-warm-gray group-hover:bg-accent transition-colors duration-500 mb-6" />

                {/* Description */}
                <p className="text-slate/80 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 w-full">
                    {service.features.map((feature) => (
                        <li key={feature} className="flex items-center justify-center gap-2 text-sm text-slate/70">
                            <span className="w-1 h-1 bg-accent rounded-full" />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Arrow */}
                <div className="mt-auto">
                    <div className="w-10 h-10 border border-warm-gray rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                        <svg
                            className="w-4 h-4 text-slate/60 group-hover:text-white transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceCard
