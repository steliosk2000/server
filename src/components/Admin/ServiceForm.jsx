import { useState, useEffect } from 'react';
import styles from './Admin.module.css';

const ServiceForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    features: '',
    pricing: '',
    icon: 'FaLaptopCode'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        features: Array.isArray(initialData.features) ? initialData.features.join('\n') : initialData.features || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      pricing: Number(formData.pricing),
      features: formData.features.split('\n').filter(f => f.trim() !== '')
    };
    onSave(payload);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{initialData ? 'Edit Service' : 'Add New Service'}</h2>
        <form onSubmit={handleSubmit} className={styles.adminForm}>
          
          <div className={styles.formGroup}>
            <label>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Icon (React Icon Name)</label>
            <select name="icon" value={formData.icon} onChange={handleChange}>
              <option value="FaLaptopCode">FaLaptopCode</option>
              <option value="FaShoppingCart">FaShoppingCart</option>
              <option value="FaQrcode">FaQrcode</option>
              <option value="FaPenNib">FaPenNib</option>
              <option value="FaHotel">FaHotel</option>
              <option value="FaChartLine">FaChartLine</option>
              <option value="FaPaintBrush">FaPaintBrush</option>
              <option value="FaSearch">FaSearch</option>
              <option value="FaMobileAlt">FaMobileAlt</option>
              <option value="FaCameraRetro">FaCameraRetro</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Short Description</label>
            <input name="shortDescription" value={formData.shortDescription} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Full Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows={4} />
          </div>

          <div className={styles.formGroup}>
            <label>Features (One per line)</label>
            <textarea name="features" value={formData.features} onChange={handleChange} rows={5} placeholder="Custom Design&#10;Mobile First..." />
          </div>

          <div className={styles.formGroup}>
            <label>Pricing Target (€)</label>
            <input name="pricing" type="number" value={formData.pricing} onChange={handleChange} required placeholder="e.g. 1200" />
          </div>

          <div className={styles.modalActions}>
            <button type="button" onClick={onCancel} className={styles.cancelBtn}>Cancel</button>
            <button type="submit" className={styles.saveBtn}>Save Service</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;

