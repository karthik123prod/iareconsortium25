import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, UserPlus, Info, Mail, Menu, X } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: 'rgba(10, 10, 25, 0.8)',
      zIndex: 1000,
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '12px 40px',
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
      fontSize: '30px',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, #3b82f6, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    logoSubtext: {
      fontSize: '16px',
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
    hamburger: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      zIndex: 1002,
      position: 'relative',
    },
  };

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>
          {/* Logo */}
          <Link to="/" style={styles.logo}>
            <img
              src="/assets/logo.png"
              alt="Consortium Logo"
              className="logo-img"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
           
          </Link>

          {/* Hamburger for small screens */}
          <button
            style={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`} style={styles.navLinks}>
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
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={25} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Responsive CSS */}
        <style>{`
          /* Default desktop view */
          .hamburger-btn {
            display: none;
          }

          .nav-links {
            display: flex;
            align-items: center;
          }

          /* Hover effect */
          .nav-links a:hover {
            color: #fff !important;
            text-shadow: 0 0 10px rgba(168, 85, 247, 0.7);
          }

          /* Responsive below 900px */
          @media (max-width: 900px) {
            .hamburger-btn {
              display: block !important;
            }

            /* Hide logo text on mobile */
            .logo-text-container {
              display: none;
            }

            /* Fixed logo size on mobile */
            .logo-img {
              width: 40px !important;
              height: 40px !important;
            }

            .nav-links {
              position: fixed;
              top: 0;
              right: 0;
              height: 100vh;
              width: 70%;
              background: rgba(15, 23, 42, 0.98);
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 2rem;
              transform: translateX(100%);
              transition: transform 0.3s ease;
              box-shadow: -4px 0 10px rgba(0, 0, 0, 0.4);
              z-index: 1001;
            }

            .nav-links.active {
              transform: translateX(0);
            }

            .nav-links li {
              width: 100%;
              text-align: center;
            }

            .nav-links a {
              font-size: 1.2rem !important;
              display: flex;
              justify-content: center;
            }
          }

          /* Smaller mobile phones */
          @media (max-width: 480px) {
            .nav-links {
              width: 85%;
            }

            .logo-img {
              width: 80px !important;
              height: 60px !important;
            }
          }
        `}</style>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        />
      )}
    </>
  );
}

export default Navigation;