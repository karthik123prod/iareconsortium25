import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User } from 'lucide-react';

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
      icon: <MapPin />,
      title: 'Address',
      details: [
        'Institute of Aeronautical Engineering',
        'Dundigal, Hyderabad - 500043',
        'Telangana, India'
      ]
    },
    {
      icon: <Phone />,
      title: 'Phone Numbers',
      details: [
        '+91 9550080044',
        '+91 9966009088',
        '+91 9876543210 (Mobile)'
      ]
    },
    {
      icon: <Mail />,
      title: 'Email Addresses',
      details: [
        'consortium2025@iare.ac.in',
        'events@iare.ac.in',
        'info@iare.ac.in'
      ]
    },
    {
      icon: <Clock />,
      title: 'Office Hours',
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
      name: 'General Inquiries',
      email: 'info@iare.ac.in',
      phone: '+91 40-40162444',
      head: 'Dr. Rajesh Kumar'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">
              <Send size={48} />
            </div>
            <h2>Message Sent Successfully!</h2>
            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
          </div>
        </div>

        <style jsx>{`
  .contact-page {
    padding: 2rem 0 4rem;
  }

  .page-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .page-header h1 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .page-header p {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-info-section {
    margin-bottom: 4rem;
  }

  .contact-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .contact-info-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #060707ff;
    transition: transform 0.3s ease;
  }

  .contact-info-card:hover {
    transform: translateY(-8px);
  }

  .info-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #3b82f6, #1e40af);
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
  }

  .contact-info-card h3 {
    color: #1e293b;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .info-details p {
    color: #64748b;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .main-contact-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .contact-form-section {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #000307ff;
  }

  .form-header {
    text-align: center;
    margin-bottom: 2rem;
    color: #1e40af;
  }

  .form-header h2 {
    color: #1e293b;
    margin: 1rem 0 0.5rem;
  }

  .form-header p {
    color: #64748b;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .form-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #374151;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .submit-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .departments-section {
    background: #040505ff;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #0c0c0eff;
  }

  .departments-section h2 {
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .departments-section > p {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .departments-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .department-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #0a0b0bff;
  }

  .department-card h3 {
    color: #1e293b;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .dept-head {
    color: #3b82f6;
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .dept-contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .dept-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .dept-info svg {
    color: #64748b;
  }

  .dept-info a {
    color: #1e40af;
    text-decoration: none;
  }

  .dept-info a:hover {
    text-decoration: underline;
  }

  .map-section {
    background: white;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #0b0c0eff;
    text-align: center;
  }

  .map-section h2 {
    color: #1e293b;
    margin-bottom: 2rem;
  }

  .map-container {
    background: #0b0b0bff;
    border-radius: 12px;
    border: 2px dashed #0b0c0cff;
    padding: 3rem 2rem;
  }

  .map-placeholder {
    color: #64748b;
  }

  .map-placeholder svg {
    color: #3b82f6;
    margin-bottom: 1rem;
  }

  .map-placeholder h3 {
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  .map-placeholder p {
    margin-bottom: 2rem;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .main-contact-section {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .contact-form-section {
      padding: 2rem;
    }

    .page-header h1 {
      font-size: 2rem;
    }

    .contact-info-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Mobile Large */
  @media (max-width: 768px) {
    .contact-info-grid {
      grid-template-columns: 1fr;
    }

    .departments-section {
      padding: 1.5rem;
    }

    .form-label {
      font-size: 0.9rem;
    }

    .submit-btn {
      font-size: 0.95rem;
    }

    .map-container {
      padding: 2rem 1rem;
    }
  }

  /* Mobile Small */
  @media (max-width: 480px) {
    .page-header h1 {
      font-size: 1.75rem;
    }

    .page-header p {
      font-size: 1rem;
      max-width: 100%;
    }

    .departments-section {
      padding: 1rem;
    }

    .form-grid {
      gap: 0.75rem;
    }

    .contact-form-section {
      padding: 1.5rem;
    }

    .map-container {
      padding: 1.5rem 1rem;
    }

    .submit-btn {
      font-size: 0.9rem;
    }
  }
`}</style>

      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Have questions about Consortium 2025? We're here to help! Reach out to us through any of the channels below.</p>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-section">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="info-icon">
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="main-contact-section">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <MessageCircle size={32} />
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll respond as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
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
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
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
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
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
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType" className="form-label">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="form-input"
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

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
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
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Department Contacts */}
          <div className="departments-section">
            <h2>Department Contacts</h2>
            <p>For specific inquiries, you can directly contact the relevant department:</p>
            
            <div className="departments-list">
              {departments.map((dept, index) => (
                <div key={index} className="department-card">
                  <h3>{dept.name}</h3>
                  <p className="dept-head">Head: {dept.head}</p>
                  <div className="dept-contact">
                    <div className="dept-info">
                      <Mail size={16} />
                      <a href={`mailto:${dept.email}`}>{dept.email}</a>
                    </div>
                    <div className="dept-info">
                      <Phone size={16} />
                      <a href={`tel:${dept.phone}`}>{dept.phone}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <h3>IARE College Campus</h3>
              <p>Dundigal, Hyderabad - 500043, Telangana</p>
              <a 
                href="https://maps.google.com/?q=Institute+of+Aeronautical+Engineering+Dundigal+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding: 2rem 0 4rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .page-header h1 {
          font-size: 2.5rem;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .page-header p {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-info-section {
          margin-bottom: 4rem;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .contact-info-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-8px);
        }

        .info-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .contact-info-card h3 {
          color: #1e293b;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .info-details p {
          color: #64748b;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .main-contact-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .contact-form-section {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
          color: #1e40af;
        }

        .form-header h2 {
          color: #1e293b;
          margin: 1rem 0 0.5rem;
        }

        .form-header p {
          color: #64748b;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #374151;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .departments-section {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }

        .departments-section h2 {
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .departments-section > p {
          color: #64748b;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .departments-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .department-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .department-card h3 {
          color: #1e293b;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .dept-head {
          color: #3b82f6;
          font-weight: 500;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .dept-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .dept-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .dept-info svg {
          color: #64748b;
        }

        .dept-info a {
          color: #1e40af;
          text-decoration: none;
        }

        .dept-info a:hover {
          text-decoration: underline;
        }

        .map-section {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .map-section h2 {
          color: #1e293b;
          margin-bottom: 2rem;
        }

        .map-container {
          background: #f8fafc;
          border-radius: 12px;
          border: 2px dashed #d1d5db;
          padding: 3rem 2rem;
        }

        .map-placeholder {
          color: #64748b;
        }

        .map-placeholder svg {
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        .map-placeholder h3 {
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .map-placeholder p {
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .main-contact-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .contact-form-section {
            padding: 2rem;
          }

          .page-header h1 {
            font-size: 2rem;
          }

          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .departments-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;