import { Award, Target, Users, Zap, Building, MapPin, Calendar } from 'lucide-react';

function About() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      padding: '60px 20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
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
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    section: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '24px',
      padding: '40px',
      marginBottom: '30px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    sectionText: {
      fontSize: '17px',
      color: '#cbd5e1',
      lineHeight: '1.8',
      marginBottom: '15px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginTop: '30px',
    },
    card: {
      background: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '16px',
      padding: '30px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      transition: 'all 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(59, 130, 246, 0.3)',
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
    cardIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '14px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '12px',
    },
    cardText: {
      fontSize: '15px',
      color: '#cbd5e1',
      lineHeight: '1.6',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '25px',
      marginTop: '30px',
    },
    statCard: {
      textAlign: 'center',
      padding: '30px',
      background: 'rgba(59, 130, 246, 0.05)',
      borderRadius: '16px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '16px',
      color: '#94a3b8',
      fontWeight: '600',
    },
    collegeInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginTop: '25px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px',
      padding: '20px',
      background: 'rgba(59, 130, 246, 0.05)',
      borderRadius: '12px',
    },
    infoIcon: {
      flexShrink: 0,
      marginTop: '2px',
    },
    infoContent: {
      flex: 1,
    },
    infoTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '5px',
    },
    infoText: {
      fontSize: '15px',
      color: '#cbd5e1',
      lineHeight: '1.6',
    },
  };

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To provide a platform for students to showcase their technical skills, foster innovation, and connect with industry leaders.'
    },
    {
      icon: Award,
      title: 'Excellence',
      text: 'We strive for excellence in organizing world-class technical events that challenge and inspire participants.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      text: 'Bringing together students, faculty, and industry experts to create a collaborative learning environment.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      text: 'Encouraging creative thinking and innovative solutions to real-world problems through technology.'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Consortium 2025</h1>
        <p style={styles.subtitle}>
          India's Premier National Level Technical Festival
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Zap size={32} color="#3b82f6" />
            About the Event
          </h2>
          <p style={styles.sectionText}>
            Consortium 2025 is the flagship national-level technical festival organized by the Institute of Aeronautical Engineering (IARE), Hyderabad. This two-day extravaganza brings together the brightest minds from across the country to compete, collaborate, and celebrate technology.
          </p>
          <p style={styles.sectionText}>
            With a rich legacy of fostering innovation and technical excellence, Consortium has become one of the most anticipated technical fests in India. The event features a diverse range of competitions, workshops, and seminars covering cutting-edge technologies including Artificial Intelligence, Robotics, IoT, Web Development, and more.
          </p>
          <p style={styles.sectionText}>
            Participants get the unique opportunity to interact with industry experts, showcase their projects, compete for exciting prizes worth over ₹5 lakhs, and network with fellow tech enthusiasts. Whether you're a coder, designer, innovator, or tech enthusiast, Consortium 2025 has something for everyone.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Building size={32} color="#3b82f6" />
            About IARE
          </h2>
          <p style={styles.sectionText}>
            The Institute of Aeronautical Engineering (IARE) is a premier technical institution located in Hyderabad, Telangana. Established with the vision of providing quality education in engineering and technology, IARE has consistently been recognized for its academic excellence and state-of-the-art infrastructure.
          </p>
          <p style={styles.sectionText}>
            IARE offers undergraduate and postgraduate programs in various engineering disciplines including Aeronautical Engineering, Computer Science, Electronics, Mechanical Engineering, and more. The institute is known for its industry-oriented curriculum, experienced faculty, and strong placement record.
          </p>
          <p style={styles.sectionText}>
            With a focus on research, innovation, and holistic development, IARE has established itself as a leading technical institution in South India. The institute regularly hosts technical symposiums, workshops, and events like Consortium to provide students with practical exposure and industry connections.
          </p>

          <div style={styles.collegeInfo}>
            <div style={styles.infoItem}>
              <MapPin size={24} color="#3b82f6" style={styles.infoIcon} />
              <div style={styles.infoContent}>
                <div style={styles.infoTitle}>Location</div>
                <div style={styles.infoText}>
                  Dundigal, Hyderabad, Telangana - 500043
                </div>
              </div>
            </div>
            <div style={styles.infoItem}>
              <Calendar size={24} color="#3b82f6" style={styles.infoIcon} />
              <div style={styles.infoContent}>
                <div style={styles.infoTitle}>Established</div>
                <div style={styles.infoText}>
                  2000 - Over 25 years of excellence
                </div>
              </div>
            </div>
            <div style={styles.infoItem}>
              <Award size={24} color="#3b82f6" style={styles.infoIcon} />
              <div style={styles.infoContent}>
                <div style={styles.infoTitle}>Accreditation</div>
                <div style={styles.infoText}>
                  NAAC 'A' Grade, NBA Accredited Programs
                </div>
              </div>
            </div>
            <div style={styles.infoItem}>
              <Users size={24} color="#3b82f6" style={styles.infoIcon} />
              <div style={styles.infoContent}>
                <div style={styles.infoTitle}>Student Strength</div>
                <div style={styles.infoText}>
                  5000+ students across various programs
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Target size={32} color="#3b82f6" />
            Our Vision & Values
          </h2>
          <div style={styles.grid}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  style={styles.card}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  }}
                >
                  <div style={styles.cardIcon}>
                    <Icon size={28} color="#fff" />
                  </div>
                  <h3 style={styles.cardTitle}>{value.title}</h3>
                  <p style={styles.cardText}>{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Award size={32} color="#3b82f6" />
            Event Highlights
          </h2>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>10+</div>
              <div style={styles.statLabel}>Technical Events</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>2000+</div>
              <div style={styles.statLabel}>Expected Participants</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>100+</div>
              <div style={styles.statLabel}>Participating Colleges</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>2</div>
              <div style={styles.statLabel}>Days of Innovation</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
