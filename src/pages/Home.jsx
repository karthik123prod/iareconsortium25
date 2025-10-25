import { Calendar, Users, Trophy, Zap, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import background from '/src/assests/background.jpg';


function Home() {
  const styles = {
    hero: {
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      overflow: 'hidden',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `url(${background}) center/cover no-repeat`,
      opacity: 1,
      zIndex: 0,
},

    heroPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
      zIndex: 1,
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '72px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0px',
      textShadow: '0 0 60px rgba(59, 130, 246, 0.3)',
      animation: 'fadeInUp 1s ease-out',
    },
    subtitle: {
  fontSize: '32px',
  color: '#f1f5f9',
  marginBottom: '10px',
  fontWeight: '600',
  textShadow: '0 0 10px rgba(168, 85, 247, 0.6)',
  animation: 'fadeInUp 1.2s ease-out',
},

description: {
  fontSize: '20px',
  color: '#e2e8f0',
  marginBottom: '30px',
  maxWidth: '800px',
  margin: '0 auto 40px',
  lineHeight: '1.6',
  textShadow: '0 0 6px rgba(147, 51, 234, 0.4)',
  animation: 'fadeInUp 1.4s ease-out',
},
    dateBox: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      padding: '15px 40px',
      borderRadius: '50px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '40px',
      boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
      animation: 'fadeInUp 1.6s ease-out, pulse 2s ease-in-out infinite',
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      animation: 'fadeInUp 1.8s ease-out',
    },
    ctaButton: {
      padding: '16px 40px',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      border: 'none',
    },
    ctaPrimary: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
    },
    ctaSecondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#fff',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)',
    },
    features: {
      padding: '10px 100px',
      background: 'linear-gradient(180deg, #0a0015 0%, #12002b 100%)',

    },
    featuresContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    sectionSubtitle: {
      fontSize: '20px',
      color: '#94a3b8',
      textAlign: 'center',
      marginBottom: '60px',
    },
    featuresGrid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // force 3 columns
  gap: '30px',
},

    featureCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      padding: '40px',
      borderRadius: '20px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
    },
    featureCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
    featureIcon: {
      width: '70px',
      height: '70px',
      borderRadius: '18px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '25px',
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '15px',
    },
    featureDescription: {
      fontSize: '16px',
      color: '#cbd5e1',
      lineHeight: '1.6',
    },
    featuresSection: {
  background: 'linear-gradient(180deg, #0a0015 0%, #12002b 100%)',
  minHeight: '100vh',       // ✅ Full height on large screens
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px 60px',
  boxSizing: 'border-box',
},


featuresWrapper: {
  maxWidth: '100%',      // Full width container
  margin: '0',           // Remove auto-center margin
  padding: '0',          // Remove internal padding
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '60px',
  flexWrap: 'wrap',
},


featuresLeft: {
  flex: '1 1 60%',
  minWidth: '350px',
},

featuresRight: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '50', // Remove excessive space
  paddingRight: '10px'
},

sideImage: {
  width: '100%',
  maxWidth: '600px',
  borderRadius: '50px',
  transition: 'transform 0.4s ease',
},



    stats: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    statCard: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '56px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '18px',
      color: '#94a3b8',
      fontWeight: '600',
    },
  };

  const features = [
    
    {
      icon: Trophy,
      title: 'Competitive Events',
      description: 'Participate in exciting competitions, hackathons, and coding challenges. Win amazing prizes and recognition.'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Attend workshops and seminars to enhance your technical skills and gain industry insights.'
    },
    {
      icon: Rocket,
      title: 'Innovation Platform',
      description: 'Showcase your projects and ideas on a national platform. Get feedback from experts.'
    },
    {
      icon: Calendar,
      title: '2-Day Tech Extravaganza',
      description: 'Two full days packed with technical events, workshops, exhibitions, and entertainment.'
    },
  ];

  return (
    <div>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
      <style>
{`
  @media (max-width: 900px) {
    .featuresWrapper {
      flex-direction: column;
      text-align: center;
    }
    .featuresRight {
      order: -1;
      margin-bottom: 40px;
    }
  }
`}
</style>

<div className="animate-fadeIn">
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>CONSORTIUM 2025</h1>
          <h2 style={styles.subtitle}>National Level Technical Fest</h2>
          <p style={styles.description}>
            Institute of Aeronautical Engineering presents India's premier technical festival.
            Join us for an extraordinary celebration of innovation, technology, and creativity.
          </p>
          <div style={styles.dateBox}>
            <Calendar size={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} />
            October 31-November 01, 2025
          </div>
          <div style={styles.ctaButtons}>
            <Link to="/events" style={{ ...styles.ctaButton, ...styles.ctaPrimary }}>
              Register Now
            </Link>
            <Link to="/events" style={{ ...styles.ctaButton, ...styles.ctaSecondary }}>
              View Events
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.featuresSection}>
  <div
    style={{
      maxWidth: '1200px', // ✅ Fixed width
      margin: '0 auto',   // ✅ Center the section
      padding: '0 0px',  // ✅ Add side padding for smaller screens
      paddingLeft: '0px'
    }}
  >
    <div style={styles.featuresWrapper} className="featuresWrapper">
      
      {/* Right Side Image */}
      <div style={styles.featuresRight} className="featuresRight">
  <img
    src="/assets/side1.png"
    alt="Consortium Showcase"
    loading="lazy"
    style={{
      ...styles.sideImage,
      width: '100%',
      maxWidth: '450px',
      height: 'auto',
      borderRadius: '20px',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 15px 40px rgba(59,130,246,0.4)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  />
</div>


      {/* Left Side Content */}
      <div style={{ ...styles.featuresLeft, flex: 1 }}>
        <h2 style={styles.sectionTitle}>Why Join Consortium 2025?</h2>
        <p style={styles.sectionSubtitle}>
          Experience the future of technology and innovation at IARE's flagship event.
        </p>

        <div
          style={{
            ...styles.featuresGrid,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                style={{
                  ...styles.featureCard,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(59,130,246,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={styles.featureIcon}>
                  <Icon size={34} color="#fff" />
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>

  {/* Responsive Layout Fix */}
  <style>
{`
  /* Responsive Adjustments Without Changing Layout */

  /* Medium Screens (Tablets) */
  @media (max-width: 1024px) {
    h1 { font-size: 56px !important; }
    h2 { font-size: 28px !important; }
    p { font-size: 18px !important; }

    .featuresWrapper {
      gap: 40px !important;
    }

    .featuresRight img {
      max-width: 400px !important;
    }
  }

  /* Small Screens (Mobiles) */
  @media (max-width: 768px) {
    h1 { font-size: 42px !important; }
    h2 { font-size: 24px !important; }
    p { font-size: 16px !important; }

    .featuresWrapper {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      gap: 30px !important;
    }

    .featuresRight {
      order: -1 !important;
      margin-bottom: 20px !important;
    }

    .featuresRight img {
      width: 90% !important;
      max-width: 350px !important;
    }

    .ctaButtons {
      flex-direction: column !important;
      gap: 15px !important;
    }

    .dateBox {
      font-size: 18px !important;
      padding: 12px 25px !important;
    }
  }

  /* Very Small Screens (Phones < 500px) */
  @media (max-width: 500px) {
    h1 { font-size: 32px !important; }
    h2 { font-size: 20px !important; }
    p { font-size: 15px !important; }

    .featuresRight img {
      width: 100% !important;
      max-width: 300px !important;
    }
  }
`}
</style>

</section>



      <section style={styles.stats}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10+</div>
            <div style={styles.statLabel}>Technical Events</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>2000+</div>
            <div style={styles.statLabel}>Participants Expected</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>100+</div>
            <div style={styles.statLabel}>Colleges</div>
          </div>
          <div style={styles.statCard}>
              <div style={styles.statNumber}>2</div>
              <div style={styles.statLabel}>Days of Innovation</div>
            </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home;
