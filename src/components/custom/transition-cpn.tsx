import { Variants, motion } from "framer-motion";
interface Props {
    children: React.ReactNode
    variants?: Variants
    className?: string
}
const defaultVariants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
}
const TransitionCpn = ({ children, variants = defaultVariants, className }: Props) => {
    return (
        <motion.div variants={variants} initial="hidden"
            animate="enter"
            transition={{ type: "linear" }} className={className}>
            {children}
        </motion.div>);
}

export default TransitionCpn;