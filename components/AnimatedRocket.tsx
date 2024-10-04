"use client";

import { motion } from "framer-motion";

const AnimatedRocket = () => (
  <motion.span
    initial={{ x: -800, y: 800, rotate: 0, scale: 0.5 }}
    animate={{
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }}
    transition={{
      duration: 2.5,
      ease: "easeOut",
    }}
    className="inline-block leading-loose"
  >
    <motion.span
      animate={{ y: [-2, 2, -2] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      🚀
    </motion.span>
  </motion.span>
);

export default AnimatedRocket;
