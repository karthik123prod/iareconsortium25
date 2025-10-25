import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Users, IndianRupee, Calendar, Loader } from 'lucide-react';

// Event configuration with team sizes and details
const eventsConfig = {
  'Webathon': {
    title: 'WebNova - Igniting the Future Web',
    teamSize: { min: 2, max: 4 },
    fee: 300,
    logo: '🌐',
    date: 'October 31 - November 01, 2025'
  },
  'Cyber Security': {
    title: 'House of Echoes',
    teamSize: { min: 1, max: 3 },
    fee: 149,
    logo: '🔒',
    date: 'October 31 - November 01, 2025'
  },
  'Treasure Hunt': {
    title: 'Techno Hunt',
    teamSize: { min: 4, max: 4 },
    fee: 200,
    logo: '🗺️',
    date: 'October 31 - November 01, 2025'
  },
  'Concrete Canoe': {
    title: 'AquaStruct',
    teamSize: { min: 1, max: 5 },
    fee: 300,
    logo: '⛵',
    date: 'October 31 - November 01, 2025'
  },
  'Poster Presentation': {
    title: 'EngiVision',
    teamSize: { min: 3, max: 4 },
    fee: 200,
    logo: '🎨',
    date: 'October 31 - November 01, 2025'
  },
  'Project Expo': {
    title: 'VisionX',
    teamSize: { min: 2, max: 3 },
    fee: 300,
    logo: '💡',
    date: 'October 31 - November 01, 2025'
  },
  'LAN Gaming': {
    title: 'BattleLAN',
    teamSize: { min: 3, max: 4 },
    fee: 200,
    logo: '🎮',
    date: 'October 31 - November 01, 2025'
  },
  'Short Film': {
    title: 'Short Film Contest',
    teamSize: { min: 1, max: 5 },
    fee: 249,
    logo: '🎬',
    date: 'October 31 - November 01, 2025'
  },
  'Photography': {
    title: 'Photography Contest',
    teamSize: { min: 1, max: 1 },
    fee: 99,
    logo: '📷',
    date: 'October 31 - November 01, 2025'
  },
  'paper-presentation': {
    title: 'Technical Paper Presentation',
    teamSize: { min: 2, max: 3 },
    fee: 200,
    logo: '📄',
    date: 'October 31 - November 01, 2025'
  },
  'Cyber Crime': {
    title: 'Murder Mystery',
    teamSize: { min: 1, max: 3 },
    fee: 200,
    logo: '🔍',
    date: 'October 31 - November 01, 2025'
  },
  'AeroExpo': {
    title: 'AERO EXPO',
    teamSize: { min: 1, max: 3 },
    fee: 400,
    logo: '✈️',
    date: 'October 31 - November 01, 2025'
  },
  'RC Simulator': {
    title: 'RC Simulator',
    teamSize: { min: 1, max: 3 },
    fee: 300,
    logo: '🚁',
    date: 'October 31 - November 01, 2025'
  }
};

const DISTRICT_PAYMENT_URL = 'https://www.district.in/events/consortium-25-oct31-2025-buy-tickets';

function EventRegistration() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const eventConfig = eventsConfig[eventId];

  // Form state
  const [formData, setFormData] = useState({
    teamLeadName: '',
    college: '',
    rollNumber: '',
    mobileNumber: '',
    email: '',
    teammates: [],
    numberOfTeammates: 0
  });

  useEffect(() => {
    // Initialize teammates based on min team size
    if (eventConfig) {
      const minTeammates = Math.max(0, eventConfig.teamSize.min - 1);
      setFormData(prev => ({
        ...prev,
        numberOfTeammates: minTeammates,
        teammates: Array(minTeammates).fill({ name: '', rollNumber: '' })
      }));
    }
  }, [eventId]);

  if (!eventConfig) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
          <Link to="/events" className="text-blue-400 hover:text-blue-300">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTeammateChange = (index, field, value) => {
    const newTeammates = [...formData.teammates];
    newTeammates[index] = { ...newTeammates[index], [field]: value };
    setFormData({ ...formData, teammates: newTeammates });
  };

  const handleTeammateCountChange = (count) => {
    const newCount = Math.max(0, Math.min(count, eventConfig.teamSize.max - 1));
    const newTeammates = Array(newCount).fill(null).map((_, i) => 
      formData.teammates[i] || { name: '', rollNumber: '' }
    );
    setFormData({ 
      ...formData, 
      numberOfTeammates: newCount,
      teammates: newTeammates 
    });
  };

  const validateStep1 = () => {
    const { teamLeadName, college, rollNumber, mobileNumber, email } = formData;
    if (!teamLeadName || !college || !rollNumber || !mobileNumber || !email) {
      alert('Please fill all team leader details');
      return false;
    }
    if (!/^\d{10}$/.test(mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const totalTeam = formData.numberOfTeammates + 1;
    if (totalTeam < eventConfig.teamSize.min || totalTeam > eventConfig.teamSize.max) {
      alert(`Team size must be between ${eventConfig.teamSize.min} and ${eventConfig.teamSize.max}`);
      return false;
    }
    
    for (let i = 0; i < formData.teammates.length; i++) {
      if (!formData.teammates[i].name || !formData.teammates[i].rollNumber) {
        alert('Please fill all teammate details or remove empty teammates');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) {
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('https://techmochabackend.consortium25.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: eventId,
          eventName: eventConfig.title,
          teamLead: {
            name: formData.teamLeadName,
            college: formData.college,
            rollNumber: formData.rollNumber,
            mobile: formData.mobileNumber,
            email: formData.email
          },
          teammates: formData.teammates.filter(t => t.name && t.rollNumber),
          registrationFee: eventConfig.fee,
          registrationDate: new Date().toISOString()
        })
      });

      if (response.ok) {
        // Redirect to District app for payment
        window.location.href = DISTRICT_PAYMENT_URL;
      } else {
        alert('Registration failed. Please try again or contact support.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/events"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6"
          >
            <ArrowLeft size={20} />
            Back to Events
          </Link>
          
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{eventConfig.logo}</span>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{eventConfig.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {eventConfig.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={16} />
                    {eventConfig.teamSize.min === eventConfig.teamSize.max 
                      ? `${eventConfig.teamSize.min} members`
                      : `${eventConfig.teamSize.min}-${eventConfig.teamSize.max} members`}
                  </span>
                  <span className="flex items-center gap-2">
                    <IndianRupee size={16} />
                    ₹{eventConfig.fee}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
           
           
          </div>
        </div>

        {/* Step 1: Team Lead Details */}
        {step === 1 && (
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Team Lead Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="teamLeadName"
                  value={formData.teamLeadName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">College Name *</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your college name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Roll Number *</label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your roll number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="10-digit mobile number"
                  maxLength="10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email ID *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Continue to Team Details →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Team Details & Submit */}
        {step === 2 && (
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Team Members</h2>
            
            <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                Team size: {eventConfig.teamSize.min === eventConfig.teamSize.max 
                  ? `Exactly ${eventConfig.teamSize.min} members required`
                  : `${eventConfig.teamSize.min} to ${eventConfig.teamSize.max} members`}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Current team: {formData.numberOfTeammates + 1} member(s)
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Number of Teammates (excluding you)
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleTeammateCountChange(formData.numberOfTeammates - 1)}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600"
                  disabled={formData.numberOfTeammates === 0}
                >
                  -
                </button>
                <span className="text-2xl font-bold text-white">{formData.numberOfTeammates}</span>
                <button
                  onClick={() => handleTeammateCountChange(formData.numberOfTeammates + 1)}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600"
                  disabled={formData.numberOfTeammates >= eventConfig.teamSize.max - 1}
                >
                  +
                </button>
              </div>
            </div>

            {formData.teammates.map((teammate, index) => (
              <div key={index} className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <h3 className="text-lg font-semibold text-white mb-4">Teammate {index + 1}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                    <input
                      type="text"
                      value={teammate.name}
                      onChange={(e) => handleTeammateChange(index, 'name', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter teammate name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Roll Number *</label>
                    <input
                      type="text"
                      value={teammate.rollNumber}
                      onChange={(e) => handleTeammateChange(index, 'rollNumber', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter roll number"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Payment Info Banner */}
            <div className="my-6 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <IndianRupee size={20} className="text-green-400" />
                Next: Complete Payment
              </h3>
              <p className="text-slate-300 mb-2">
                After submitting your team details, you'll be redirected to the <strong>District App</strong> to complete your payment securely.
              </p>
              <p className="text-slate-400 text-sm">
                Registration Fee: <strong className="text-white">₹{eventConfig.fee}</strong> • The team leader must sign in to the District App to complete the payment.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-4 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-all"
                disabled={loading}
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Submitting...
                  </>
                ) : (
                  'Submit & Proceed to Payment →'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventRegistration;