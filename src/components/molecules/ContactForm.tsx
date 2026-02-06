import { useState } from 'react'
import { motion } from 'framer-motion'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <div className="bg-white p-8 sm:p-10 lg:p-12 border border-warm-gray shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
            {/* Decorative top strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

            <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold text-center text-primary-deeper mb-8">
                Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Input type="text" required placeholder="Nombre" />
                    </div>
                    <div>
                        <Input type="text" required placeholder="Apellido" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Input type="email" required placeholder="Email" />
                    </div>
                    <div>
                        <Input type="tel" required placeholder="Teléfono" />
                    </div>
                </div>

                <div>
                    <Input as="select" required defaultValue="">
                        <option value="" disabled>Servicio de interés</option>
                        <option value="migracion">Innova Migración</option>
                        <option value="personas">Innova Personas</option>
                        <option value="corporativo">Innova Corporativo</option>
                        <option value="financiero">Innova Financiero</option>
                        <option value="otro">Otro</option>
                    </Input>
                </div>

                <div>
                    <Input as="textarea" required rows={4} placeholder="Cuéntanos brevemente sobre tu caso..." />
                </div>

                <div className="pt-4 flex justify-center">
                    <Button type="submit" variant="secondary" className="w-full sm:w-auto px-12 py-4 shadow-lg hover:shadow-xl">
                        Enviar Solicitud
                    </Button>
                </div>

                {submitted && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-accent/10 border border-accent/20 text-center"
                    >
                        <p className="text-primary-deeper font-semibold text-sm">¡Mensaje enviado correctamente!</p>
                        <p className="text-slate/70 text-xs mt-1">Nos pondremos en contacto contigo a la brevedad.</p>
                    </motion.div>
                )}
            </form>
        </div>
    )
}

export default ContactForm
