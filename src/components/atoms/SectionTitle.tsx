import { motion } from 'framer-motion'

interface SectionTitleProps {
    eyebrow: string
    title: React.ReactNode
    subtitle?: string
    centered?: boolean
    light?: boolean
}

const SectionTitle = ({ eyebrow, title, subtitle, centered = true, light = false }: SectionTitleProps) => {
    return (
        <div className={`max-w-3xl mx-auto mb-16 lg:mb-20 ${centered ? 'text-center' : 'text-left'}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : ''}`}
            >
                <div className="h-[1px] w-12 bg-accent" />
                <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
                    {eyebrow}
                </span>
                <div className="h-[1px] w-12 bg-accent" />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6 ${light ? 'text-white' : 'text-primary-deeper'}`}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`text-base sm:text-lg leading-[1.8] max-w-xl mx-auto font-light ${light ? 'text-white/80' : 'text-slate/80'}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}

export default SectionTitle
