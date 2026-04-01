import { motion } from 'framer-motion';
import Services from '../components/Services/Services';
import SEOHead from '../seo/SEOHead';
import BreadcrumbSchema from '../seo/BreadcrumbSchema';

const BREADCRUMBS = [
  { name: 'Αρχική', url: 'https://coderastudio.gr/' },
  { name: 'Υπηρεσίες', url: 'https://coderastudio.gr/services' },
];

const ServicesPage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--background)' }}
    >
      <SEOHead
        title="Υπηρεσίες Web Design — E-shop, Ξενοδοχεία & QR Μενού Κρήτη"
        description="Κατασκευή e-shop, ιστοσελίδων ξενοδοχείων και ψηφιακού QR μενού στην Κρήτη. Επαγγελματικές λύσεις για επιχειρήσεις στα Χανιά, Ηράκλειο και σε όλη την Κρήτη."
        keywords="κατασκευή eshop Κρήτη, ιστοσελίδα ξενοδοχείου Κρήτη, QR menu εστιατόριο Κρήτη, web design Χανιά, κατασκευή ιστοσελίδων Ηράκλειο"
        canonical="https://coderastudio.gr/services"
      />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <Services />
    </motion.main>
  );
};

export default ServicesPage;


