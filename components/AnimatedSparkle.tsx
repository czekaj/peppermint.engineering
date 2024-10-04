"use client";

import { motion } from "framer-motion";

const AnimatedSparkle = () => (
  <motion.span
    // Changed initial and animate properties for a sparkle effect
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
    }}
    className="inline-block leading-loose"
  >
    <motion.span
      // Changed to a pulsing animation
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      ✨
    </motion.span>
  </motion.span>
);

export default AnimatedSparkle;
