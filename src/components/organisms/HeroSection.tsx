import { motion } from 'framer-motion'
import Button from '../atoms/Button'

const HeroSection = () => {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center pt-32 pb-24 lg:pt-40 lg:pb-32 hero-gradient noise overflow-hidden"
        >
            {/* Abstract Background Shapes - Refined */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-light/10 blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[20vw] h-[20vw] rounded-full bg-white/5 blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">

                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-accent" />
                    <span className="text-accent text-sm md:text-base uppercase tracking-[0.3em] font-medium">
                        Excelencia Legal
                    </span>
                    <div className="h-[1px] w-12 bg-accent" />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1] max-w-5xl"
                >
                    Soluciones jurídicas con <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent italic font-medium">visión estratégica</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light"
                >
                    Asesoría legal integral diseñada para proteger tu patrimonio y asegurar tu futuro.
                    Expertos en derecho corporativo, migratorio y civil.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <Button
                        href="#contacto"
                        variant="primary"
                        icon={
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        }
                    >
                        Agendar Consulta
                    </Button>

                    <Button href="#servicios" variant="outline">
                        Explorar Servicios
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] animate-pulse">Deslizar</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
            </motion.div>
        </section>
    )
}

export default HeroSection
