import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] // Custom snappy spring-like cubic bezier
    }
  },
  out: {
    opacity: 0,
    y: -40,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

