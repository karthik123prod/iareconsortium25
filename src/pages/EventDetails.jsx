import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, MapPin, IndianRupee, Trophy, Clock, ArrowLeft, UserPlus, CheckCircle, AlertCircle } from 'lucide-react';

function EventDetails() {
  const { eventId } = useParams();

  const eventsData = {
    'Webathon': {
      id: 'Webathon',
      title: 'WebNova - Igniting the Future Web',
      category: 'Webathon',
      date: 'October 30, 2025',
      time: '9:00 AM - 6:00 PM',
      venue: 'Main Auditorium',
      participants: '2-4 per team',
      registrationFee: '500',
      prizePool: '50,000',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'WebNova is an innovative webathon designed to inspire creativity and problem-solving through Prompt Engineering and AI-powered tools.',
      detailedDescription: 'Participants will explore how AI — especially generative AI, large language models, and advanced prompt engineering — can be used to create adaptive, intelligent, and impactful solutions for real-world problems.',
      rules: [
        'Each team can have 2 to 4 members.',
	      'Participants can be from any domain and any Year',
        'Each participant can be part of only one team',
        'Registration Fee: ₹300 per Team',
        'Registration is mandatory for all teams before the deadline.'
      ],
      themes: [
        'Participants can choose one theme from the three broad themes:',
        'Smart Society — AI and Prompt Engineering for civic intelligence and public services',
	      'Health & Wellbeing — AI-powered solutions for healthcare, wellness, and accessibility.',
        'Reimagine Commerce/Finance — AI-driven innovations for industrial/private sector trade, finance, or personalized commerce.'
      ],
      guidelines: [
        'Register your team before October 25, 2025',
        'All team members must be present at the venue',
        'Refreshments and meals will be provided',
        'Workspace and power outlets available',
        'Mentors available for technical guidance',
        'Judging based on innovation, Functionalities used, Design, imppact and presentation',
        'Winners announced on the same day',
        'Detailed abstracts and problem statements for each theme will be revealed one day before the event.',
        'Teams must work on the problem statement provided for their chosen theme.',
        'Participants are expected to develop web-based platforms — working web pages or web applications that address the problem.',
        'Proposed solutions must be original and built within the event duration.'
      ],
      abstract: [
        'Detailed abstracts and problem statements for each theme will be revealed one day before the event.',
        'Teams must work on the problem statement provided for their chosen theme.',
        'Participants are expected to develop web-based platforms — working web pages or web applications that address the problem.',
        'Proposed solutions must be original and built within the event duration.',
        'Each team must submit:',
        'A working web page/web application hosted online (any platform)',
        'Source code and documentation of major prompts (GitHub link or downloadable files).',
	      'A short presentation/demo explaining of 5-10mins of the solution and how it addresses the problem statement.'
      ],
      prizes: {
        first: '₹25,000',
        second: '₹15,000',
        third: '₹10,000'
      }
    },
    'robotics': {
      id: 'robotics',
      title: 'House of Echoes',
      category: 'Robotics',
      date: 'October 30-31, 2025',
      time: '10:00 AM - 5:00 PM',
      venue: 'Robotics Arena',
      participants: '2-3 members per team',
      registrationFee: '800',
      prizePool: '75,000',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Build and program your combat robot to compete in an epic arena battle. Show your engineering prowess and strategic skills in this action-packed competition.',
      detailedDescription: 'Robo Wars is the ultimate test of engineering, design, and combat strategy. Teams must design, build, and operate robots capable of battling opponents in a specially designed arena. With weight restrictions and safety requirements, this event challenges participants to create the perfect balance between offense, defense, and mobility.',
      rules: [
        '2-3 members per team.',
        '149/- per team.',
        'Inter-department, inter-year and inter-college teams allowed',
        'Must bring at least 1 laptop per team.',
        'Winners will be decided based on methodology and factual presentation.'
      ],
      themes:[
        'Not confirmed yet'
      ],
      guidelines: [
        'Submit robot specifications by October 20, 2025',
        'Practice arena available one day before event',
        'Repair tools and workspace provided',
        'Battery charging stations available',
        'Follow all safety protocols strictly',
        'Spare parts recommended',
        'Team captain must attend technical briefing'
      ],
      abstract: [
        'The event unfolds in two intense phases:',
        'Day 1: The Eliminations – Compete through mini technical quizzes, code-breaking challenges, and online puzzles to qualify for the final round.',
        'Day 2: The Grand Hunt – Embark on an immersive indoor-outdoor adventure, completing real-time missions, solving cryptic tech clues, and racing against time to find the final treasure.'
      ],
      prizes: {
        first: '₹40,000',
        second: '₹25,000',
        third: '₹10,000'
      }
    },
    'Treasure Hunt': {
      id: 'Divide And Conquer Beyond Your Limits',
      title: 'Techno Hunt',
      category: 'Artificial Intelligence',
      date: 'October 30, 2025',
      time: '11:00 AM - 4:00 PM',
      venue: 'Computer Lab - Block A',
      participants: '4 per team',
      registrationFee: '200',
      prizePool: '40,000',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Get ready to ignite your inner tech explorer in “Decode & Conquer”',
      detailedDescription: 'A thrilling 2-day technical treasure hunt that blends brainpower, coding, and adventure! This isn’t your average hunt — it’s a high-energy quest where each clue challenges your logic, coding skills, and teamwork.',
      rules: [
        'Team size: 4 members',
        'The hunt will have multiple rounds with technical and logical clues to solve.',
        'Mobile phones are not allowed during the event.',
        'A time limit will be given, and the team completing all tasks first will be the winner.',
        'The registration fee is 200/- per team.'
      ],
      themes: [
        'Not yet given.'
      ],
      guidelines: [
        'Bring laptops with ML frameworks pre-installed',
        'Anaconda or Jupyter Notebook recommended',
        'Internet available for library downloads',
        'Presentation of results and methodology mandatory',
        'Evaluation based on accuracy, approach, and innovation',
        'Judges decision is final',
        'Time limit: 5 hours'
      ],
      prizes: {
        first: '₹20,000',
        second: '₹12,000',
        third: '₹8,000'
      }
    },
    'web-dev': {
      id: 'web-dev',
      title: 'Web Development Sprint',
      category: 'Web Development',
      date: 'October 31, 2025',
      time: '9:00 AM - 3:00 PM',
      venue: 'IT Lab - Block B',
      participants: '2 per team',
      registrationFee: '350',
      prizePool: '30,000',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A fast-paced web development competition where teams build fully functional websites based on given themes. Showcase your frontend and backend skills.',
      detailedDescription: 'The Web Development Sprint challenges teams to create complete, functional websites within a time constraint. From UI/UX design to backend implementation, participants must demonstrate full-stack capabilities. The event emphasizes modern web technologies, responsive design, and user experience.',
      rules: [
        'Team size: 2 members',
        'Theme revealed at event start',
        'Any web framework allowed (React, Vue, Angular, etc.)',
        'Responsive design mandatory',
        'Must be deployed live for judging',
        'Code must be pushed to GitHub',
        'Both frontend and backend required',
        'API integration encouraged'
      ],
      guidelines: [
        'Setup development environment beforehand',
        'Free hosting credits will be provided',
        'Focus on UI/UX and functionality',
        'Browser compatibility required (Chrome, Firefox, Safari)',
        'Presentation to judges at end',
        'Code quality and structure will be evaluated',
        'Time limit: 6 hours'
      ],
      prizes: {
        first: '₹15,000',
        second: '₹10,000',
        third: '₹5,000'
      }
    },
    'iot-showcase': {
      id: 'iot-showcase',
      title: 'IoT Innovation Challenge',
      category: 'Internet of Things',
      date: 'October 31, 2025',
      time: '10:00 AM - 4:00 PM',
      venue: 'Electronics Lab',
      participants: '3-4 per team',
      registrationFee: '600',
      prizePool: '45,000',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Design and implement IoT-based solutions to everyday problems. Use sensors, microcontrollers, and cloud platforms to build your innovative project.',
      detailedDescription: 'The IoT Innovation Challenge invites teams to create smart, connected solutions using IoT technologies. From smart home automation to industrial monitoring systems, participants can explore various application domains. The event emphasizes practical implementation, sensor integration, and data analytics.',
      rules: [
        'Team size: 3-4 members',
        'Arduino/Raspberry Pi/ESP32/NodeMCU allowed',
        'Must demonstrate working prototype',
        'Cloud integration (AWS/Azure/Firebase) earns bonus points',
        'Safety standards must be met',
        'Project documentation required',
        'Mobile app integration encouraged',
        'Real-time data visualization preferred'
      ],
      guidelines: [
        'Bring your own components and sensors',
        'Power supply and breadboards provided',
        'WiFi connectivity available',
        'Testing bench and tools provided',
        'Expert guidance available during event',
        'Focus on practical applications',
        'Demo and presentation required'
      ],
      prizes: {
        first: '₹25,000',
        second: '₹12,000',
        third: '₹8,000'
      }
    },
    'tech-quiz': {
      id: 'tech-quiz',
      title: 'Tech Quiz Competition',
      category: 'Quiz',
      date: 'October 30, 2025',
      time: '2:00 PM - 4:00 PM',
      venue: 'Seminar Hall',
      participants: '2 per team',
      registrationFee: '200',
      prizePool: '15,000',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A comprehensive quiz covering programming, technology trends, innovations, and general tech awareness. Multiple rounds with increasing difficulty.',
      detailedDescription: 'Test your knowledge across the vast landscape of technology in this multi-round quiz competition. From programming fundamentals to cutting-edge innovations, from tech history to future trends, this quiz covers it all. Perfect for those who love staying updated with the tech world.',
      rules: [
        'Team size: 2 members',
        'Multiple choice and buzzer rounds',
        'No electronic devices or reference materials allowed',
        'Negative marking in buzzer round (-1 for wrong answer)',
        'Top 10 teams advance to finals',
        'Quiz master decision is final',
        'Prelims: Written test',
        'Finals: Stage quiz with buzzer'
      ],
      guidelines: [
        'Arrive 15 minutes early for registration',
        'Study current tech trends (2024-2025)',
        'Cover programming language fundamentals',
        'Know about latest tech innovations and startups',
        'Fair play expected - no cheating',
        'Topics: AI/ML, Cloud, Programming, Cybersecurity, Tech News',
        'Both speed and accuracy matter'
      ],
      prizes: {
        first: '₹8,000',
        second: '₹5,000',
        third: '₹2,000'
      }
    },
    'design-thinking': {
      id: 'design-thinking',
      title: 'Design Thinking Workshop',
      category: 'Workshop',
      date: 'October 30, 2025',
      time: '11:00 AM - 2:00 PM',
      venue: 'Innovation Lab',
      participants: 'Individual',
      registrationFee: '250',
      prizePool: 'Certificates & Goodies',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'An interactive workshop on design thinking methodology. Learn how to identify problems, ideate solutions, and create prototypes using systematic approaches.',
      detailedDescription: 'This hands-on workshop introduces participants to the design thinking framework - a human-centered approach to innovation. Through interactive exercises and real case studies, you will learn the five stages: Empathize, Define, Ideate, Prototype, and Test. Perfect for aspiring entrepreneurs and innovators.',
      rules: [
        'Individual participation',
        'Active participation in all activities required',
        'Bring notebook and pen for exercises',
        'Group activities and discussions included',
        'Certificate of participation on completion',
        'Full attendance mandatory',
        'No prior experience required',
        'Photography allowed for personal use'
      ],
      guidelines: [
        'Workshop duration: 3 hours',
        'All materials and tools provided',
        'Interactive sessions with expert facilitators',
        'Real-world case studies',
        'Hands-on prototyping exercises',
        'Networking opportunity with fellow participants',
        'Refreshments provided'
      ],
      prizes: {
        first: 'Certificate of Participation',
        second: 'Workshop Materials Kit',
        third: 'Networking Opportunities'
      }
    },
    'paper-presentation': {
      id: 'paper-presentation',
      title: 'Technical Paper Presentation',
      category: 'Paper Presentation',
      date: 'October 31, 2025',
      time: '9:00 AM - 1:00 PM',
      venue: 'Conference Hall',
      participants: '2-3 per team',
      registrationFee: '300',
      prizePool: '25,000',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Present your technical papers on cutting-edge technologies, research findings, or innovative ideas. Get feedback from experts and industry professionals.',
      detailedDescription: 'The Technical Paper Presentation provides a platform for students and researchers to present their work on emerging technologies and innovations. Present your research, get valuable feedback from industry experts and academicians, and compete for exciting prizes. Topics span across all domains of technology.',
      rules: [
        'Team size: 2-3 members (single author also allowed)',
        'Paper submission deadline: October 25, 2025',
        'Original research or innovative concepts required',
        'Plagiarism will lead to disqualification',
        'Presentation time: 15 minutes + 5 minutes Q&A',
        'PowerPoint presentation mandatory',
        'Follow IEEE paper format',
        'Minimum 4 pages, maximum 8 pages'
      ],
      guidelines: [
        'Submit abstract (300 words) first for review',
        'Full paper submission after abstract acceptance',
        'Topics: AI/ML, IoT, Blockchain, Cybersecurity, etc.',
        'Bring presentation on USB drive (backup)',
        'Dress code: Formal attire',
        'Technical depth and clarity evaluated',
        'References must be properly cited',
        'Laptop and projector provided'
      ],
      prizes: {
        first: '₹12,000',
        second: '₹8,000',
        third: '₹5,000'
      }
    }
  };

  const event = eventsData[eventId];

  if (!event) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Event Not Found</h1>
          <Link to="/events" style={{
            color: '#3b82f6',
            fontSize: '18px',
            textDecoration: 'none'
          }}>
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      padding: '40px 20px 80px',
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '16px',
      marginBottom: '30px',
      transition: 'all 0.3s ease',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    hero: {
      borderRadius: '24px',
      overflow: 'hidden',
      marginBottom: '40px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    },
    heroImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    },
    heroContent: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
      padding: '40px',
      borderTop: '3px solid',
      borderImage: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) 1',
    },
    category: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      padding: '8px 20px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '42px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      color: '#cbd5e1',
      lineHeight: '1.8',
      marginBottom: '30px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '30px',
    },
    infoCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '15px',
      background: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '12px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    infoIcon: {
      flexShrink: 0,
    },
    infoText: {
      color: '#e2e8f0',
      fontSize: '15px',
      fontWeight: '500',
    },
    registerButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '16px 40px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
      border: 'none',
      cursor: 'pointer',
    },
    sections: {
      display: 'grid',
      gap: '30px',
    },
    section: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      padding: '35px',
      borderRadius: '20px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    sectionTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    sectionContent: {
      fontSize: '16px',
      color: '#cbd5e1',
      lineHeight: '1.8',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '15px',
      fontSize: '16px',
      color: '#cbd5e1',
      lineHeight: '1.6',
    },
    prizeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginTop: '20px',
    },
    prizeCard: {
      background: 'rgba(59, 130, 246, 0.1)',
      padding: '25px',
      borderRadius: '16px',
      border: '2px solid rgba(59, 130, 246, 0.3)',
      textAlign: 'center',
    },
    prizeLabel: {
      fontSize: '14px',
      color: '#94a3b8',
      marginBottom: '8px',
      textTransform: 'uppercase',
      fontWeight: '600',
    },
    prizeAmount: {
      fontSize: '32px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Link
          to="/events"
          style={styles.backButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft size={20} />
          Back to Events
        </Link>

        <div style={styles.hero}>
          <img src={event.image} alt={event.title} style={styles.heroImage} />
          <div style={styles.heroContent}>
            <span style={styles.category}>{event.category}</span>
            <h1 style={styles.title}>{event.title}</h1>
            <p style={styles.description}>{event.detailedDescription}</p>

            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <Calendar size={24} color="#3b82f6" style={styles.infoIcon} />
                <div>
                  <div style={styles.infoText}>{event.date}</div>
                </div>
              </div>
              <div style={styles.infoCard}>
                <Clock size={24} color="#3b82f6" style={styles.infoIcon} />
                <div>
                  <div style={styles.infoText}>{event.time}</div>
                </div>
              </div>
              <div style={styles.infoCard}>
                <MapPin size={24} color="#3b82f6" style={styles.infoIcon} />
                <div>
                  <div style={styles.infoText}>{event.venue}</div>
                </div>
              </div>
              <div style={styles.infoCard}>
                <Users size={24} color="#3b82f6" style={styles.infoIcon} />
                <div>
                  <div style={styles.infoText}>{event.participants}</div>
                </div>
              </div>
              <div style={styles.infoCard}>
                <IndianRupee size={24} color="#3b82f6" style={styles.infoIcon} />
                <div>
                  <div style={styles.infoText}>₹{event.registrationFee}</div>
                </div>
              </div>
              <div style={styles.infoCard}>
                <Trophy size={24} color="#3b82f6" style={styles.infoIcon} />
                <div>
                  <div style={styles.infoText}>₹{event.prizePool}</div>
                </div>
              </div>
            </div>

            <Link
              to="/register"
              style={styles.registerButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
              }}
            >
              <UserPlus size={22} />
              Register for this Event
            </Link>
          </div>
        </div>

        <div style={styles.sections}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Trophy size={28} color="#3b82f6" />
              Prize Distribution
            </h2>
            <div style={styles.prizeGrid}>
              <div style={styles.prizeCard}>
                <div style={styles.prizeLabel}>🥇 First Prize</div>
                <div style={styles.prizeAmount}>{event.prizes.first}</div>
              </div>
              <div style={styles.prizeCard}>
                <div style={styles.prizeLabel}>🥈 Second Prize</div>
                <div style={styles.prizeAmount}>{event.prizes.second}</div>
              </div>
              <div style={styles.prizeCard}>
                <div style={styles.prizeLabel}>🥉 Third Prize</div>
                <div style={styles.prizeAmount}>{event.prizes.third}</div>
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <CheckCircle size={28} color="#3b82f6" />
              Rules & Regulations
            </h2>
            <ul style={styles.list}>
              {event.rules.map((rule, index) => (
                <li key={index} style={styles.listItem}>
                  <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
           <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <CheckCircle size={28} color="#3b82f6" />
              Themes
            </h2>
            <ul style={styles.list}>
              {event.themes.map((rule, index) => (
                <li key={index} style={styles.listItem}>
                  <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>


          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <AlertCircle size={28} color="#3b82f6" />
              Guidelines & Instructions
            </h2>
            <ul style={styles.list}>
              {event.guidelines.map((guideline, index) => (
                <li key={index} style={styles.listItem}>
                  <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
           <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <CheckCircle size={28} color="#3b82f6" />
              Abstract and Deliverables
            </h2>
            <ul style={styles.list}>
              {event.abstract.map((rule, index) => (
                <li key={index} style={styles.listItem}>
                  <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
