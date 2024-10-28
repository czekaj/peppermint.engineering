"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedSpark = () => (
  <motion.span
    // Changed initial and animate properties for a sparkle effect
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.5,
      ease: "easeOut",
    }}
    className="inline-block leading-loose"
  >
    <motion.span
      // Changed to a pulsing animation
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.9, 1, 0.8],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      <Image
        src="/sparks.svg"
        alt="Sparkle"
        width={20}
        height={20}
        className="inline-block align-text-top"
        style={{ filter: "invert(1)" }}
      />
    </motion.span>
  </motion.span>
);

export default AnimatedSpark;
