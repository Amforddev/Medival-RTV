import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'unfold';
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.85,
  direction = 'unfold' 
}: ScrollRevealProps) {
  // Let's design the specific transition variations
  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === 'up' && { y: 40 }),
      ...(direction === 'down' && { y: -40 }),
      ...(direction === 'unfold' && { 
        rotateX: -25, 
        transformPerspective: 1200, 
        originY: 0,
        y: 20
      })
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom elegant cubic-bezier for smooth ledger unfold
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
