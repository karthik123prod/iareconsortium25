import { useState } from 'react';
import { UserPlus, Mail, Phone, School, Users, Calendar, CreditCard, CheckCircle } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    event: '',
    teamName: '',
    teamSize: '1',
    accommodation: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const newRegistration = {
      ...formData,
      id: Date.now(),
      registrationDate: new Date().toISOString(),
    };
    registrations.push(newRegistration);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        event: '',
        teamName: '',
        teamSize: '1',
        accommodation: false,
      });
    }, 3000);
  };

  const events = [
    'Code Sprint Hackathon',
    'Robo Wars Championship',
    'AI/ML Challenge',
    'Web Development Sprint',
    'IoT Innovation Challenge',
    'Tech Quiz Competition',
    'Design Thinking Workshop',
    'Technical Paper Presentation'
  ];

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
      maxWidth: '700px',
      margin: '0 auto',
    },
    form: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '24px',
      padding: '40px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    },
    formGrid: {
      display: 'grid',
      gap: '25px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '15px',
      fontWeight: '600',
      color: '#e2e8f0',
    },
    input: {
      padding: '14px 16px',
      borderRadius: '12px',
      border: '2px solid rgba(59, 130, 246, 0.2)',
      background: 'rgba(15, 23, 42, 0.6)',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    inputFocus: {
      borderColor: 'rgba(59, 130, 246, 0.6)',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
    select: {
      padding: '14px 16px',
      borderRadius: '12px',
      border: '2px solid rgba(59, 130, 246, 0.2)',
      background: 'rgba(15, 23, 42, 0.6)',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      background: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '12px',
      border: '2px solid rgba(59, 130, 246, 0.2)',
      cursor: 'pointer',
    },
    checkbox: {
      width: '20px',
      height: '20px',
      cursor: 'pointer',
    },
    checkboxLabel: {
      color: '#cbd5e1',
      fontSize: '15px',
      cursor: 'pointer',
    },
    submitButton: {
      padding: '16px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
      marginTop: '10px',
    },
    submitButtonHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 12px 35px rgba(59, 130, 246, 0.5)',
    },
    successMessage: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: '#fff',
      padding: '20px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '16px',
      fontWeight: '600',
      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
      animation: 'slideIn 0.5s ease',
    },
    info: {
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '16px',
      padding: '20px',
      marginTop: '30px',
    },
    infoTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '12px',
    },
    infoList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    infoItem: {
      fontSize: '14px',
      color: '#cbd5e1',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div style={styles.header}>
        <h1 style={styles.title}>Register Now</h1>
        <p style={styles.subtitle}>
          Secure your spot at Consortium 2025
        </p>
      </div>

      <div style={styles.content}>
        {submitted ? (
          <div style={styles.successMessage}>
            <CheckCircle size={32} />
            <div>
              <div style={{ fontSize: '18px', marginBottom: '5px' }}>Registration Successful!</div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>
                You will receive a confirmation email shortly.
              </div>
            </div>
          </div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <UserPlus size={18} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your full name"
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Mail size={18} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="your.email@example.com"
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Phone size={18} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  style={styles.input}
                  placeholder="10-digit mobile number"
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <School size={18} />
                  College/University *
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your college name"
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Calendar size={18} />
                  Year of Study *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">Select year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <CreditCard size={18} />
                  Select Event *
                </label>
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">Choose an event</option>
                  {events.map((event, index) => (
                    <option key={index} value={event}>{event}</option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Users size={18} />
                  Team Name (if applicable)
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter team name"
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Users size={18} />
                  Team Size
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="1">Individual (1)</option>
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                </select>
              </div>

              <div style={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="accommodation"
                  name="accommodation"
                  checked={formData.accommodation}
                  onChange={handleChange}
                  style={styles.checkbox}
                />
                <label htmlFor="accommodation" style={styles.checkboxLabel}>
                  I need accommodation (₹500 per night)
                </label>
              </div>

              <button
                type="submit"
                style={styles.submitButton}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.submitButtonHover)}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                }}
              >
                <UserPlus size={22} />
                Complete Registration
              </button>
            </div>
          </form>
        )}

        <div style={styles.info}>
          <h3 style={styles.infoTitle}>Registration Information</h3>
          <ul style={styles.infoList}>
            <li style={styles.infoItem}>
              <CheckCircle size={16} color="#10b981" />
              Early bird registrations get 20% discount
            </li>
            <li style={styles.infoItem}>
              <CheckCircle size={16} color="#10b981" />
              Team registrations available for most events
            </li>
            <li style={styles.infoItem}>
              <CheckCircle size={16} color="#10b981" />
              On-spot registrations subject to availability
            </li>
            <li style={styles.infoItem}>
              <CheckCircle size={16} color="#10b981" />
              Confirmation email sent within 24 hours
            </li>
            <li style={styles.infoItem}>
              <CheckCircle size={16} color="#10b981" />
              All registered participants get official certificates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Register;
