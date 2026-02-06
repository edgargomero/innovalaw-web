import { motion } from 'framer-motion'

interface FeatureItemProps {
    label: string
    index: number
    isInView: boolean
}

const FeatureItem = ({ label, index, isInView }: FeatureItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
            className="bg-navy-light/50 border border-white/10 py-4 px-4 rounded-sm flex items-center justify-center gap-2"
        >
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-white/90 text-sm font-medium tracking-wide">{label}</span>
        </motion.div>
    )
}

export default FeatureItem
