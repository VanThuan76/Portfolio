import { motion } from "framer-motion";
import Image from "next/image";

type AnimatedIconProps = {
  icon: string;
  alt: string;
  isActive: boolean;
};

const AnimatedIcon = ({ icon, alt, isActive }: AnimatedIconProps) => {
  return (
    <motion.div
      className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-xl"
      initial={{ scale: 1, opacity: 1 }}
      animate={isActive ? { scale: 2 } : { scale: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.05 }}
    >
      <Image
        width={200}
        height={200}
        src={icon}
        alt={alt}
        className="object-contain size-14"
      />
    </motion.div>
  );
};

export default AnimatedIcon;
