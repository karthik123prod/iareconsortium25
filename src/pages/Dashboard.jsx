import { useState, useEffect } from 'react';
import { Users, Calendar, Trophy, TrendingUp, PieChart, BarChart3, Download } from 'lucide-react';

function Dashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    byEvent: {},
    byCollege: {},
    withAccommodation: 0,
    recentRegistrations: []
  });

  useEffect(() => {
    const loadRegistrations = () => {
      const data = JSON.parse(localStorage.getItem('registrations') || '[]');
      setRegistrations(data);

      const byEvent = {};
      const byCollege = {};
      let accommodationCount = 0;

      data.forEach(reg => {
        byEvent[reg.event] = (byEvent[reg.event] || 0) + 1;
        byCollege[reg.college] = (byCollege[reg.college] || 0) + 1;
        if (reg.accommodation) accommodationCount++;
      });

      const recent = data.slice(-5).reverse();

      setStats({
        total: data.length,
        byEvent,
        byCollege,
        withAccommodation: accommodationCount,
        recentRegistrations: recent
      });
    };

    loadRegistrations();
    const interval = setInterval(loadRegistrations, 5000);
    return () => clearInterval(interval);
  }, []);

  const exportData = () => {
    const dataStr = JSON.stringify(registrations, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `consortium_registrations_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      padding: '60px 20px',
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
    content: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginBottom: '40px',
    },
    statCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '20px',
      padding: '30px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      transition: 'all 0.3s ease',
    },
    statCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
    statIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    },
    statNumber: {
      fontSize: '42px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '8px',
    },
    statLabel: {
      fontSize: '16px',
      color: '#94a3b8',
      fontWeight: '600',
    },
    section: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '24px',
      padding: '35px',
      marginBottom: '30px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
      flexWrap: 'wrap',
      gap: '15px',
    },
    sectionTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    exportButton: {
      padding: '12px 24px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      fontSize: '15px',
      fontWeight: '600',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
    },
    exportButtonHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
    },
    th: {
      textAlign: 'left',
      padding: '15px 10px',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#e2e8f0',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    tr: {
      borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
      transition: 'all 0.2s ease',
    },
    trHover: {
      background: 'rgba(59, 130, 246, 0.05)',
    },
    td: {
      padding: '15px 10px',
      fontSize: '15px',
      color: '#cbd5e1',
    },
    chartGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '30px',
    },
    chartItem: {
      marginBottom: '20px',
    },
    chartLabel: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#e2e8f0',
      marginBottom: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    chartBar: {
      height: '32px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '15px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: '600',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
      transition: 'all 0.3s ease',
    },
    chartBarHover: {
      transform: 'scaleX(1.02)',
      boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
    },
    emptyState: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#94a3b8',
    },
    emptyIcon: {
      marginBottom: '20px',
      opacity: 0.5,
    },
    emptyText: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    emptySubtext: {
      fontSize: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <p style={styles.subtitle}>
          Monitor and manage event registrations
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.statsGrid}>
          <div
            style={styles.statCard}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.statCardHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
          >
            <div style={{
              ...styles.statIcon,
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            }}>
              <Users size={28} color="#fff" />
            </div>
            <div style={styles.statNumber}>{stats.total}</div>
            <div style={styles.statLabel}>Total Registrations</div>
          </div>

          <div
            style={styles.statCard}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.statCardHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
          >
            <div style={{
              ...styles.statIcon,
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            }}>
              <Calendar size={28} color="#fff" />
            </div>
            <div style={styles.statNumber}>{Object.keys(stats.byEvent).length}</div>
            <div style={styles.statLabel}>Active Events</div>
          </div>

          <div
            style={styles.statCard}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.statCardHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
          >
            <div style={{
              ...styles.statIcon,
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            }}>
              <TrendingUp size={28} color="#fff" />
            </div>
            <div style={styles.statNumber}>{Object.keys(stats.byCollege).length}</div>
            <div style={styles.statLabel}>Participating Colleges</div>
          </div>

          <div
            style={styles.statCard}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.statCardHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
          >
            <div style={{
              ...styles.statIcon,
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            }}>
              <Trophy size={28} color="#fff" />
            </div>
            <div style={styles.statNumber}>{stats.withAccommodation}</div>
            <div style={styles.statLabel}>Accommodation Requests</div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <PieChart size={28} color="#3b82f6" />
              Registrations by Event
            </h2>
          </div>
          {Object.keys(stats.byEvent).length > 0 ? (
            <div>
              {Object.entries(stats.byEvent)
                .sort((a, b) => b[1] - a[1])
                .map(([event, count]) => {
                  const maxCount = Math.max(...Object.values(stats.byEvent));
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={event} style={styles.chartItem}>
                      <div style={styles.chartLabel}>
                        <span>{event}</span>
                        <span>{count} {count === 1 ? 'registration' : 'registrations'}</span>
                      </div>
                      <div
                        style={{
                          ...styles.chartBar,
                          width: `${percentage}%`,
                        }}
                        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.chartBarHover)}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scaleX(1)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                        }}
                      >
                        {count}
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyText}>No registrations yet</div>
            </div>
          )}
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <BarChart3 size={28} color="#3b82f6" />
              Top Participating Colleges
            </h2>
          </div>
          {Object.keys(stats.byCollege).length > 0 ? (
            <div>
              {Object.entries(stats.byCollege)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 10)
                .map(([college, count]) => {
                  const maxCount = Math.max(...Object.values(stats.byCollege));
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={college} style={styles.chartItem}>
                      <div style={styles.chartLabel}>
                        <span>{college}</span>
                        <span>{count} {count === 1 ? 'student' : 'students'}</span>
                      </div>
                      <div
                        style={{
                          ...styles.chartBar,
                          width: `${percentage}%`,
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                        }}
                        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.chartBarHover)}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scaleX(1)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                        }}
                      >
                        {count}
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyText}>No registrations yet</div>
            </div>
          )}
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <Users size={28} color="#3b82f6" />
              Recent Registrations
            </h2>
            {registrations.length > 0 && (
              <button
                style={styles.exportButton}
                onClick={exportData}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.exportButtonHover)}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
              >
                <Download size={18} />
                Export Data
              </button>
            )}
          </div>

          {stats.recentRegistrations.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={styles.table}>
                <thead style={styles.tableHeader}>
                  <tr>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>College</th>
                    <th style={styles.th}>Event</th>
                    <th style={styles.th}>Team Size</th>
                    <th style={styles.th}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentRegistrations.map((reg, index) => (
                    <tr
                      key={reg.id || index}
                      style={styles.tr}
                      onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.trHover)}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <td style={styles.td}>{reg.fullName}</td>
                      <td style={styles.td}>{reg.email}</td>
                      <td style={styles.td}>{reg.college}</td>
                      <td style={styles.td}>{reg.event}</td>
                      <td style={styles.td}>{reg.teamSize}</td>
                      <td style={styles.td}>
                        {new Date(reg.registrationDate).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>
                <Users size={64} color="#475569" />
              </div>
              <div style={styles.emptyText}>No registrations yet</div>
              <div style={styles.emptySubtext}>
                Registrations will appear here as students sign up for events
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
