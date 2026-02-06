import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'text'
    href?: string
    type?: 'button' | 'submit' | 'reset'
    className?: string
    onClick?: () => void
    icon?: ReactNode
}

const Button = ({ children, variant = 'primary', href, type = 'button', className = '', onClick, icon }: ButtonProps) => {
    const baseStyles = "group inline-flex items-center justify-center gap-3 font-bold tracking-wider uppercase transition-all duration-300"

    const variants = {
        primary: "px-8 py-4 bg-accent text-primary-deeper text-sm hover:bg-accent-light shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]",
        secondary: "px-8 py-4 bg-primary-deeper text-white text-sm hover:bg-primary-dark shadow-lg hover:shadow-xl",
        outline: "px-8 py-4 bg-transparent border border-white/30 text-white text-base hover:bg-white/10 backdrop-blur-sm",
        text: "text-accent text-sm tracking-wide hover:text-accent-light",
    }

    const content = (
        <>
            {children}
            {icon && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {icon}
                </span>
            )}
        </>
    )

    if (href) {
        return (
            <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
                {content}
            </a>
        )
    }

    return (
        <motion.button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    )
}

export default Button
