import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
       

        <div className="footer-bottom">
          <p>&copy; 2025 Consortium 2025 - IARE College. All rights reserved.</p>
        </div>

      <style jsx>{`
        /* Base Styles */
        .footer {
          background: #0f172a;
          color: #e2e8f0;
          padding: 3rem 1.5rem 0;
          width: 100%;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
          align-items: flex-start;
          width: 100%;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 0;
        }

        /* Logo Area */
        .logo-content {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
        }

        .logo-title {
          font-weight: 700;
          font-size: 20px;
          color: #e2e8f0;
          display: block;
        }

        .logo-subtitle {
          font-size: 13px;
          color: #94a3b8;
        }

        /* Description */
        .footer-description {
          color: #94a3b8;
          margin-top: 0.5rem;
          line-height: 1.6;
          max-width: 350px;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
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

        /* Section Titles */
        .footer-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f1f5f9;
        }

        /* Quick Links */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #3b82f6;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          flex-wrap: wrap;
        }

        .contact-item svg {
          color: #3b82f6;
          flex-shrink: 0;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid #334155;
          text-align: center;
          color: #94a3b8;
          margin-top: 2.5rem;
          padding: 1.5rem 0;
          font-size: 0.9rem;
        }

        /* Large screens (desktops, monitors) */
        @media (min-width: 1200px) {
          .footer-content {
            gap: 3rem;
          }
        }

        /* Medium screens (tablets) */
        @media (max-width: 992px) {
          .footer {
            padding: 2.5rem 1rem;
          }

          .footer-title {
            font-size: 1.1rem;
          }

          .footer-description {
            max-width: 100%;
          }
        }

        /* Small screens (mobiles) */
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-section {
            align-items: center;
          }

          .footer-description {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .contact-info {
            align-items: center;
          }

          .contact-item {
            justify-content: center;
            text-align: center;
          }
        }

        /* Extra small devices (very small phones / foldables) */
        @media (max-width: 480px) {
          .logo-icon {
            width: 38px;
            height: 38px;
            font-size: 14px;
          }

          .logo-title {
            font-size: 18px;
          }

          .footer-title {
            font-size: 1rem;
          }

          .footer-link {
            font-size: 0.9rem;
          }

          .contact-item span {
            font-size: 0.9rem;
          }

          .footer-bottom {
            font-size: 0.8rem;
          }
        }

        /* Ultra-wide monitors */
        @media (min-width: 2000px) {
          .container {
            max-width: 1800px;
          }
          .footer {
            padding: 4rem 2rem;
          }
          .footer-title {
            font-size: 1.4rem;
          }
          .footer-description {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
