import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-content">
                <div className="logo-icon">C25</div>
                <div className="logo-text">
                  <span className="logo-title">Consortium 2025</span>
                  <span className="logo-subtitle">IARE College</span>
                </div>
              </div>
            </div>
            <p className="footer-description">
              Join us for the most exciting tech consortium of 2025. Connect, learn, and innovate with the brightest minds in technology.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/events" className="footer-link">Events</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>IARE College, Dundigal, Hyderabad, Telangana 500043</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 9876543210</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>consortium2025@iare.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Consortium 2025 - IARE College. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1e293b;
          color: #e2e8f0;
          padding: 3rem 1.5rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          align-items: flex-start;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-logo .logo-content {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
        }

        .logo-title {
          font-weight: 700;
          font-size: 18px;
          color: #e2e8f0;
          line-height: 1.1;
        }

        .logo-subtitle {
          font-size: 12px;
          color: #94a3b8;
        }

        .footer-description {
          color: #94a3b8;
          margin-bottom: 1rem;
          line-height: 1.6;
          max-width: 350px;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #334155;
          border-radius: 8px;
          color: #e2e8f0;
          transition: all 0.3s;
          text-decoration: none;
        }

        .social-link:hover {
          background: #3b82f6;
          transform: translateY(-3px);
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #3b82f6;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .contact-item svg {
          flex-shrink: 0;
          color: #3b82f6;
        }

        .footer-bottom {
          border-top: 1px solid #334155;
          text-align: center;
          color: #94a3b8;
          margin-top: 3rem;
          padding: 1.5rem 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2.5rem 1rem 0;
          }

          .footer-content {
            gap: 2rem;
            text-align: center;
          }

          .footer-section {
            align-items: center;
          }

          .social-links {
            justify-content: center;
          }

          .contact-item {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
