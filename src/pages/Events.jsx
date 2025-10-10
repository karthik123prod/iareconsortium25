import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, IndianRupee, Eye, UserPlus } from 'lucide-react';

function Events() {
  const eventsData = [
    {
      id: 'Webathon',
      title: 'WebNova - Igniting the Future Web',
      category: 'Webathon',
      date: 'October 30, 2025',
      time: '9:00 AM - 6:00 PM',
      venue: 'Main Auditorium',
      participants: '2-4 per team',
      registrationFee: '300',
      prizePool: '50,000',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'WebNova is an innovative webathon designed to inspire creativity and problem-solving through Prompt Engineering and AI-powered tools.',
      description: 'Participants will explore how AI — especially generative AI, large language models, and advanced prompt engineering — can be used to create adaptive, intelligent, and impactful solutions for real-world problems.',
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
        'All team members must be present',
        'Refreshments will be provided',
        'Workspace and power outlets available',
        'Mentors available for guidance',
        'Detailed abstracts and problem statements for each theme will be revealed one day before the event.',
        'Teams must work on the problem statement provided for their chosen theme.',
        'Participants are expected to develop web-based platforms — working web pages or web applications that address the problem.',
        'Proposed solutions must be original and built within the event duration.'
      ]
    },
    {
      id: 'robotics',
      title: 'House of Echoes',
      category: 'Robotics',
      date: 'October 30-31, 2025',
      time: '10:00 AM - 5:00 PM',
      venue: 'Robotics Arena',
      participants: '3 per team',
      registrationFee: '800',
      prizePool: '75,000',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'Battle of the bots - Design and fight with your robot.',
      description: 'Build and program your combat robot to compete in an epic arena battle. Show your engineering prowess and strategic skills in this action-packed competition.',
      rules: [
        'Robot weight limit: 25 kg',
        'Wireless control required',
        'No explosive or hazardous materials',
        'Minimum 3 rounds per match',
        'Safety gear mandatory for operators',
        'Technical inspection before competition'
      ],
      guidelines: [
        'Submit robot specifications by October 20',
        'Practice arena available day before event',
        'Repair tools and workspace provided',
        'Battery charging stations available',
        'Follow all safety protocols'
      ]
    },
    {
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
      shortDescription: 'Get ready to ignite your inner tech explorer in “Decode & Conquer”.',
      description: 'A thrilling 2-day technical treasure hunt that blends brainpower, coding, and adventure! This isn’t your average hunt — it’s a high-energy quest where each clue challenges your logic, coding skills, and teamwork.',
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
    {
      id: 'web-dev',
      title: 'AquaStruct',
      category: 'Web Development',
      date: 'October 31, 2025',
      time: '9:00 AM - 3:00 PM',
      venue: 'IT Lab - Block B',
      participants: '2 per team',
      registrationFee: '350',
      prizePool: '30,000',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'The "AquaStruct" Concrete Canoe Challenge is an event where student teams, typically those studying civil engineering, design, construct, and race a canoe made entirely out of concrete.',
      description: 'The challenge focuses on applying engineering principles, project management, and material science to create a water-worthy vessel from a material traditionally known for sinking. Teams are judged on a technical design, an oral presentation, and the final products aesthetics and craftsmanship.',
      rules: [
        'Team size: 2 members',
        'Theme revealed at start',
        'Any web framework allowed',
        'Responsive design mandatory',
        'Must be deployed live',
        'Code must be on GitHub'
      ],
      guidelines: [
        'Setup development environment beforehand',
        'Free hosting credits provided',
        'Focus on UI/UX and functionality',
        'Browser compatibility required',
        'Presentation to judges'
      ]
    },
    {
      id: 'iot-showcase',
      title: 'IoT Innovation Challenge',
      category: 'Internet of Things',
      date: 'October 31, 2025',
      time: '10:00 AM - 4:00 PM',
      venue: 'Electronics Lab',
      participants: '3-4 per team',
      registrationFee: '600',
      prizePool: '45,000',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'Create smart solutions using IoT devices.',
      description: 'Design and implement IoT-based solutions to everyday problems. Use sensors, microcontrollers, and cloud platforms to build your innovative project.',
      rules: [
        'Team size: 3-4 members',
        'Arduino/Raspberry Pi/ESP32 allowed',
        'Must demonstrate working prototype',
        'Cloud integration bonus points',
        'Safety standards must be met',
        'Project documentation required'
      ],
      guidelines: [
        'Bring your own components',
        'Power supply provided',
        'WiFi connectivity available',
        'Testing bench provided',
        'Expert guidance available'
      ]
    },
    {
      id: 'tech-quiz',
      title: 'Tech Quiz Competition',
      category: 'Quiz',
      date: 'October 30, 2025',
      time: '2:00 PM - 4:00 PM',
      venue: 'Seminar Hall',
      participants: '2 per team',
      registrationFee: '200',
      prizePool: '15,000',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'Test your knowledge across various tech domains.',
      description: 'A comprehensive quiz covering programming, technology trends, innovations, and general tech awareness. Multiple rounds with increasing difficulty.',
      rules: [
        'Team size: 2 members',
        'Multiple choice and buzzer rounds',
        'No electronic devices allowed',
        'Negative marking in final round',
        'Top 10 teams advance to finals',
        'Quiz master decision is final'
      ],
      guidelines: [
        'Arrive 15 minutes early',
        'Study current tech trends',
        'Cover programming fundamentals',
        'Know about latest innovations',
        'Fair play expected'
      ]
    },
    {
      id: 'design-thinking',
      title: 'Design Thinking Workshop',
      category: 'Workshop',
      date: 'October 30, 2025',
      time: '11:00 AM - 2:00 PM',
      venue: 'Innovation Lab',
      participants: 'Individual',
      registrationFee: '250',
      prizePool: 'Certificates',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'Learn systematic approach to problem-solving.',
      description: 'An interactive workshop on design thinking methodology. Learn how to identify problems, ideate solutions, and create prototypes using systematic approaches.',
      rules: [
        'Individual participation',
        'Active participation required',
        'Bring notebook and pen',
        'Group activities included',
        'Certificate on completion',
        'Attendance mandatory'
      ],
      guidelines: [
        'No prior experience needed',
        'Materials provided',
        'Interactive sessions',
        'Real case studies',
        'Expert facilitators'
      ]
    },
    {
      id: 'paper-presentation',
      title: 'Technical Paper Presentation',
      category: 'Paper Presentation',
      date: 'October 31, 2025',
      time: '9:00 AM - 1:00 PM',
      venue: 'Conference Hall',
      participants: '2-3 per team',
      registrationFee: '300',
      prizePool: '25,000',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'Present your research and innovative ideas.',
      description: 'Present your technical papers on cutting-edge technologies, research findings, or innovative ideas. Get feedback from experts and industry professionals.',
      rules: [
        'Team size: 2-3 members',
        'Paper submission by October 25',
        'Original research required',
        'Plagiarism strictly prohibited',
        '15 minutes presentation + 5 min Q&A',
        'PPT format mandatory'
      ],
      guidelines: [
        'Follow IEEE paper format',
        'Submit abstract first',
        'Bring presentation on USB',
        'Dress code: Formal',
        'Technical depth evaluated'
      ]
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
    eventsGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
      gap: '30px',
    },
    eventCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
    },
    eventCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
    eventImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
    },
    eventContent: {
      padding: '25px',
    },
    eventCategory: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    eventTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '12px',
    },
    eventDescription: {
      fontSize: '15px',
      color: '#cbd5e1',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    eventDetails: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '20px',
    },
    eventDetail: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: '#94a3b8',
    },
    eventActions: {
      display: 'flex',
      gap: '12px',
    },
    button: {
      flex: 1,
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
    },
    viewButton: {
      background: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      border: '1px solid rgba(59, 130, 246, 0.3)',
    },
    registerButton: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#fff',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Technical Events</h1>
        <p style={styles.subtitle}>
          Explore our exciting lineup of competitions, workshops, and challenges
        </p>
      </div>

      <div style={styles.eventsGrid}>
        {eventsData.map((event) => (
          <div
            key={event.id}
            style={styles.eventCard}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.eventCardHover);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
          >
            <img src={event.image} alt={event.title} style={styles.eventImage} />
            <div style={styles.eventContent}>
              <span style={styles.eventCategory}>{event.category}</span>
              <h3 style={styles.eventTitle}>{event.title}</h3>
              <p style={styles.eventDescription}>{event.shortDescription}</p>

              <div style={styles.eventDetails}>
                <div style={styles.eventDetail}>
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div style={styles.eventDetail}>
                  <Users size={16} />
                  <span>{event.participants}</span>
                </div>
                <div style={styles.eventDetail}>
                  <IndianRupee size={16} />
                  <span>₹{event.registrationFee}</span>
                </div>
                <div style={styles.eventDetail}>
                  <Trophy size={16} />
                  <span>₹{event.prizePool}</span>
                </div>
              </div>

              <div style={styles.eventActions}>
                <Link
                  to={`/event/${event.id}`}
                  style={{ ...styles.button, ...styles.viewButton }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  }}
                >
                  <Eye size={18} />
                  View Details
                </Link>
                <Link
                  to="/register"
                  style={{ ...styles.button, ...styles.registerButton }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                  }}
                >
                  <UserPlus size={18} />
                  Register
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
