import { Calendar, Users, Trophy, Zap, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    hero: {
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      overflow: 'hidden',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1920") center/cover',
      opacity: 0.15,
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
      marginBottom: '20px',
      textShadow: '0 0 60px rgba(59, 130, 246, 0.3)',
      animation: 'fadeInUp 1s ease-out',
    },
    subtitle: {
      fontSize: '32px',
      color: '#e2e8f0',
      marginBottom: '15px',
      fontWeight: '600',
      animation: 'fadeInUp 1.2s ease-out',
    },
    description: {
      fontSize: '20px',
      color: '#cbd5e1',
      marginBottom: '30px',
      maxWidth: '800px',
      margin: '0 auto 40px',
      lineHeight: '1.6',
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
      padding: '100px 20px',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
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
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Explore the latest innovations in AI, IoT, Robotics, and more. Get hands-on experience with emerging technologies.'
    },
    {
      icon: Trophy,
      title: 'Competitive Events',
      description: 'Participate in exciting competitions, hackathons, and coding challenges. Win amazing prizes and recognition.'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with industry experts, innovators, and fellow tech enthusiasts from across the nation.'
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
            October 30-31, 2025
          </div>
          <div style={styles.ctaButtons}>
            <Link to="/register" style={{ ...styles.ctaButton, ...styles.ctaPrimary }}>
              Register Now
            </Link>
            <Link to="/events" style={{ ...styles.ctaButton, ...styles.ctaSecondary }}>
              View Events
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.featuresContainer}>
          <h2 style={styles.sectionTitle}>Why Join Consortium 2025?</h2>
          <p style={styles.sectionSubtitle}>
            Experience the future of technology and innovation at IARE's flagship event
          </p>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  style={styles.featureCard}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, styles.featureCardHover);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  }}
                >
                  <div style={styles.featureIcon}>
                    <Icon size={36} color="#fff" />
                  </div>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureDescription}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={styles.stats}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>20+</div>
            <div style={styles.statLabel}>Technical Events</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>2000+</div>
            <div style={styles.statLabel}>Participants Expected</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>₹5L+</div>
            <div style={styles.statLabel}>Prize Pool</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Colleges</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
