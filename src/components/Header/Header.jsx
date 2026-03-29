import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} animate-fade-in`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={handleLogoClick}>
          <span className={styles.highlight}>Codera</span>Studio
        </Link>
        
        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => { handleLogoClick(event); closeMenu(); }}>Αρχική</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Υπηρεσίες</Link></li>
            <li><Link to="/customers" onClick={closeMenu}>Πελατολόγιο</Link></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>Σχετικά</a></li>
            <li><a href="#contact" className={styles.cta} onClick={(e) => handleScroll(e, 'contact')}>Επικοινωνία</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

