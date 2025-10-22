import { Zap } from 'lucide-react';

function Register() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '56px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '20px',
      color: '#94a3b8',
    },
    messageContainer: {
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '24px',
      padding: '60px 40px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    soonText: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '20px',
    },
    callToAction: {
      fontSize: '18px',
      color: '#cbd5e1',
      lineHeight: '1.6',
    },
    subscribeButton: {
      marginTop: '30px',
      padding: '14px 28px',
      background: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)',
    },
    subscribeButtonHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 12px 35px rgba(249, 115, 22, 0.5)',
    }
  };

  // Minimal responsive styles to keep for aesthetic consistency
  const responsiveStyles = `
    /* 📱 Responsive design for tablets & phones */
    @media (max-width: 1024px) {
      div[style*="max-width: 700px"] {
        max-width: 90% !important;
        padding: 40px 20px !important;
      }

      h1[style] {
        font-size: 38px !important;
      }

      h2[style] {
        font-size: 28px !important;
      }

      p[style] {
        font-size: 16px !important;
      }
    }

    @media (max-width: 768px) {
      h1[style] {
        font-size: 32px !important;
      }
      h2[style] {
        font-size: 24px !important;
      }
    }

    @media (max-width: 480px) {
      h1[style] {
        font-size: 28px !important;
      }
      h2[style] {
        font-size: 20px !important;
      }
      div[style*="gap: 15px"] {
        flex-direction: column;
      }
    }
  `;

  return (
    <div style={styles.container}>
      {/* Keeping responsive styles for aesthetic consistency */}
      <style>{responsiveStyles}</style>

      <div style={styles.header}>
        <h1 style={styles.title}>Consortium 2025</h1>
      </div>

      <div style={styles.messageContainer}>
        <h2 style={styles.soonText}>
          <Zap size={32} color="#f97316" />
          Registrations Will Open Soon
          <Zap size={32} color="#f97316" />
        </h2>
        <p style={styles.callToAction}>
          We're finalizing the last few details for an unforgettable event.
          Stay tuned to be the first to know when the registration portal goes live!
        </p>
        
      </div>
    </div>
  );
}

export default Register;