import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../atoms/SectionTitle'
import ContactForm from '../molecules/ContactForm'

const ContactSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="contacto" className="py-24 lg:py-32 bg-faf8f5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <SectionTitle
                    eyebrow="Hablemos"
                    title={<>Tu tranquilidad comienza <span className="text-accent italic">hoy</span></>}
                    subtitle="Estamos listos para escuchar tu caso y brindarte la mejor estrategia legal."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 space-y-12 text-center"
                    >
                        <div className="space-y-8 mb-12 flex flex-col items-center">
                            {[
                                {
                                    id: 1,
                                    title: 'Ubicación',
                                    line1: 'Av. Pedro de Valdivia 291',
                                    line2: 'Oficina 1306, Providencia, Santiago',
                                },
                                {
                                    id: 2,
                                    title: 'Contacto Directo',
                                    line1: '+56 9 1234 5678',
                                    line2: 'contacto@innovalaw.cl',
                                },
                                {
                                    id: 3,
                                    title: 'Horario',
                                    line1: 'Lunes a Viernes',
                                    line2: '09:00 - 18:00 hrs',
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex flex-col items-center text-center gap-2"
                                >
                                    <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-2">
                                        {item.title}
                                    </span>
                                    <p className="text-slate/80 text-base leading-relaxed">
                                        {item.line1}
                                    </p>
                                    {item.line2 && (
                                        <p className="text-slate/80 text-base leading-relaxed">
                                            {item.line2}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center flex flex-col items-center">
                            <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-6">
                                Síguenos
                            </span>
                            <div className="flex gap-4">
                                {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-12 h-12 border border-warm-gray rounded-full flex items-center justify-center text-slate hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                                    >
                                        <span className="sr-only">{social}</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column - Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
