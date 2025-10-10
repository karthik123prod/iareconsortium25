import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Bell, UserPlus, Info, Mail, LayoutDashboard } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/updates', label: 'Updates', icon: Bell },
    { path: '/register', label: 'Register', icon: UserPlus },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }
  ];

  const styles = {
    nav: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      color: '#fff',
      textDecoration: 'none',
    },
    logoText: {
      fontSize: '28px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    logoSubtext: {
      fontSize: '12px',
      color: '#94a3b8',
      marginTop: '-5px',
    },
    navLinks: {
      display: 'flex',
      gap: '8px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      position: 'relative',
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 18px',
      color: '#cbd5e1',
      textDecoration: 'none',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      fontSize: '15px',
      fontWeight: '500',
    },
    navLinkActive: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
    },
    navLinkHover: {
      background: 'rgba(59, 130, 246, 0.1)',
      color: '#fff',
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <div>
            <div style={styles.logoText}>CONSORTIUM 2025</div>
            <div style={styles.logoSubtext}>IARE National Tech Fest</div>
          </div>
        </Link>
        <ul style={styles.navLinks}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} style={styles.navItem}>
                <Link
                  to={item.path}
                  style={{
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      Object.assign(e.target.style, styles.navLinkHover);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#cbd5e1';
                    }
                  }}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
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
