import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, UserPlus, Info, Mail } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/register', label: 'Register', icon: UserPlus },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const styles = {
    nav: {
      position: 'absolute',
      top: 10,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'transparent', // fully transparent background
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '10px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
    },
    logoText: {
      fontSize: '26px',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, #3b82f6, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    logoSubtext: {
      fontSize: '12px',
      color: '#94a3b8',
      marginTop: '-4px',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 14px',
      color: '#cbd5e1',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
    },
    navLinkActive: {
      color: '#fff',
      textShadow: '0 0 12px rgba(59,130,246,0.7)',
    },
    navLinkHover: {
      color: '#fff',
      textShadow: '0 0 10px rgba(139,92,246,0.6)',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo Section */}
        <Link to="/" style={styles.logo}>
          <img
            src="/src/assests/logo.png"
            alt="Consortium Logo"
            style={{
              width: '45px',
              height: '45px',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
          <div>
            <div style={styles.logoText}>CONSORTIUM 2025</div>
            <div style={styles.logoSubtext}>IARE National Tech Fest</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul style={styles.navLinks}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : {}),
                  }}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.navLinkHover)}
                  onMouseLeave={(e) => {
                    e.target.style.color = isActive ? '#fff' : '#cbd5e1';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
