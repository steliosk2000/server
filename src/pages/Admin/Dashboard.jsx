import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../components/Admin/Admin.module.css';
import { API_BASE_URL } from '../../utils/api';

const Dashboard = () => {
  const [stats, setStats] = useState({ subs: 0, services: 0, customers: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [services, customers, subs] = await Promise.all([
          fetch(API_BASE_URL + '/api/services').then(r => r.json()),
          fetch(API_BASE_URL + '/api/customers').then(r => r.json()),
          fetch(API_BASE_URL + '/api/submissions', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
          }).then(r => r.json()),
        ]);

        setStats({
          subs: subs.length || 0,
          services: services.length || 0,
          customers: customers.length || 0
        });
      } catch (error) {
        console.error('Error fetching dashboard stats', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>Dashboard Overview</h1>
      </div>
      
      <div className={styles.tableContainer}>
        <h3>Welcome to your CMS Admin Panel</h3>
        <p>Use the sidebar to navigate through your services, customers, and view new lead submissions.</p>
        
        <div className={styles.dashboardStats}>
          <Link to="/admin/services" style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', flex: 1, textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <h2>{stats.services}</h2>
            <p>Active Services</p>
          </Link>
          <Link to="/admin/customers" style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', flex: 1, textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <h2>{stats.customers}</h2>
            <p>Customers in Portfolio</p>
          </Link>
          <Link to="/admin/submissions" style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', flex: 1, textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <h2>{stats.subs}</h2>
            <p>Quote Requests</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


