import { motion } from 'framer-motion';
import styles from './Customers.module.css';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../utils/api';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 }
  }
};

const Customers = () => {
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL + '/api/customers')
      .then(res => res.json())
      .then(data => setCustomersData(Array.isArray(data) ? data : []));
  }, []);

  return (
    <section className={styles.customersSection} id="portfolio">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>Portfolio</div>
          <h2 className={styles.title}>Οι Πελάτες Μας</h2>
          <p className={styles.subtitle}>
            Δείτε μερικά από τα πρόσφατα project μας και πώς βοηθήσαμε επιχειρήσεις
            να αναβαθμίσουν την ψηφιακή τους παρουσία.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          style={{ perspective: 1000 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {customersData.map((customer) => (
            <motion.div variants={cardVariants} key={customer.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={customer.image?.startsWith('/uploads/') ? `${API_BASE_URL}${customer.image}` : customer.image} alt={customer.name} className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.serviceTag}>{customer.service}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{customer.category}</span>
                <h3 className={styles.name}>{customer.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;


