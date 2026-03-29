import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import CustomersPage from './pages/CustomersPage';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

import Login from './pages/Admin/Login';
import AdminLayout from './components/Admin/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import ServicesAdmin from './pages/Admin/ServicesAdmin';
import CustomersAdmin from './pages/Admin/CustomersAdmin';
import SubmissionsAdmin from './pages/Admin/SubmissionsAdmin';

import styles from './App.module.css';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={styles.appContainer}>
      <ScrollToTop />
      
      {!isAdminRoute && <Header />}
      
      {!isAdminRoute ? (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/customers" element={<PageTransition><CustomersPage /></PageTransition>} />
            <Route path="/services/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      ) : (
        <Routes location={location} key="admin">
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="services" element={<ServicesAdmin />} />
            <Route path="customers" element={<CustomersAdmin />} />
            <Route path="submissions" element={<SubmissionsAdmin />} />
          </Route>
        </Routes>
      )}

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;

