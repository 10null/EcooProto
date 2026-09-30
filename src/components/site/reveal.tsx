import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_ENGINEERED: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

/** Fades and lifts content the first time it enters the viewport. */
export const Reveal = ({
  children,
  className,
  delay = 0,
  distance = 18,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: EASE_ENGINEERED }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
