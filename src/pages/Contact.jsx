import React from 'react';
import { useState } from 'react';
// Removed dependency on '@formspree/react' to resolve compilation error.
import { MapPin, Phone, Mail, Send, MessageCircle, User, CheckCircle, Hash } from 'lucide-react';

// Formspree endpoint (f/xrbywkdz)
const FORMSPREE_ENDPOINT = "xrbywkdz";

const Contact = () => {
    // New state management for native submission handling
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState(null);

    // --- Style Definitions ---
    // Note: Styles are now calculated based on the internal isSubmitting state
    const styles = {
        // Global Styles (Background, Padding)
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            padding: '60px 20px',
            fontFamily: '"Inter", sans-serif',
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
            width: '100%',
            boxSizing: 'border-box',
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
            width: '100%',
            boxSizing: 'border-box',
        },
        error: {
            color: '#f87171',
            fontSize: '14px',
            marginTop: '10px',
            textAlign: 'center',
            fontWeight: '500',
            backgroundColor: 'rgba(248, 113, 113, 0.1)',
            padding: '10px',
            borderRadius: '8px',
        },
        submitButton: {
            padding: '16px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: 'none',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
            marginTop: '20px',
            width: '100%',
            opacity: isSubmitting ? 0.7 : 1,
        },
        submitButtonHover: {
            transform: isSubmitting ? 'none' : 'scale(1.02)',
            boxShadow: isSubmitting ? 'none' : '0 12px 35px rgba(59, 130, 246, 0.5)',
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
            borderRadius: '16px',
            padding: '0', 
            overflow: 'hidden', 
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
    const applyFocusStyle = (e) => {
        Object.assign(e.target.style, {
            borderColor: 'rgba(59, 130, 246, 0.6)',
            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
        });
    }
    const removeFocusStyle = (e) => {
        Object.assign(e.target.style, {
            borderColor: 'rgba(59, 130, 246, 0.2)',
            boxShadow: 'none',
        });
    };
    const applyHoverStyle = (e, hoverStyle) => Object.assign(e.currentTarget.style, hoverStyle);
    const removeHoverStyle = (e, baseStyle) => Object.assign(e.currentTarget.style, baseStyle);
    const getBaseCardStyle = (style) => ({
        ...style,
        transition: 'all 0.3s ease',
        transform: 'none',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(59, 130, 246, 0.2)'
    });
    
    // Static Department Data
    const departments = [
        {
            name: 'Convenor',
            email: 'rd.shobharani@iare.ac.in',
            phone: '+91 9550080044',
            Name: 'Dr. D Shobha Rani'
        },
        {
            name: 'Co-Convenor',
            email: 'p.srilatha@iare.ac.in',
            phone: '+91 9966009088',
            Name: 'Dr. P Srilatha'
        },
        {
            name: 'Student Co-ordinator',
            email: 'karthiktatineni34@gmail.com',
            phone: '+91 7995466261',
            Name: 'Tatineni Karthik sai'
        },
        {
            name: 'Student Co-ordinator',
            email: 'saicharansilar24@gmail.com',
            phone: '+91 8499941104',
            Name: 'Silar Sai Charan'
        }
        {
            name: 'Student Co-ordinator',
            email: 'mchaitanyareddy0211@gmail.com',
            phone: '+91 8328371671',
            Name: 'M Jaya chaitanya'
        }
    ];

    // --- Native Form Submission Handler ---
    const handleSubmitNative = async (e) => {
        e.preventDefault();
        setFormError(null);
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        // Convert FormData to a plain object for JSON submission
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset(); // Reset form fields
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            } else {
                const responseData = await response.json();
                // Formspree returns specific field errors or a general error
                setFormError(responseData.error || 'Failed to send message. Please check required fields and try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormError('A network error occurred. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    // --- Success Message View ---
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

    // --- Main Contact Form View ---
    return (
        <div style={styles.container}>
            <style>
                {/* Responsive CSS for layout changes */}
                {`
                @media (max-width: 1250px) {
                    div[style*="max-width: 1200px"] { max-width: 95% !important; }
                }
                @media (max-width: 1024px) {
                    h1[style] { font-size: 40px !important; }
                    /* Switch 2fr 1fr to 1fr on tablet */
                    div[style*="grid-template-columns: 2fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 768px) {
                    h1[style] { font-size: 32px !important; }
                    /* Switch 1fr 1fr to 1fr in form on mobile */
                    div[style*="grid-template-columns: 1fr 1fr"] {
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

                {/* Main Content: Form and Departments */}
                <div style={styles.mainContentGrid}>
                    {/* Contact Form */}
                    <div style={styles.formSection}>
                        <div style={styles.formHeader}>
                            <MessageCircle size={32} style={styles.formHeaderIcon} />
                            <h2 style={styles.formHeaderTitle}>Send us a Message</h2>
                            <p style={styles.formHeaderSubtitle}>Fill out the form below and we'll respond as soon as possible</p>
                        </div>

                        {/* Form Submission Handled by Native Fetch */}
                        <form onSubmit={handleSubmitNative}>
                            <div style={styles.formGrid}>
                                <div style={styles.formGroup}>
                                    <label htmlFor="name" style={styles.label}>
                                        <User size={18} />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name" // Important for Formspree
                                        style={styles.input}
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
                                        name="email" // Important for Formspree
                                        style={styles.input}
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
                                        name="phone" // Important for Formspree
                                        style={styles.input}
                                        placeholder="10-digit mobile number"
                                        onFocus={applyFocusStyle}
                                        onBlur={removeFocusStyle}
                                    />
                                </div>

                                <div style={styles.formGroup}>
                                    <label htmlFor="inquiryType" style={styles.label}>
                                        <Hash size={18} />
                                        Inquiry Type
                                    </label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType" // Important for Formspree
                                        style={styles.input}
                                        onFocus={applyFocusStyle}
                                        onBlur={removeFocusStyle}
                                        defaultValue="general"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="registration">Event Registration</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="partnership">Partnership</option>
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
                                    name="subject" // Important for Formspree
                                    style={styles.input}
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
                                    name="message" // Important for Formspree
                                    style={styles.textarea}
                                    required
                                    placeholder="Please provide details about your inquiry..."
                                    rows="6"
                                    onFocus={applyFocusStyle}
                                    onBlur={removeFocusStyle}
                                ></textarea>
                            </div>

                            {formError && (
                                <p style={styles.error}>
                                    {formError}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={styles.submitButton}
                                onMouseEnter={(e) => applyHoverStyle(e, styles.submitButtonHover)}
                                onMouseLeave={(e) => removeHoverStyle(e, getBaseCardStyle(styles.submitButton))}
                            >
                                <Send size={22} />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Department Contacts */}
                    <div style={styles.departmentsSection}>
                        <h2 style={styles.departmentsTitle}>Contact Information</h2>
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
                        {/* Embedded Google Map Iframe */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.059126552245!2d78.41515037516982!3d17.599926983323957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ecfe1af26dd%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1761156512865!5m2!1sen!2sin" 
                            width="100%" 
                            height="450" 
                            style={{border: 0, borderRadius: '12px'}}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="IARE College Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
