import { Bell, Calendar, Pin, TrendingUp } from 'lucide-react';

function Updates() {
  const updates = [
    {
      id: 1,
      title: 'Registration Extended!',
      date: 'October 20, 2025',
      category: 'Important',
      isPinned: true,
      content: 'Great news! Due to overwhelming response, we have extended the registration deadline to October 25, 2025. Do not miss this opportunity to be part of the biggest tech fest of the year!',
      icon: Pin,
      color: '#ef4444'
    },
    {
      id: 2,
      title: 'New Event Added: Blockchain Workshop',
      date: 'October 18, 2025',
      category: 'Event',
      isPinned: false,
      content: 'We are excited to announce a new workshop on Blockchain Technology! Learn about cryptocurrency, smart contracts, and decentralized applications. Limited seats available.',
      icon: TrendingUp,
      color: '#3b82f6'
    },
    {
      id: 3,
      title: 'Accommodation Details Released',
      date: 'October 15, 2025',
      category: 'Accommodation',
      isPinned: true,
      content: 'Accommodation arrangements have been finalized for outstation participants. Dormitory facilities available at subsidized rates. Contact us for booking.',
      icon: Pin,
      color: '#8b5cf6'
    },
    {
      id: 4,
      title: 'Workshop Schedule Announced',
      date: 'October 12, 2025',
      category: 'Schedule',
      isPinned: false,
      content: 'The complete workshop schedule is now live! Check out the timings for AI/ML, IoT, Design Thinking, and other exciting workshops. Plan your day accordingly.',
      icon: Calendar,
      color: '#10b981'
    },
    {
      id: 5,
      title: 'Prize Pool Increased to ₹5 Lakhs+',
      date: 'October 10, 2025',
      category: 'Prizes',
      isPinned: false,
      content: 'Thanks to our amazing sponsors, the total prize pool has been increased to over ₹5 lakhs! More reasons to participate and showcase your talent.',
      icon: TrendingUp,
      color: '#f59e0b'
    },
    {
      id: 6,
      title: 'Guest Speaker Announcement',
      date: 'October 8, 2025',
      category: 'Guest',
      isPinned: false,
      content: 'We are thrilled to announce that renowned AI expert Dr. Rajesh Kumar will be delivering the keynote address on "Future of Artificial Intelligence in India".',
      icon: Bell,
      color: '#ec4899'
    },
    {
      id: 7,
      title: 'Hackathon Problem Statements',
      date: 'October 5, 2025',
      category: 'Event',
      isPinned: false,
      content: 'Problem statements for the Code Sprint Hackathon are now available on the events page. Start brainstorming and prepare your team for the big day!',
      icon: TrendingUp,
      color: '#3b82f6'
    },
    {
      id: 8,
      title: 'Campus Transportation Info',
      date: 'October 3, 2025',
      category: 'Transportation',
      isPinned: false,
      content: 'Free shuttle service will be available from major bus and metro stations to the campus on both days. Check the schedule for pickup points and timings.',
      icon: Calendar,
      color: '#14b8a6'
    },
    {
      id: 9,
      title: 'Consortium 2025 Official Launch',
      date: 'September 30, 2025',
      category: 'Announcement',
      isPinned: false,
      content: 'We are excited to announce Consortium 2025, the national level technical fest at IARE. Mark your calendars for October 30-31, 2025. Registrations are now open!',
      icon: Bell,
      color: '#8b5cf6'
    }
  ];

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
      maxWidth: '1000px',
      margin: '0 auto',
    },
    updatesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    },
    updateCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '20px',
      padding: '30px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
    },
    updateCardPinned: {
      border: '2px solid rgba(239, 68, 68, 0.5)',
      boxShadow: '0 8px 30px rgba(239, 68, 68, 0.2)',
    },
    updateCardHover: {
      transform: 'translateX(10px)',
      boxShadow: '0 15px 40px rgba(59, 130, 246, 0.3)',
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
    updateHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      marginBottom: '15px',
    },
    iconContainer: {
      width: '60px',
      height: '60px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    },
    updateInfo: {
      flex: 1,
    },
    updateTop: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '10px',
      flexWrap: 'wrap',
    },
    category: {
      display: 'inline-block',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    pinnedBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(239, 68, 68, 0.2)',
      color: '#ef4444',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      border: '1px solid rgba(239, 68, 68, 0.3)',
    },
    date: {
      color: '#94a3b8',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    updateTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '12px',
    },
    updateContent: {
      fontSize: '16px',
      color: '#cbd5e1',
      lineHeight: '1.8',
    },
  };

  const pinnedUpdates = updates.filter(u => u.isPinned);
  const regularUpdates = updates.filter(u => !u.isPinned);

  const renderUpdate = (update) => {
    const Icon = update.icon;
    return (
      <div
        key={update.id}
        style={{
          ...styles.updateCard,
          ...(update.isPinned ? styles.updateCardPinned : {}),
        }}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, styles.updateCardHover);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = update.isPinned
            ? '0 8px 30px rgba(239, 68, 68, 0.2)'
            : 'none';
          e.currentTarget.style.borderColor = update.isPinned
            ? 'rgba(239, 68, 68, 0.5)'
            : 'rgba(59, 130, 246, 0.2)';
        }}
      >
        <div style={styles.updateHeader}>
          <div style={{
            ...styles.iconContainer,
            background: `linear-gradient(135deg, ${update.color} 0%, ${update.color}dd 100%)`,
          }}>
            <Icon size={28} color="#fff" />
          </div>
          <div style={styles.updateInfo}>
            <div style={styles.updateTop}>
              <span style={{
                ...styles.category,
                background: `${update.color}22`,
                color: update.color,
                border: `1px solid ${update.color}44`,
              }}>
                {update.category}
              </span>
              {update.isPinned && (
                <span style={styles.pinnedBadge}>
                  <Pin size={14} />
                  Pinned
                </span>
              )}
              <span style={styles.date}>
                <Calendar size={14} />
                {update.date}
              </span>
            </div>
            <h3 style={styles.updateTitle}>{update.title}</h3>
            <p style={styles.updateContent}>{update.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Latest Updates</h1>
        <p style={styles.subtitle}>
          Stay informed with the latest news and announcements
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.updatesList}>
          {pinnedUpdates.map(renderUpdate)}
          {regularUpdates.map(renderUpdate)}
        </div>
      </div>
    </div>
  );
}

export default Updates;
