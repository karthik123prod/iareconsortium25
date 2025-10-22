import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      details: [
        'Institute of Aeronautical Engineering',
        'Dundigal, Hyderabad - 500043',
        'Telangana, India'
      ]
    },
    {
      icon: <Phone size={24} />,
      title: 'Emergency Contact',
      details: [
        '+91 9550080044',
        '+91 9966009088',
        'Mon-Sat: 9 AM - 6 PM'
      ]
    },
    {
      icon: <Mail size={24} />,
      title: 'General Emails',
      details: [
        'consortium2025@iare.ac.in',
        'events@iare.ac.in',
        'info@iare.ac.in'
      ]
    },
    {
      icon: <Clock size={24} />,
      title: 'Support Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const departments = [
    {
      name: 'Event Registration',
      email: 'registration@iare.ac.in',
      phone: '+91 40-40162444',
      head: 'Prof. Sneha Sharma'
    },
    {
      name: 'Technical Support',
      email: 'tech@iare.ac.in',
      phone: '+91 40-40162445',
      head: 'Dr. Amit Patel'
    },
    {
      name: 'Accommodation',
      email: 'accommodation@iare.ac.in',
      phone: '+91 40-40162446',
      head: 'Mr. Ravi Kumar'
    },
    {
      name: 'Partnerships',
      email: 'partners@iare.ac.in',
      phone: '+91 40-40162447',
      head: 'Dr. Rajesh Kumar'
    }
  ];

  const styles = {
    // Global Styles (Background, Padding)
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      padding: '60px 20px',
    },
    contentArea: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    
    // Header Styles
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
      maxWidth: '700px',
      margin: '0 auto',
    },

    // Contact Info Grid
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginBottom: '60px',
    },
    infoCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)',
      padding: '30px 20px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
    },
    infoCardHover: {
        transform: 'translateY(-5px) scale(1.02)',
        boxShadow: '0 15px 40px rgba(59, 130, 246, 0.15)',
    },
    infoIconContainer: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 15px',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
    },
    infoTitle: {
      color: '#e2e8f0',
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '10px',
    },
    infoDetail: {
      color: '#94a3b8',
      fontSize: '14px',
      margin: '5px 0',
      lineHeight: '1.4',
    },

    // Main Content (Form & Departments)
    mainContentGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '30px',
      marginBottom: '60px',
    },
    
    // Contact Form Section
    formSection: {
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    },
    formHeader: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    formHeaderIcon: {
        color: '#8b5cf6',
        marginBottom: '10px',
    },
    formHeaderTitle: {
        color: '#e2e8f0',
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '5px',
    },
    formHeaderSubtitle: {
        color: '#94a3b8',
        fontSize: '16px',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px',
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
    textarea: {
      minHeight: '120px',
      resize: 'vertical',
      padding: '14px 16px',
      borderRadius: '12px',
      border: '2px solid rgba(59, 130, 246, 0.2)',
      background: 'rgba(15, 23, 42, 0.6)',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
      transition: 'all 0.3s ease',
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
      marginTop: '20px',
      width: '100%',
    },
    submitButtonHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 12px 35px rgba(59, 130, 246, 0.5)',
    },

    // Department Contacts Section
    departmentsSection: {
      background: 'rgba(59, 130, 246, 0.1)',
      padding: '30px',
      borderRadius: '24px',
      border: '1px solid rgba(59, 130, 246, 0.3)',
    },
    departmentsTitle: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#e2e8f0',
        marginBottom: '10px',
        borderBottom: '2px solid rgba(59, 130, 246, 0.5)',
        paddingBottom: '10px',
    },
    departmentsSubtitle: {
        color: '#94a3b8',
        fontSize: '15px',
        marginBottom: '20px',
    },
    departmentCard: {
        background: 'rgba(30, 41, 59, 0.9)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
    },
    departmentCardHover: {
        transform: 'translateX(5px)',
    },
    deptName: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#3b82f6',
        marginBottom: '5px',
    },
    deptHead: {
        fontSize: '14px',
        color: '#94a3b8',
        marginBottom: '15px',
    },
    deptInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        color: '#e2e8f0',
        marginBottom: '5px',
    },
    deptLink: {
        color: '#8b5cf6',
        textDecoration: 'none',
        transition: 'color 0.3s',
    },
    deptLinkHover: {
        color: '#a78bfa',
        textDecoration: 'underline',
    },

    // Map Section
    mapSection: {
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        textAlign: 'center',
    },
    mapTitle: {
        color: '#e2e8f0',
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '20px',
    },
    mapContainer: {
        background: 'rgba(15, 23, 42, 0.9)',
        border: '2px dashed rgba(59, 130, 246, 0.5)',
        borderRadius: '16px',
        padding: '50px 30px',
    },
    mapIcon: {
        color: '#3b82f6',
        marginBottom: '15px',
    },
    mapPlaceholderTitle: {
        color: '#e2e8f0',
        fontSize: '20px',
        marginBottom: '5px',
    },
    mapPlaceholderSubtitle: {
        color: '#94a3b8',
        marginBottom: '25px',
    },
    mapButton: {
        padding: '12px 25px',
        background: 'transparent',
        border: '2px solid #8b5cf6',
        color: '#8b5cf6',
        fontSize: '15px',
        fontWeight: '600',
        borderRadius: '10px',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
    },
    mapButtonHover: {
        background: '#8b5cf6',
        color: '#fff',
        boxShadow: '0 4px 15px rgba(139, 92, 246, 0.5)',
    },

    // Success Message
    successMessage: {
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: '#fff',
        padding: '40px',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px',
        fontWeight: '600',
        boxShadow: '0 10px 30px rgba(16, 185, 129, 0.5)',
        animation: 'slideIn 0.5s ease',
        maxWidth: '600px',
        margin: '100px auto',
        border: '1px solid rgba(16, 185, 129, 0.5)',
    },
    successTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    successSubtitle: {
        fontSize: '16px',
        opacity: 0.9,
    }
  };


  // --- Helper Functions for Event Handlers ---
  const applyFocusStyle = (e) => Object.assign(e.target.style, styles.inputFocus);
  const removeFocusStyle = (e) => {
    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
    e.target.style.boxShadow = 'none';
  };
  const applyHoverStyle = (e, hoverStyle) => Object.assign(e.currentTarget.style, hoverStyle);
  const removeHoverStyle = (e, baseStyle) => Object.assign(e.currentTarget.style, baseStyle);
  const getBaseCardStyle = (style) => ({
      ...style,
      transition: 'all 0.3s ease', // Ensure transition property is maintained
      transform: 'none',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(59, 130, 246, 0.2)'
  });


  // --- JSX Rendering ---

  if (isSubmitted) {
    return (
      <div style={styles.container}>
        <style>
          {`@keyframes slideIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }`}
        </style>
        <div style={styles.successMessage}>
          <CheckCircle size={48} />
          <div style={styles.successTitle}>Message Sent Successfully!</div>
          <p style={styles.successSubtitle}>
            Thank you for contacting us. We've received your message and will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
        <style>
            {`
            /* Global Input/Select/Textarea styles */
            .form-input, .form-textarea {
                padding: 14px 16px;
                border-radius: 12px;
                border: 2px solid rgba(59, 130, 246, 0.2);
                background: rgba(15, 23, 42, 0.6);
                color: #fff;
                font-size: 15px;
                outline: none;
                transition: all 0.3s ease;
            }
            .form-input:focus, .form-textarea:focus {
                border-color: rgba(59, 130, 246, 0.6);
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }
            .form-textarea {
              min-height: 120px;
              resize: vertical;
            }
            .form-input option {
                background: #1e293b; 
                color: #fff;
            }
            
            /* Responsive Overrides */
            @media (max-width: 1250px) {
                div[style*="max-width: 1200px"] { max-width: 95% !important; }
            }
            @media (max-width: 1024px) {
                h1[style] { font-size: 40px !important; }
                div[style*="grid-template-columns: 2fr 1fr"] {
                    grid-template-columns: 1fr !important;
                }
                div[style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
                    grid-template-columns: repeat(2, 1fr) !important;
                }
            }
            @media (max-width: 768px) {
                h1[style] { font-size: 32px !important; }
                div[style*="grid-template-columns: 1fr 1fr"] {
                    grid-template-columns: 1fr !important;
                }
                div[style*="grid-template-columns: repeat(2, 1fr)"] {
                    grid-template-columns: 1fr !important;
                }
            }
            @media (max-width: 480px) {
                div[style*="padding: 40px"] { padding: 25px !important; }
                div[style*="padding: 30px"] { padding: 20px !important; }
                h1[style] { font-size: 28px !important; }
                p[style*="font-size: 20px"] { font-size: 16px !important; }
                div[style*="margin-bottom: 60px"] { margin-bottom: 30px !important; }
            }
            `}
        </style>
      <div style={styles.contentArea}>
        {/* Page Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Get In Touch</h1>
          <p style={styles.subtitle}>
            Have questions about Consortium 2025? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div style={styles.infoGrid}>
          {contactInfo.map((info, index) => (
            <div 
                key={index} 
                style={styles.infoCard}
                onMouseEnter={(e) => applyHoverStyle(e, styles.infoCardHover)}
                onMouseLeave={(e) => removeHoverStyle(e, getBaseCardStyle(styles.infoCard))}
            >
              <div style={styles.infoIconContainer}>
                {info.icon}
              </div>
              <h3 style={styles.infoTitle}>{info.title}</h3>
              <div>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} style={styles.infoDetail}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Form and Departments */}
        <div style={styles.mainContentGrid}>
          {/* Contact Form */}
          <div style={styles.formSection}>
            <div style={styles.formHeader}>
              <MessageCircle size={32} style={styles.formHeaderIcon} />
              <h2 style={styles.formHeaderTitle}>Send us a Message</h2>
              <p style={styles.formHeaderSubtitle}>Fill out the form below and we'll respond as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>
                    <User size={18} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your full name"
                    onFocus={applyFocusStyle}
                    onBlur={removeFocusStyle}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>
                    <Mail size={18} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="your.email@example.com"
                    onFocus={applyFocusStyle}
                    onBlur={removeFocusStyle}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="phone" style={styles.label}>
                    <Phone size={18} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="10-digit mobile number"
                    onFocus={applyFocusStyle}
                    onBlur={removeFocusStyle}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="inquiryType" style={styles.label}>
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="form-input"
                    onFocus={applyFocusStyle}
                    onBlur={removeFocusStyle}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="registration">Event Registration</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="subject" style={styles.label}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Brief subject of your inquiry"
                  onFocus={applyFocusStyle}
                  onBlur={removeFocusStyle}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  placeholder="Please provide details about your inquiry..."
                  rows="6"
                  onFocus={applyFocusStyle}
                  onBlur={removeFocusStyle}
                ></textarea>
              </div>

              <button
                type="submit"
                style={styles.submitButton}
                onMouseEnter={(e) => applyHoverStyle(e, styles.submitButtonHover)}
                onMouseLeave={(e) => removeHoverStyle(e, getBaseCardStyle(styles.submitButton))}
              >
                <Send size={22} />
                Send Message
              </button>
            </form>
          </div>

          {/* Department Contacts */}
          <div style={styles.departmentsSection}>
            <h2 style={styles.departmentsTitle}>Specific Contacts</h2>
            <p style={styles.departmentsSubtitle}>For quick assistance, contact the relevant department directly:</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {departments.map((dept, index) => (
                <div 
                    key={index} 
                    style={styles.departmentCard}
                    onMouseEnter={(e) => applyHoverStyle(e, styles.departmentCardHover)}
                    onMouseLeave={(e) => removeHoverStyle(e, getBaseCardStyle(styles.departmentCard))}
                >
                  <h3 style={styles.deptName}>{dept.name}</h3>
                  <p style={styles.deptHead}>Head: {dept.head}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={styles.deptInfo}>
                      <Mail size={16} color="#8b5cf6" />
                      <a 
                          href={`mailto:${dept.email}`} 
                          style={styles.deptLink}
                          onMouseEnter={(e) => applyHoverStyle(e, styles.deptLinkHover)}
                          onMouseLeave={(e) => removeHoverStyle(e, styles.deptLink)}
                      >
                          {dept.email}
                      </a>
                    </div>
                    <div style={styles.deptInfo}>
                      <Phone size={16} color="#8b5cf6" />
                      <a 
                          href={`tel:${dept.phone}`} 
                          style={styles.deptLink}
                          onMouseEnter={(e) => applyHoverStyle(e, styles.deptLinkHover)}
                          onMouseLeave={(e) => removeHoverStyle(e, styles.deptLink)}
                      >
                          {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div style={styles.mapSection}>
          <h2 style={styles.mapTitle}>Where to Find Us</h2>
          <div style={styles.mapContainer}>
            <div style={{...styles.infoDetail, color: '#94a3b8'}}>
              <MapPin size={48} style={styles.mapIcon} />
              <h3 style={styles.mapPlaceholderTitle}>IARE College Campus</h3>
              <p style={styles.mapPlaceholderSubtitle}>Dundigal, Hyderabad - 500043, Telangana, India</p>
              <a 
                href="https://maps.google.com/?q=Institute+of+Aeronautical+Engineering+Dundigal+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.mapButton}
                onMouseEnter={(e) => applyHoverStyle(e, styles.mapButtonHover)}
                onMouseLeave={(e) => removeHoverStyle(e, getBaseCardStyle(styles.mapButton))}
              >
                <MapPin size={18} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;