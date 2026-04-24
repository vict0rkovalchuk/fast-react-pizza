import { AnimatePresence, motion } from "motion/react";
import usePreviousDirection from "../hooks/usePreviousDirection";

export default function AnimatedCounter({
  value,
  className = "",
  distance = 5,
  duration = 0.15,
}) {
  const direction = usePreviousDirection(value);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        className={className}
        initial={{
          y: direction === "up" ? -distance : distance,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: direction === "up" ? distance : -distance,
          opacity: 0,
        }}
        transition={{ duration }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}
