interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
    as?: 'input' | 'textarea' | 'select'
    children?: React.ReactNode
    rows?: number
}

const Input = ({ as = 'input', className = '', ...props }: InputProps) => {
    const baseStyles = "w-full px-4 py-3 bg-cream/50 border border-warm-gray text-slate text-sm transition-colors"

    if (as === 'textarea') {
        return (
            <textarea
                className={`${baseStyles} resize-none ${className}`}
                {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
        )
    }

    if (as === 'select') {
        return (
            <select
                className={`${baseStyles} cursor-pointer ${className}`}
                {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
            >
                {props.children}
            </select>
        )
    }

    return (
        <input
            className={`${baseStyles} ${className}`}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
    )
}

export default Input
