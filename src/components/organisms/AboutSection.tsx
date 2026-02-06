import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../atoms/SectionTitle'
import FeatureItem from '../molecules/FeatureItem'
import Button from '../atoms/Button'

const AboutSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const values = [
        {
            title: 'Excelencia',
            text: 'No nos conformamos con lo estándar. Buscamos la perfección técnica y estratégica en cada caso.',
            icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
            title: 'Innovación',
            text: 'Utilizamos tecnología y nuevos enfoques legales para ofrecer soluciones más rápidas y eficientes.',
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        },
        {
            title: 'Transparencia',
            text: 'Hablamos tu idioma. Sin tecnicismos innecesarios y con total claridad sobre costos y expectativas.',
            icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.279-2.006C7.541 17.58 7.152 17.279 6.78 17H6l-4 3 2.94-1.47a.75.75 0 00.38-.63l-.001-.01C4.856 16.597 4.5 15.342 4.5 14c0-4.418 3.582-8 8-8s8 3.582 8 8z',
        },
    ]

    const features = [
        'Atención 24/7',
        'Experiencia Comprobada',
        'Cobertura Nacional',
        'Asesoría Remota',
    ]

    return (
        <section id="nosotros" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-deeper rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <SectionTitle
                    eyebrow="Nuestra Identidad"
                    title={<>Más que abogados, <span className="text-accent italic">aliados estratégicos</span></>}
                    centered
                    light // Custom prop I added to Atom
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
                    {/* Left column - Features & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-10 lg:pt-8 text-center bg-white/5 p-8 rounded-sm border border-white/5"
                    >
                        <h3 className="text-xl font-['Cormorant_Garamond'] text-accent font-semibold mb-4 text-center">
                            ¿Por qué elegirnos?
                        </h3>

                        {/* Features list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {features.map((feature, index) => (
                                <FeatureItem key={feature} label={feature} index={index} isInView={isInView} />
                            ))}
                        </div>

                        <p className="text-white/70 leading-relaxed text-sm max-w-lg mx-auto mb-6">
                            Cada paso que damos está guiado por principios inquebrantables.
                            No solo somos abogados, somos aliados estratégicos en tu crecimiento.
                        </p>

                        <div className="flex justify-center">
                            <Button href="#contacto" variant="primary">
                                Conocer Equipo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right column - Values Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.12 }}
                                className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent/30 transition-all duration-500 rounded-sm card-hover"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-accent mb-2 group-hover:bg-accent group-hover:text-primary-deeper transition-colors duration-300">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-['Cormorant_Garamond'] font-bold text-white mb-2 tracking-wide group-hover:text-accent transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <p className="text-white/70 leading-relaxed text-sm">
                                            {value.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Quote block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="p-8 border border-accent/20 bg-accent/5 rounded-sm text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent" />
                            <p className="text-white/80 italic text-lg font-['Cormorant_Garamond'] leading-[1.8] mb-4">
                                "Nuestra misión es brindarte tranquilidad, asesoramiento y apoyo
                                en cada paso del camino."
                            </p>
                            <span className="text-accent text-xs uppercase tracking-widest font-bold">
                                — Eudo David Hernández, Director
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
