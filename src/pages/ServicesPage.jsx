import { motion } from 'framer-motion';
import Services from '../components/Services/Services';

const ServicesPage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ paddingTop: '80px', minHeight: '100vh', background: '#f8fafc' }}
    >
      <Services />
    </motion.main>
  );
};

export default ServicesPage;

