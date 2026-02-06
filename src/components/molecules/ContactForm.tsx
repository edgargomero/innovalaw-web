import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        // TODO: Integrar con servicio real (Formspree, Resend, EmailJS, etc.)
        // Ejemplo con Formspree:
        // fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: formData })
        console.log('Form data:', Object.fromEntries(formData))

        setSubmitted(true)
        e.currentTarget.reset()
        timerRef.current = setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <div className="bg-white p-8 sm:p-10 lg:p-12 border border-warm-gray shadow-2xl relative overflow-hidden rounded-sm">
            {/* Decorative top strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

            <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold text-center text-primary-deeper mb-8">
                Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="nombre" className="sr-only">Nombre</label>
                        <Input type="text" id="nombre" name="nombre" required placeholder="Nombre" />
                    </div>
                    <div>
                        <label htmlFor="apellido" className="sr-only">Apellido</label>
                        <Input type="text" id="apellido" name="apellido" required placeholder="Apellido" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <Input type="email" id="email" name="email" required placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="telefono" className="sr-only">Teléfono</label>
                        <Input type="tel" id="telefono" name="telefono" required placeholder="Teléfono" />
                    </div>
                </div>

                <div>
                    <label htmlFor="servicio" className="sr-only">Servicio de interés</label>
                    <Input as="select" id="servicio" name="servicio" required defaultValue="" aria-label="Servicio de interés">
                        <option value="" disabled>Servicio de interés</option>
                        <option value="migracion">Innova Migración</option>
                        <option value="personas">Innova Personas</option>
                        <option value="corporativo">Innova Corporativo</option>
                        <option value="financiero">Innova Financiero</option>
                        <option value="otro">Otro</option>
                    </Input>
                </div>

                <div>
                    <label htmlFor="mensaje" className="sr-only">Mensaje</label>
                    <Input as="textarea" id="mensaje" name="mensaje" required rows={4} placeholder="Cuéntanos brevemente sobre tu caso..." />
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
