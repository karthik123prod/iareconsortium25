import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, MapPin, IndianRupee, Trophy, Clock, ArrowLeft, UserPlus, CheckCircle, AlertCircle } from 'lucide-react';
import background from '/src/assests/background.jpg';
import './EventDetails.css';


function EventDetails() {
  const { eventId } = useParams();
<style>
{`
  @media (max-width: 1024px) {
    .heroImage {
      height: 300px !important;
    }
    .heroContent {
      padding: 25px !important;
    }
    .title {
      font-size: 32px !important;
    }
    .description {
      font-size: 16px !important;
    }
    .section {
      padding: 25px !important;
    }
    .footerActions {
        padding: 0 25px !important;
    }
    .backButtonContainer {
        padding: 20px 25px; /* Adjusting for tablet/small desktop */
        margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    .heroImage {
      height: 250px !important;
    }
    .title {
      font-size: 28px !important;
    }
    .infoGrid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
      gap: 12px !important;
    }
    .registerButton {
      width: 100% !important;
      justify-content: center;
      padding: 14px 0 !important;
    }
    .sectionTitle {
      font-size: 22px !important;
    }
    .sectionContent,
    .listItem {
      font-size: 15px !important;
    }
    
    /* --- FIX FOR FINAL BUTTONS --- */
    .footerActions {
        flex-direction: column !important; /* Stack vertically */
        align-items: stretch !important; /* Full width */
        padding: 0 18px !important; /* Match other sections */
        margin-top: 30px;
    }

    .footerActions div, .footerActions a {
        width: 100% !important; /* Make all elements full width */
        padding: 14px 0 !important;
        margin: 10px 0 !important; /* Add vertical spacing between stacked elements */
        justify-content: center;
        text-align: center;
    }
    .feeLabel {
        font-size: 16px !important;
        margin-left: 0 !important; /* Remove negative margin override */
        padding: 14px 0 !important;
    }
    
  }

  @media (max-width: 480px) {
    .heroImage {
      height: 200px !important;
    }
    .title {
      font-size: 22px !important;
    }
    .description {
      font-size: 14px !important;
    }
    .infoGrid {
      grid-template-columns: 1fr !important;
      gap: 10px !important;
    }
    .section {
      padding: 18px !important;
    }
    .sectionTitle {
      font-size: 20px !important;
    }
    .registerButton {
      font-size: 16px !important;
      padding: 12px !important;
    }
    .backButtonContainer {
        padding: 10px 18px;
        margin-top: 10px;
    }
  }
`}
</style>

  const eventsData = {
    'Webathon': {
      id: 'Webathon',
      title: 'WebNova - Igniting the Future Web',
      category: 'Webathon',
      date: 'October 31 - November 01, 2025',
      participants: '2-4 per team',
      registrationFee: '300',
      pdf: '/docs/Webathon.pdf',
      image: 'https://media.deloitte.com/is/image/deloitte/800-600-governance-privacy',
      description: 'WebNova is an innovative webathon designed to inspire creativity and problem-solving through Prompt Engineering and AI-powered tools. Participants will explore how AI — especially generative AI, large language models, and advanced prompt engineering',
      detailedDescription: 'Participants will explore how AI — especially generative AI, large language models, and advanced prompt engineering — can be used to create adaptive, intelligent, and impactful solutions for real-world problems.',
      rules: [
        'Each team can have 2 to 4 members.',
        'Participants can be from any domain and any Year',
        'Each participant can be part of only one team',
        'Registration Fee: ₹300 per Team'
      ],
      themes: [
        'Participants can choose one theme from the three broad themes:',
        'Smart Society — AI and Prompt Engineering for civic intelligence and public services',
        'Health & Wellbeing — AI-powered solutions for healthcare, wellness, and accessibility.',
        'Reimagine Commerce/Finance — AI-driven innovations for industrial/private sector trade, finance, or personalized commerce.'
      ],
      guidelines: [
        'Refreshments and meals will be provided',
        'Workspace and power outlets are available',
        'Mentors are available for technical guidance',
        'Judging is done based on innovation, Functionalities used, Design, imppact and presentation',
        'Winners will be announced on the same day'
      ],
      abstract: [
        'Detailed abstracts and problem statements for each theme will be sent to the registered mail id one day before the event.',
        'Teams must work on the problem statement provided for their chosen theme.',
        'Participants are expected to develop web-based platforms — working web pages or web applications that address the problem.',
        'Proposed solutions must be original and built within the event duration.',
        'Each team must submit:',
        'A working web page/web application hosted online (any platform)',
        'Source code and documentation of major prompts (GitHub link or downloadable files).',
        'A short presentation/demo explaining of 5-10mins of the solution and how it addresses the problem statement.'
      ]
    },
    'Cyber Security': {
      id: 'Cyber Security',
      title: 'House of Echoes - The evidence isn’t in blood — it’s in bytes',
      category: 'Cyber Security',
      date: 'October 31 - November 01, 2025',
      participants: 'Max 3 members per team',
      registrationFee: '149',
      pdf: '/docs/Cyber Security.pdf',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQFMT-L7TDcxWw/feedshare-shrink_800/feedshare-shrink_800/0/1703223822931?e=2147483647&v=beta&t=gSRHA81ogxul4Ax6JaAfNw-EpkpOIRS3Oz_dejAstz8',
      description: 'Cybercrime Investigation Event — Blending technical analysis with logical deduction and real-world problem-solving. House of Echoes is an investigative cybersecurity event that challenges participants to uncover hidden digital crimes through logic, analysis, and forensic reasoning. ',
      detailedDescription: 'Robo Wars is the ultimate test of engineering, design, and combat strategy. Teams must design, build, and operate robots capable of battling opponents in a specially designed arena. With weight restrictions and safety requirements, this event challenges participants to create the perfect balance between offense, defense, and mobility.',
      rules: [
        'max 3 members per team.',
        '149/- per team.',
        'Inter-department, inter-year and inter-college teams allowed',
        'Must bring at least 1 laptop per team.',
        'Winners will be decided based on methodology and factual presentation.',
        'All participants must maintain confidentiality of the case materials',
        'Internet access and AI tools can be used during the game.',
  
      ],
      themes:[
        'Realistic Scenario Design: Each case mimics authentic cybersecurity events with believable data artifacts.',
        'Layered Clues: Every round integrates logical, technical, and behavioral aspects of cybercrime.',
        'Collaborative Investigation: Participants may work in teams, mirroring real incident response environments.',
        'Awareness Focus: Reinforces cyber hygiene, responsible disclosure, and the ethics of digital investigation.'

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
        'The House of Echoes event aims to promote analytical thinking, ethical investigation skills, and an applied understanding of cybersecurity.',
        'It serves as a platform for students to explore the human, technical, and strategic dimensions of cybercrime, strengthening both awareness and technical proficiency.'
      ]
    },
    'Treasure Hunt': {
      id: 'Treasure Hunt',
      title: 'Techno Hunt - Divide And Conquer Beyond Your Limits',
      category: 'Treasure Hunt',
      date: 'October 31 - November 01, 2025',
      participants: '4 per team',
      registrationFee: '200',
      pdf: '/docs/Treasure Hunt.pdf',
      image: 'https://img.freepik.com/free-photo/flat-lay-hand-holding-magnifying-glass_23-2149617673.jpg?semt=ais_incoming&w=740&q=80',
      description: 'Get ready to ignite your inner tech explorer in “Decode & Conquer”, a thrilling 2-day technical treasure hunt that blends brainpower, coding, and adventure! This isn’t your average hunt — it’s a high-energy quest where each clue challenges your logic, coding skills, and teamwork, pushing you to think smarter and faster at every stage.',
      detailedDescription: 'A thrilling 2-day technical treasure hunt that blends brainpower, coding, and adventure! This isn’t your average hunt — it’s a high-energy quest where each clue challenges your logic, coding skills, and teamwork.',
      rules: [
        'Team size: 4 members',
        'The hunt will have multiple rounds with technical and logical clues to solve.',
        'Mobile phones are not allowed during the event.',
        'A time limit will be given, and the team completing all tasks first will be the winner.',
        'The registration fee is 200/- per team.'
      ],
      themes: [
        'Tech + Adventure',
        'Coding + Mystery Solving',
        'Treasure Hunt + Real-Time Strategy',
        'Teamwork + Competition'
      ],
      guidelines: [
        'Teams must follow the instructions of coordinators  throughout the event.',
        'Clue sharing between teams is strictly prohibited.',
        'Judges’ and organizers’ decisions are final and binding.',
        'Fair play is mandatory – any form of cheating, plagiarism, or unfair assistance will lead to disqualification',
        'Judges decision is final'
      ],
      abstract: [
        'The event unfolds in two intense phases:',
        'Day 1: The Eliminations – Compete through mini technical quizzes, code-breaking challenges, and online puzzles to qualify for the final round.',
        'Day 2: The Grand Hunt – Embark on an immersive indoor-outdoor adventure, completing real-time missions, solving cryptic tech clues, and racing against time to find the final treasure.'
      ]
    },
    'Concrete Canoe': {
      id: 'Concrete Canoe',
      title: 'AquaStruct - The Concrete Canoe Challenge',
      category: 'Concrete Canoe',
      date: 'October 31 - November 01, 2025',
      participants: '1-5 per team',
      registrationFee: '300',
      pdf: '/docs/Concrete Canoe.pdf',
      image: 'https://viterbischool.usc.edu/wp-content/uploads/2025/05/concrete-canoe.jpg',
      description: 'The "AquaStruct" Concrete Canoe Challenge is an event where student teams, typically those studying civil engineering, design, construct, and race a canoe made entirely out of concrete.',
      detailedDescription: 'The challenge focuses on applying engineering principles, project management, and material science to create a water-worthy vessel from a material traditionally known for sinking. Teams are judged on a technical design, an oral presentation, and the final products aesthetics and craftsmanship.',
      rules: [
        'Team size: Maximum 5 members per team.',
        'All members must be enrolled students of the participating college.',
        'Teams must designate a Team Leader responsible for communication with organizers.',
        'Registration fee: ₹ 300 / Team'
      ],
      themes: [
        'Teams can use:',
        'Concrete: Portland cement-based or blended cement.',
        'Aggregates: Fine aggregates only (for smoother surface and lighter weight).',
        'Reinforcements: Fibers (steel, polymer, glass), meshes, rods, or combinations.',
        'Additives:',
        'Superplasticizers for flowable concrete',
        'Silica fume or fly ash for higher strength and reduced permeability',
        'Polymers (latex, epoxy) for improved toughness and water resistance'
      ],
      guidelines: [
        'Canoes should be structurally stable and buoyant',
        'Open to creative shapes and aesthetics, but must not exceed max length and weight.',
        'Surface finish and detailing will be part of evaluation.',
        'Lightweight, hollow structures are encouraged for better buoyancy.'
      ],
      abstract: [
        'Evaluation is done based on Design & Creativity, Material Innovation, Surface Finish & Detailing, Structural Integrity & Buoyancy'
      ]
    },
    'Poster Presentation': {
      id: 'Poster Presentation',
      title: 'EngiVision - Imagine. Innovate. Inspire.',
      category: 'Poster Presentation',
      date: 'October 31 - November 01, 2025',
      participants: '3-4 per team',
      registrationFee: '200',
      pdf: '/docs/Poster Presentation.pdf',
      image: 'https://i.pinimg.com/1200x/00/ea/38/00ea385888c8fcf08c4f3c3ecbb39a5f.jpg',
      description: 'EngiVision 2025 is an interdisciplinary poster presentation event designed to ignite creativity, innovation, and technical communication among budding engineers. ',
      detailedDescription: ' As part of CONSORTIUM 2025, this event provides a platform for students to present groundbreaking ideas, research concepts, and engineering solutions through visually engaging posters Participants are encouraged to merge technical depth with aesthetic presentation, showcasing their unique perspective on engineering challenges, sustainability, and futuristic designs.',
      rules: [
        'Team size: 2-3 members',
        '₹200 per team',
        'Open to all streams and branches',
      ],
      themes: [
        'Round 1: Own Theme',
        'Round 2: Given Theme'
      ],
      guidelines: [
        'Teams must bring their own laptops or drawing materials.',
        'Digital or handmade posters are both accepted.',
        'All entries must be original and free from plagiarism.',
        'Time slots will be strictly followed for each presentation.',
      ],
      abstract: [
        'The decision of judges will be final and binding.',
        'Winners will be judged based on creativity, technical content, clarity, and presentation.'
      ]
    },
    'Project Expo': {
      id: 'Project Expo',
      title: 'VisionX - Unleash the power within your ideas',
      category: 'Project Expo',
      date: 'October 31 - November 01, 2025',
      participants: '3 members per team',
      registrationFee: '300',
      pdf: '/docs/Project Expo.pdf',
      image: 'https://ahduni.edu.in/site/assets/files/30284/1600_x_900_dim_expo.1600x0.1400x0.webp',
      description: 'VisionX is a Project Expo that showcases innovative projects from all engineering departments, promoting creativity, teamwork, and practical learning while encouraging interdisciplinary collaboration and real-world problem-solving.  ',
      detailedDescription: 'A comprehensive quiz covering programming, technology trends, innovations, and general tech awareness. Multiple rounds with increasing difficulty.',
      rules: [
        'Team size: 2 members',
        'All the team members must be present during the project evaluation. ',
        'Teams must designate a Team Leader responsible for communication with organizers.',
        'Registration fee: ₹ 300/ Team'
      ],
      themes: [
        'Any theme is accepted. '
      ],
      guidelines: [
        'The projects are evaluated by faculty concerning different departments. ',
        'Each team will be give 10mins to present their ideas and showcase their prototypes if designed. '
      ],
      abstract: [
        'Problem Definition and objective.',
        'Innovation and Technical approach.',
        'Design, Methodology and Implementation.',
        'Presentation and Communication.',
        'Impact and Sustainability.'
      ]
    },
    'LAN Gaming': {
      id: 'LAN Gaming',
      title: 'BattleLAN - Link up. Lock in. Light it up',
      category: 'LAN Gaming',
      date: 'October 31 - November 01, 2025',
      participants: '3 - 4 members per team ',
      registrationFee: '200',
      pdf: '/docs/LAN Gaming.pdf',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'BattleLAN is an exciting and competitive LAN gaming event combines the thrill of gaming with the creativity of technology, featuring both technical and non-technical games. Participants will compete in teams, showcasing their gaming skills, coding abilities, and creative problem-solving.',
      detailedDescription: 'BattleLAN is more than just a gaming competition — it’s a platform for students to connect, compete, and collaborate. With a perfect mix of fun and technology, this event will be one of the most dynamic highlights of the national-level fest at IARE.',
      
      rules: [
    'Team Size: 3–4 members per team ',
    'Registration Fee: ₹200 per team (common for all games) ',
    'Participants can take part in multiple games, provided scheduling allows. All matches will be conducted on LAN to ensure fair play and stable performance.'
      ],
    themes: [
      'Competitive Gaming and Team Collaboration ',
'Coding under Constraints',
'Fun Meets Technology',
'Creativity and Strategy in Digital Play '
    ],
    guidelines: [
      'Each team must consist of 3–4 members.',
    'Participants must bring their own accessories (headphones, mouse, controller, etc.).',
    'Internet or external software assistance is not allowed unless specified.',
    'Teams must maintain discipline and fair play throughout the event.',
    'Judges’ and organizers’ decisions will be final.',
    'Late entries will not be accepted once a round has started.'
  ],
  abstract: [
    'Each game and technical round will have independent scoring criteria:',
'BGMI & Free Fire: Survival duration, kill count, and adherence to rules.', 
'Code Relay: Code correctness, efficiency, and ability to adapt to surprise constraints.', 
'Tech Dumb Charades: Number of correctly guessed terms and time efficiency. ',
'Final rankings will be based on cumulative performance and adherence to event rules.' 

  ]
    },
    'Short Film':{
      id: 'Short Film',
      title: 'Short Film Contest - Frames of Vision, Tales of Heart',
      category: 'Short Film',
      date: 'October 31 - November 01, 2025',
      participants: 'max 5 members per team',
      registrationFee: '249',
      pdf: '/docs/Short Film.pdf',
      image: 'https://sofy.tv/blog/wp-content/uploads/2018/01/1-41-1200x675.jpg',
      description: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography.',
      detailedDescription: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography. Participants can capture the essence of college life, innovation, and imagination, turning moments into compelling visual stories.',
      rules: [
        'Team Size: Maximum of 5 members.',
        '₹249 per team',
        'Duration: 3 to 10 minutes (including credits).',
        'Format: MP4 only.',
        'Content must be original, positive, and free from vulgar or offensive material.'

      ],
      themes: [
        'Open Theme – choose any meaningful or creative concept.'
      ],
      guidelines: [
        'Ensure all content adheres to college ethics.',
        'Avoid plagiarism or use of copyrighted material.',
        'Late submissions will not be accepted.',
        'Judges’ decisions are final'
      ],
      abstract: [
        'Evaluation will be done based on  on Storyline, Creativity, Cinematography, Acting & Direction.'
      ]
    },
    'Photography':{
      id: 'Photography',
      title: 'Photography Contest - Frames of Vision, Tales of Heart',
      category: 'Photography',
      date: 'October 31 - November 01, 2025',
      participants: 'max 5 members per team',
      registrationFee: '99',
      pdf: '/docs/Photography.pdf',
      image: 'https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg',
      description: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography.',
      detailedDescription: 'Chitrakala – The Cinema Club at IARE proudly presents the Short Film and Photography Contest, organized by the Department of Information Technology as part of Consortium 2k25. This event is a celebration of creativity and storytelling, giving students a platform to showcase their ideas through films and photography. Participants can capture the essence of college life, innovation, and imagination, turning moments into compelling visual stories.',
      rules: [
        'Individual participation only. Each participant can submit a maximum of two photos.',
        'Maximum 2 photos per participant.',
        'Submission Rules: Photos should be in JPEG or PNG format. Basic editing like brightness, cropping, and contrast adjustment is allowed. AI-generated or overly edited images are not permitted.',
        'Organizers reserve the right to disqualify entries violating guidelines.'
      ],
      themes: [
        'Our College Through Your Lens” – Participants must capture photos only within the IARE campus.',
      ],
      guidelines: [
        'Event Duration: The contest will be conducted over two days.',
        'Judging Criteria: Creativity & Originality, Composition, Relevance to Theme, and Technical Quality.',
        'Photos must be original and captured during the event. Plagiarism or use of stock images will result in disqualification. Judges’ decisions will be final.',
        'The judges decision will be final and binding.'
      ],
      abstract: [
        'Whether it’s through the lens of a camera or the art of storytelling, this event encourages participants to express, explore, and inspire.',
        'Judged on Creativity, Composition, Originality, and Technical Quality.'
      ]
    },
    'Paper-Presentation': {
      id: 'Paper-Presentation',
      title: 'Technical Paper Presentation',
      category: 'Paper-Presentation',
      date: 'October 31 - November 01, 2025',
      participants: '2-3 per team',
      registrationFee: '200',
      pdf: '/docs/Paper-Presentation.pdf',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'The Technical Paper Presentation is an event designed to encourage students and professionals to explore, research, and present innovative ideas in various fields of technology and science. Participants prepare and present a paper on a technical topic of their choice—ranging from cutting-edge innovations, case studies, or theoretical research—to demonstrate their knowledge, analytical skills, and creativity.',
      detailedDescription: 'The Technical Paper Presentation provides a platform for students and researchers to present their work on emerging technologies and innovations. Present your research, get valuable feedback from industry experts and academicians, and compete for exciting prizes. Topics span across all domains of technology.',
      rules: [
        'Each team can have a maximum of 3 participants.',
        'The topic of the paper must be related to the themes mentioned below in the details pdf.',
        'Each team will get 8 minutes to present followed by 2 minutes for Q&A.',
        'Papers with >20% similarity (checked via plagiarism tools) will be disqualified.',
        'Participants must carry a college ID card and proof of registration on the day of the event.'
      ],
      themes: [
        'There are different topics under each branch/domain, These themes will be given in Details Pdf attached below',
      ],
      guidelines: [
        'Follow IEEE paper format',
        'Bring Laptops for presentation purpose',
        'Paper length should not exceed 6 pages including references.'
      ],
      abstract: [
        'Paper Review: Submitted papers are screened for originality, relevance, and proper formatting.',
        'Technical Assessment: Judges evaluate the technical depth, innovation, and practical significance of the work.',
        'Presentation Evaluation: Participants are assessed on clarity, confidence, slide design, and time management.',
        'Q&A Session: Judges test the participants’ understanding and ability to defend their ideas.',
        'Final Scoring: Scores from all judges are compiled, and winners are decided based on overall performance.'
      ]
    },
    'Cyber Crime': {
      id: 'Cyber Crime',
      title: 'Murder Mystery – One Crime. A Hundred Suspects. One Winner',
      category: 'Cyber Crime',
      date: 'October 31 - November 01, 2025',
      participants: 'Max 3 members per team',
      registrationFee: '200',
      pdf: '/docs/Cyber Crime.pdf',
      image: 'https://i.pinimg.com/1200x/2f/7e/3d/2f7e3dee2cf9e452805ddc58cce5b380.jpg',
      description: '“Murder Mystery — One Crime. A Hundred Suspects. One Winner” is an immersive investigative challenge that puts participants’ logic, intuition, and teamwork to the ultimate test. Stepping into the role of detectives, participants must decode clues, analyze evidence, and unravel a tangled web of lies to uncover the truth behind a mysterious crime. ',
      detailedDescription: 'The event demands sharp observation, critical thinking, and the ability to separate fact from deception. Every clue, statement, and twist will push participants to think deeper and connect the dots with precision and reasoning. Beyond the thrill of solving the mystery, Murder Mystery emphasizes teamwork, communication, and strategic problem-solving. Accuracy, clarity of logic, and the method used to reach the final verdict will define the best detectives of the game. ',
      rules: [
        'Each team can have maximum of 3 members.',
        'All members must be enrolled students of the participating college. ',
        'Teams must designate a Team Leader responsible for communication with organizers.',
        'Registration Fee: ₹200 per Team'
      ],
      themes: [
        'Participants can choose one theme from the three broad themes:',
        'Smart Society — AI and Prompt Engineering for civic intelligence and public services',
        'Health & Wellbeing — AI-powered solutions for healthcare, wellness, and accessibility.',
        'Reimagine Commerce/Finance — AI-driven innovations for industrial/private sector trade, finance, or personalized commerce.'
      ],
      guidelines: [
        'Attention to clues, evidence collection, and logical reasoning will be part of the evaluation criteria.',
        'Logical justification of every conclusion drawn will be essential; baseless guesses or random assumptions will not be considered valid. ',
        'Attention to minor details and careful sequencing of events will be advantageous in uncovering the true culprit. ',
        'Integrity and fair play are expected from all participants; any form of external assistance or disruption to other teams will lead to disqualification. ',
        'Mentors available for technical guidance',
        'JClues may be presented in various forms such as written evidence, visual hints, or character interactions; participants must remain alert and adaptive to all formats. ',
        'Each team must interpret the evidence in a systematic manner to reconstruct the chain of events leading to the crime.',
        'The ultimate objective is to accurately identify the murderer and provide a logical explanation supporting the deduction. '
      ],
      abstract: [
        'Murder Mystery — One Crime. A Hundred Suspects. One Winner” is an immersive investigative challenge that puts participants’ logic, intuition, and teamwork to the ultimate test.',
        'Stepping into the role of detectives, participants must decode clues, analyze evidence, and unravel a tangled web of lies to uncover the truth behind a mysterious crime. ',
        'The event demands sharp observation, critical thinking, and the ability to separate fact from deception. ',
        'Every clue, statement, and twist will push participants to think deeper and connect the dots with precision and reasoning. ',
        'Beyond the thrill of solving the mystery, Murder Mystery emphasizes teamwork, communication, and strategic problem-solving. ',
        'As time runs out and suspicion grows, only the most perceptive minds will see through the chaos. ',
        'In this battle of wit and instinct, one team will stand above all — uncovering the truth behind the crime. '
      ],
    },
      'AeroExpo': {
      id: 'AeroExpo',
      title: 'AERO EXPO - The sky is not the limit, it’s just the beginning',
      category: 'AeroExpo',
      date: 'October 31 - November 01, 2025',
      participants: 'Max 3 members per team',
      registrationFee: '400',
      pdf: '/AeroExpo.pdf',
      image: 'https://www.virtual-fly.com/wp-content/uploads/AERO-2.png',
      description: 'The Aero Expo is a flagship exhibition dedicated to showcasing innovative models, working prototypes, and detailed exhibits related to Aerospace Engineering, Aviation technology, and related disciplines. This is a non-competitive exhibition designed to foster learning, discussion, and inspiration among students and faculty.',
      detailedDescription:' Participants are encouraged to present their models, research posters, and demonstrations that explain complex concepts in an accessible and engaging way. ',
      rules: [
        'Maximum Team Size: Three members per team.',
        'Registration Fee: ₹400 per team (This event is considered a premium, high-effort showcase).',
        
      ],
      themes: [
        'Participants can choose their own theme.',
      ],
      guidelines: [
        'Exhibit Type: Exhibits can include scale models, working prototypes, simulation demonstrations, or detailed research displays.',
        'Setup: Teams are responsible for bringing all necessary materials, display boards, power adapters, and protective measures for their exhibit. Limited power supply will be available.', 
        'Content: Exhibits should include a concise title, objectives, methodology, and key findings/innovations clearly labeled.',
        'Safety: All prototypes and exhibits must adhere to strict safety guidelines. No live combustion or hazardous materials are permitted. Organizers reserve the right to remove unsafe exhibits.', 
        'Timing: Teams must complete setup by the deadline provided by the coordinators.',
        'Staffing: At least one team member must be present at the exhibit during all designated expo hours to interact with visitors and judges.'
      ],
      abstract: [
        'Model Quality  & Engineering- Focuses on details, craftsmanship, and feasibility of the design. ',
        'Technical Explanation - Focuses on clarity and depth of explanation provided by the team members to visitors. ',
        'Innovation  & Relevance - Novelty of the concept and its significance to modern aerospace/aviation challenges.',
        'Presentation - Overall professional quality of the display area and materials. '      
      ],
    },

    'RC Simulator': {
      id: 'RC Simulator',
      title: 'RC Simulator - The sky is not the limit, it’s just the beginning',
      category: 'RC Simulator',
      date: 'October 31 - November 01, 2025',
      participants: 'Max 3 members per team',
      registrationFee: '300',
      pdf: '/docs/RC Simulator.pdf',
      image: 'https://play-lh.googleusercontent.com/2rzvThYF9et3nXIr0m04iTOy54IdRWBpwvMxc6oHWqRHRop6Jm8nMKA1Am5s7lRLbR0=w526-h296-rw',
      description: 'The RC Simulator event tests participants’ piloting precision and control in a virtual environment. It evaluates flight maneuverability, quick decision-making, and understanding of aerodynamics.Competitors navigate a set course or perform complex aerial tasks.The event uses professional-grade flight simulation software.',
      detailedDescription: ' Competitors will navigate a pre-defined course or complete a series of challenging tasks using professional-grade flight simulation software.',
      rules: [
        'Maximum Team Size: Three members per team.',
        'Registration Fee: ₹300 per team ',
        
      ],
      themes: [
        'Participants can choose their own theme.',
      ],
      guidelines: [
        'Equipment: Participants will use the simulator equipment provided by the organizers. ',
        'Rounds: The competition will consist of three rounds.  ', 
        'Scoring: Scoring will primarily be based on completion time, accuracy, and adherence to virtual flight path constraints. Penalties will be applied for crashes or boundary violations. Takeoff and landing precision will also be taken into consideration for final evaluation.',
        'Fair Play: Any attempt to manipulate the software or hardware will result in immediate disqualification. ', 
        'Timing: Participants should report 30 minutes before their scheduled slot. ',
        'Judges Decision: The judges decision regarding scores and disqualifications will be final and binding. '
      ],
      abstract: [
        'Precision and Control - Focuses on accuracy of flight maneuvers and smooth control inputs.',
        'Time Efficiency  - Focuses on Fastest time taken to successfully complete the defined course.',
        'Damage/Penalty Avoidance  - Minimal crashes or violations of simulation boundaries. '    
      ],
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
    backButtonContainer: { // Corrected: removed negative margins and fixed padding for desktop
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start', 
        padding: '20px 80px', /* Desktop padding */
        marginTop: '80px', 
        zIndex: 5,
        position: 'relative',
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      backgroundColor: '#334155',
      color: '#fff',
      padding: '10px 18px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
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
    }
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Applied backButtonContainer class for responsive padding/margins */}
        <div className="backButtonContainer" style={{
            ...styles.backButtonContainer, 
            marginLeft: '0px' /* Override the problematic inline negative margin */
            }}>
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
        </div>
        
        <div style={styles.hero}>
          <img src={event.image} alt={event.title} className="heroImage" style={styles.heroImage} />
          <div className="heroContent" style={styles.heroContent}>
            <span style={styles.category}>{event.category}</span>
            <h1 className="title" style={styles.title}>{event.title}</h1>
            <p className="description" style={styles.description}>{event.detailedDescription}</p>
            <div className="infoGrid" style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <Calendar size={24} color="#3b82f6" style={styles.infoIcon} />
                <div>
                  <div style={styles.infoText}>{event.date}</div>
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
              
            </div>

            <Link
              to="/register"
              className="registerButton"
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
          <div className="section" style={styles.section}>
            <h2 className="sectionTitle" style={styles.sectionTitle}>
              <CheckCircle size={28} color="#3b82f6" />
              Rules & Regulations
            </h2>
            <ul style={styles.list}>
              {event.rules.map((rule, index) => (
                <li key={index} className="listItem" style={styles.listItem}>
                  <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="section" style={styles.section}>
            <h2 className="sectionTitle" style={styles.sectionTitle}>
              <CheckCircle size={28} color="#3b82f6" />
              Themes/materials
            </h2>
            <ul style={styles.list}>
              {event.themes.map((rule, index) => (
                <li key={index} className="listItem" style={styles.listItem}>
                  <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>


          <div className="section" style={styles.section}>
            <h2 className="sectionTitle" style={styles.sectionTitle}>
              <AlertCircle size={28} color="#3b82f6" />
              Guidelines & Instructions
            </h2>
            <ul style={styles.list}>
              {event.guidelines.map((guideline, index) => (
                <li key={index} className="listItem" style={styles.listItem}>
                  <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="section" style={styles.section}>
            <h2 className="sectionTitle" style={styles.sectionTitle}>
              <CheckCircle size={28} color="#3b82f6" />
              Abstract and Deliverables
            </h2>
            <ul style={styles.list}>
              {event.abstract.map((rule, index) => (
                <li key={index} className="listItem" style={styles.listItem}>
                  <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footerActions">
  
  <div
    className="feeLabel"
    style={{
      fontSize: '18px',
      fontWeight: '600',
      color: '#00df9a',
      backgroundColor: 'rgba(0, 223, 154, 0.1)',
      padding: '10px 20px',
      borderRadius: '10px',
    }}
  >
    💰 Registration Fee: ₹{event.registrationFee || '200 per team'}
  </div>

  <a
    href={`/docs/${event.id}.pdf`}
    download={`${event.title}.pdf`}
    style={{
      background: 'linear-gradient(90deg, #16a34a, #22c55e)',
      color: '#fff',
      padding: '12px 26px',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      textDecoration: 'none',
      boxShadow: '0 4px 10px rgba(34, 197, 94, 0.4)',
      transition: 'all 0.3s ease',
      margin: '0 20px',
    }}
    onMouseOver={(e) => (e.target.style.background = 'linear-gradient(90deg, #15803d, #16a34a)')}
    onMouseOut={(e) => (e.target.style.background = 'linear-gradient(90deg, #16a34a, #22c55e)')}
  >
     View more Details
  </a>

  <a
    href={event.registrationLink || '#'}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
      color: '#fff',
      padding: '12px 26px',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      textDecoration: 'none',
      boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)',
      transition: 'all 0.3s ease',
    }}
    onMouseOver={(e) => (e.target.style.background = 'linear-gradient(90deg, #2563eb, #3b82f6)')}
    onMouseOut={(e) => (e.target.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)')}
  >
    Register
  </a>
</div>


        </div>
      </div>
    </div>
    
  );
}

export default EventDetails;
