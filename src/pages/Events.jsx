import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, IndianRupee, Eye, UserPlus } from 'lucide-react';

function Events() {
  const eventsData = [
    {
      id: 'Paper-Presentation',
      title: 'Technical Paper Presentation-Where Ideas Meet Innovation.',
      category: 'Paper-Presentation',
      date: 'October 31 - November 01, 2025',
      participants: '2-3 per team',
      registrationFee: '200',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'The Technical Paper Presentation is an event designed to encourage students and professionals to explore, research, and present innovative ideas in various fields of technology and science. Participants prepare and present a paper on a technical topic of their choice ',
      description: 'Present your technical papers on cutting-edge technologies, research findings, or innovative ideas. Get feedback from experts and industry professionals.',
      
    },
    {
      id: 'Webathon',
      title: 'WebNova - Igniting the Future Web',
      category: 'Webathon',
      date: 'October 31 - November 01, 2025',
      participants: '2-4 per team',
      registrationFee: '300',
      image: 'https://media.deloitte.com/is/image/deloitte/800-600-governance-privacy',
      shortDescription: 'WebNova is an innovative webathon designed to inspire creativity and problem-solving through Prompt Engineering and AI-powered tools. Participants will explore how AI — especially generative AI, large language models, and advanced prompt engineering',
      description: 'Participants will explore how AI — especially generative AI, large language models, and advanced prompt engineering — can be used to create adaptive, intelligent, and impactful solutions for real-world problems.',
      
    },
    {
      id: 'Project Expo',
      title: 'VisionX - Unleash the power within your ideas',
      category: 'Project Expo',
      date: 'October 31 - November 01, 2025',
      participants: '3 members per team',
      registrationFee: '300',
      image: 'https://news.kiit.ac.in/wp-content/uploads/2022/07/PROJECT-EXPO-2022-Day-2-750x430.jpg',
      shortDescription: 'VisionX is a Project Expo that showcases innovative projects from all engineering departments, promoting creativity, teamwork, and practical learning while encouraging interdisciplinary collaboration and real-world problem-solving.  ',
      description: 'A comprehensive quiz covering programming, technology trends, innovations, and general tech awareness. Multiple rounds with increasing difficulty.',
      
    },
    {
       id: 'LAN Gaming',
      title: 'BattleLAN - Link up. Lock in. Light it up',
      category: 'LAN Gaming',
      date: 'October 31 - November 01, 2025',
      participants: '3 - 4 members per team ',
      registrationFee: '200',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      shortDescription: 'BattleLAN is an exciting and competitive LAN gaming event combines the thrill of gaming with the creativity of technology, featuring both technical and non-technical games. Participants will compete in teams, showcasing their gaming skills, coding abilities, and creative problem-solving.',
      description: 'BattleLAN is more than just a gaming competition — it’s a platform for students to connect, compete, and collaborate. With a perfect mix of fun and technology, this event will be one of the most dynamic highlights of the national-level fest at IARE.',
      
    },
    {
      id: 'Cyber Security',
      title: 'House of Echoes - The evidence isn’t in blood — it’s in bytes',
      category: 'Cyber Security',
      date: 'October 31 - November 01, 2025',
      participants: '2-3 members per team',
      registrationFee: '149',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQFMT-L7TDcxWw/feedshare-shrink_800/feedshare-shrink_800/0/1703223822931?e=2147483647&v=beta&t=gSRHA81ogxul4Ax6JaAfNw-EpkpOIRS3Oz_dejAstz8',
      shortDescription: 'House of Echoes is a cybercrime investigation event that blends analytical reasoning with technical cybersecurity concepts. Participants step into the role of digital forensics specialists, tracing clues through simulated data leaks, encrypted communications, and metadata trails to uncover the identity of a cybercriminal.',
      description: 'Robo Wars is the ultimate test of engineering, design, and combat strategy. Teams must design, build, and operate robots capable of battling opponents in a specially designed arena. With weight restrictions and safety requirements, this event challenges participants to create the perfect balance between offense, defense, and mobility.',
     
    },
    {
      id: 'Treasure Hunt',
      title: 'Techno Hunt - Divide And Conquer Beyond Your Limits',
      category: 'Treasure Hunt',
      date: 'October 31 - November 01, 2025',
      participants: '4 members per team',
      registrationFee: '200',
      image: 'https://img.freepik.com/free-photo/flat-lay-hand-holding-magnifying-glass_23-2149617673.jpg?semt=ais_incoming&w=740&q=80',
      shortDescription: 'Get ready to ignite your inner tech explorer in “Decode & Conquer”, a thrilling 2-day technical treasure hunt that blends brainpower, coding, and adventure! This isn’t your average hunt — it’s a high-energy quest where each clue challenges your logic, coding skills, and teamwork, pushing you to think smarter and faster at every stage.',
      description: 'A thrilling 2-day technical treasure hunt that blends brainpower, coding, and adventure! This isn’t your average hunt — it’s a high-energy quest where each clue challenges your logic, coding skills, and teamwork.',
      
    },
    {
      id: 'Cyber Crime',
      title: 'Murder Mystery – One Crime. A Hundred Suspects. One Winner',
      category: 'Cyber Crime',
      date: 'October 31 - November 01, 2025',
      participants: 'Max 3 members per team',
      registrationFee: '200',
      image: 'https://i.pinimg.com/1200x/2f/7e/3d/2f7e3dee2cf9e452805ddc58cce5b380.jpg',
      shortDescription: '“Murder Mystery — One Crime. A Hundred Suspects. One Winner” is an immersive investigative challenge that puts participants’ logic, intuition, and teamwork to the ultimate test. Stepping into the role of detectives, participants must decode clues, analyze evidence, and unravel a tangled web of lies to uncover the truth behind a mysterious crime. ',
      description: 'The event demands sharp observation, critical thinking, and the ability to separate fact from deception. Every clue, statement, and twist will push participants to think deeper and connect the dots with precision and reasoning. Beyond the thrill of solving the mystery, Murder Mystery emphasizes teamwork, communication, and strategic problem-solving. Accuracy, clarity of logic, and the method used to reach the final verdict will define the best detectives of the game. ',
      
    },
    {
      id: 'AeroExpo',
      title: 'AERO EXPO - The sky is not the limit, it’s just the beginning',
      category: 'AeroExpo',
      date: 'October 31 - November 01, 2025',
      participants: 'Max 3 members per team',
      registrationFee: '400',
      image: 'https://www.virtual-fly.com/wp-content/uploads/AERO-2.png',
      shortDescription: 'The Aero Expo is a flagship exhibition dedicated to showcasing innovative models, working prototypes, and detailed exhibits related to Aerospace Engineering, Aviation technology, and related disciplines. This is a non-competitive exhibition designed to foster learning, discussion, and inspiration among students and faculty.',
      description: ' Participants are encouraged to present their models, research posters, and demonstrations that explain complex concepts in an accessible and engaging way. ',
      
    },
    {
      id: 'RC Simulator',
      title: 'RC Simulator - The sky is not the limit, it’s just the beginning',
      category: 'RC Simulator',
      date: 'October 31 - November 01, 2025',
      participants: 'Max 3 members per team',
      registrationFee: '300',
      image: 'https://play-lh.googleusercontent.com/2rzvThYF9et3nXIr0m04iTOy54IdRWBpwvMxc6oHWqRHRop6Jm8nMKA1Am5s7lRLbR0=w526-h296-rw',
      shortDescription: 'The RC Simulator event tests participants’ piloting precision and control in a virtual environment. It evaluates flight maneuverability, quick decision-making, and understanding of aerodynamics.Competitors navigate a set course or perform complex aerial tasks.The event uses professional-grade flight simulation software.',
      description: ' Competitors will navigate a pre-defined course or complete a series of challenging tasks using professional-grade flight simulation software.',
      
    },
    {
      id: 'Concrete Canoe',
      title: 'AquaStruct - The Concrete Canoe Challenge',
      category: 'Concrete Canoe',
      date: 'October 31 - November 01, 2025',
      participants: '1-5 members per team',
      registrationFee: '300',
      image: 'https://viterbischool.usc.edu/wp-content/uploads/2025/05/concrete-canoe.jpg',
      shortDescription: 'The "AquaStruct" is an event where student teams, typically those are studying civil engineering, design, construction, and race a canoe made entirely out of concrete. The challenge focuses on applying engineering principles, project managementto create a water-worthy vessel from a material traditionally known for sinking. ',
      description: 'The challenge focuses on applying engineering principles, project management, and material science to create a water-worthy vessel from a material traditionally known for sinking. Teams are judged on a technical design, an oral presentation, and the final products aesthetics and craftsmanship.',
      
    },
    {
      id: 'Poster Presentation',
      title: 'EngiVision - Imagine. Innovate. Inspire.',
      category: 'Poster Presentation',
      date: 'October 31 - November 01, 2025',
      time: '10:00 AM - 4:00 PM',
      participants: '3-4 members per team',
      registrationFee: '200',
      image: 'https://i.pinimg.com/1200x/00/ea/38/00ea385888c8fcf08c4f3c3ecbb39a5f.jpg',
      shortDescription: ' The Poster Presentation is an engaging technical event designed to encourage students toshowcase their innovative ideas, research findings, and creative concepts through visuallyappealing posters. Participants will present their ideas concisely, combining both technical depthand design aesthetics. ',
      description: ' As part of CONSORTIUM 2025, this event provides a platform for students to present groundbreaking ideas, research concepts, and engineering solutions through visually engaging posters Participants are encouraged to merge technical depth with aesthetic presentation, showcasing their unique perspective on engineering challenges, sustainability, and futuristic designs.',
      
    },
    {
      id: 'Short Film',
      title: 'Short Film Contest - Frames of Vision, Tales of Heart',
      category: 'Short Film',
      date: 'October 31 - November 01, 2025',
      time: '2:00 PM - 4:00 PM',
      participants: 'max 5 members per team',
      registrationFee: '249',
      image: 'https://sofy.tv/blog/wp-content/uploads/2018/01/1-41-1200x675.jpg',
      shortDescription: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography.',
      description: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography. Participants can capture the essence of college life, innovation, and imagination, turning moments into compelling visual stories.',
      
    },
    {
      id: 'Photography',
      title: 'Photography Contest - Frames of Vision, Tales of Heart',
      category: 'Photography',
      date: 'October 31 - November 01, 2025',
      time: '2:00 PM - 4:00 PM',
      participants: 'max 5 members per team',
      registrationFee: '99',
      image: 'https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg',
      shortDescription: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography.',
      description: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography. Participants can capture the essence of college life, innovation, and imagination, turning moments into compelling visual stories.',
      
    },
    
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
                
              </div>

              <div style={styles.eventActions}>
                <Link
                  to={`/events/${event.id}`}
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
      <style>
{`
  /* ---------- Responsive Design ---------- */

  /* Tablets (<= 1024px) */
  @media (max-width: 1024px) {
    h1 {
      font-size: 44px !important;
    }
    p {
      font-size: 18px !important;
    }
    .eventsGrid {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)) !important;
      gap: 20px !important;
    }
    .eventCard img {
      height: 200px !important;
    }
  }

  /* Mobile (<= 768px) */
  @media (max-width: 768px) {
    h1 {
      font-size: 36px !important;
    }
    p {
      font-size: 16px !important;
    }
    .eventsGrid {
      grid-template-columns: 1fr !important;
      gap: 18px !important;
    }
    .eventCard {
      margin: 0 auto !important;
      width: 95% !important;
    }
    .eventCard img {
      height: 180px !important;
    }
    .eventContent {
      padding: 20px !important;
    }
    .eventTitle {
      font-size: 20px !important;
    }
    .eventDescription {
      font-size: 14px !important;
    }
    .eventDetails {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    .eventActions {
      flex-direction: column !important;
    }
    .eventActions a {
      width: 100% !important;
      text-align: center !important;
    }
  }

  /* Small Mobile (<= 480px) */
  @media (max-width: 480px) {
    h1 {
      font-size: 30px !important;
    }
    p {
      font-size: 14px !important;
    }
    .eventCard img {
      height: 160px !important;
    }
  }
`}
</style>

    </div>
  );
}

export default Events;
