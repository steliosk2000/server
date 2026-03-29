import { useState } from 'react';
import { Navigate, Outlet, Link, useNavigate } from 'react-router-dom';
import styles from './Admin.module.css';

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link to="/admin/dashboard" onClick={closeMenu} style={{ color: 'white', textDecoration: 'none' }}>
            <h3>CMS Panel</h3>
          </Link>
          <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`${styles.sidebarContent} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <nav className={styles.adminNav}>
            <Link to="/admin/dashboard" onClick={closeMenu}>Dashboard</Link>
            <Link to="/admin/services" onClick={closeMenu}>Services</Link>
            <Link to="/admin/customers" onClick={closeMenu}>Customers</Link>
            <Link to="/admin/submissions" onClick={closeMenu}>Submissions</Link>
            <a href="/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} style={{ marginTop: 'auto', borderTop: '1px solid #1e293b' }}>
              View Live Site ↗
            </a>
          </nav>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        </div>
      </aside>
      <main className={styles.adminContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

