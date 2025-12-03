import { useState, useEffect } from 'react';
import Modal from '../components/Model';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSignIn = () => {
    setAuthMode("signin");
    setShowModel(true);
  };

  const handleSignUp = () => {
    setAuthMode("signup");
    setShowModel(true);
  };

  // Colors for icons and confetti
  const colors = ['#e11d48', '#f43f5e', '#fb7185', '#fda4af', '#fecdd3'];
  const shapes = ['circle', 'square', 'triangle'];

  // Icons components
  const icons = [
    // Shopping Bag
    <svg key="bag" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>,
    // Smile
    <svg key="smile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>,
    // Glasses
    <svg key="glasses" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="12" r="4" />
      <circle cx="18" cy="12" r="4" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>,
    // Phone
    <svg key="phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>,
    // Heart
    <svg key="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>,
    // Star
    <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>,
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden relative">

      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(180deg, #fff 0%, #fff1f2 50%, #ffe4e6 100%)'
        }}
      />

      {/* Confetti Shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${i * 6.5}%`,
            top: '-30px',
            width: `${10 + (i % 4) * 4}px`,
            height: `${10 + (i % 4) * 4}px`,
            background: shapes[i % 3] !== 'triangle' ? colors[i % 5] : 'transparent',
            borderRadius: shapes[i % 3] === 'circle' ? '50%' : shapes[i % 3] === 'square' ? '2px' : '0',
            borderLeft: shapes[i % 3] === 'triangle' ? `${(10 + (i % 4) * 4) / 2}px solid transparent` : 'none',
            borderRight: shapes[i % 3] === 'triangle' ? `${(10 + (i % 4) * 4) / 2}px solid transparent` : 'none',
            borderBottom: shapes[i % 3] === 'triangle' ? `${10 + (i % 4) * 4}px solid ${colors[i % 5]}` : 'none',
            animation: `confettiFall ${7 + (i % 4)}s linear infinite`,
            animationDelay: `${i * 0.4}s`
          }}
        />
      ))}

      {/* Falling Icons */}
      {[...Array(18)].map((_, i) => (
        <div
          key={`icon-${i}`}
          className="absolute"
          style={{
            left: `${3 + i * 5.5}%`,
            top: '-50px',
            width: '24px',
            height: '24px',
            color: colors[i % 5],
            animation: `iconFall ${8 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            filter: `drop-shadow(0 0 8px ${colors[i % 5]}50)`
          }}
        >
          {icons[i % icons.length]}
        </div>
      ))}

      {/* Bottom Waves */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: '200px' }}
      >
        <path fill="rgba(225,29,72,0.08)">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z;
                   M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z;
                   M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"
          />
        </path>
        <path fill="rgba(225,29,72,0.12)">
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z;
                   M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,181.3C672,160,768,160,864,176C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z;
                   M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z"
          />
        </path>
        <path fill="rgba(225,29,72,0.18)">
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,234.7C672,224,768,224,864,234.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L0,320Z;
                   M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,261.3C672,277,768,299,864,288C960,277,1056,235,1152,224C1248,213,1344,235,1392,245.3L1440,256L1440,320L0,320Z;
                   M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,234.7C672,224,768,224,864,234.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L0,320Z"
          />
        </path>
      </svg>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Logo with Float + Glow */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div
            className="inline-flex items-center justify-center w-20 h-20 bg-rose-600 rounded-2xl mb-4"
            style={{
              animation: 'logoFloat 3s ease-in-out infinite, logoGlow 2s ease-in-out infinite',
              boxShadow: '0 0 30px rgba(225, 29, 72, 0.5)'
            }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>

        {/* Animated Heading - TechZone */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {/* Tech - Letter by letter animation */}
          <span className="inline-block">
            {'Tech'.split('').map((letter, i) => (
              <span
                key={i}
                className="inline-block text-gray-800"
                style={{
                  animation: 'letterBounce 2s ease-in-out infinite',
                  animationDelay: `${i * 0.1}s`
                }}
              >
                {letter}
              </span>
            ))}
          </span>

          {/* Zone - With gradient and glow */}
          <span className="inline-block relative">
            {'Zone'.split('').map((letter, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #e11d48, #f43f5e, #fb7185)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'letterBounce 2s ease-in-out infinite, textGlow 2s ease-in-out infinite',
                  animationDelay: `${(i + 4) * 0.1}s`
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Animated Underline */}
        <div
          className="h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-6 rounded-full"
          style={{
            width: loaded ? '200px' : '0px',
            transition: 'width 1s ease-out',
            animation: 'underlinePulse 2s ease-in-out infinite'
          }}
        />

        {/* Tagline */}
        <p className={`text-gray-500 text-lg md:text-xl mb-12 max-w-md mx-auto transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Discover amazing products at unbeatable prices.
        </p>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            onMouseEnter={() => setHoveredBtn('signin')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="group relative px-8 py-4 border-2 border-rose-600 text-rose-600 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-rose-600/20 hover:scale-105 w-48"
          >
            <span className={`relative z-10 flex items-center justify-center gap-2 transition-all duration-300 ${hoveredBtn === 'signin' ? 'text-white' : 'text-rose-600'}`}>
              <svg className={`w-5 h-5 transition-transform duration-300 ${hoveredBtn === 'signin' ? 'rotate-12' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </span>
            <div className={`absolute inset-0 bg-rose-600 transition-transform duration-300 ease-out ${hoveredBtn === 'signin' ? 'translate-y-0' : 'translate-y-full'}`}></div>
          </button>

          {/* Sign Up Button */}
          <button
            onClick={handleSignUp}
            onMouseEnter={() => setHoveredBtn('signup')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="group relative px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-rose-600/30 hover:scale-105 w-48 border-2 border-rose-600"
          >
            <span className={`relative z-10 flex items-center justify-center gap-2 transition-all duration-300 ${hoveredBtn === 'signup' ? 'text-rose-600' : 'text-white'}`}>
              <svg className={`w-5 h-5 transition-transform duration-300 ${hoveredBtn === 'signup' ? 'rotate-12 scale-110' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Sign Up
            </span>
            <div className={`absolute inset-0 bg-white transition-transform duration-300 ease-out ${hoveredBtn === 'signup' ? 'translate-y-0' : '-translate-y-full'}`}></div>
          </button>
        </div>

        {/* Features */}
        <div className={`mt-16 flex flex-wrap justify-center gap-8 text-gray-400 text-sm transition-all duration-700 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free Shipping
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure Payment
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            24/7 Support
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModel}
        onClose={() => setShowModel(false)}
        mode={authMode}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          5% { opacity: 0.7; }
          95% { opacity: 0.7; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes iconFall {
          0% { transform: translateY(0) rotate(-15deg) scale(1); opacity: 0; }
          5% { opacity: 0.8; }
          50% { transform: translateY(50vh) rotate(15deg) scale(1.1); }
          95% { opacity: 0.8; }
          100% { transform: translateY(100vh) rotate(-15deg) scale(0.9); opacity: 0; }
        }
        
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes logoGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(225, 29, 72, 0.4); }
          50% { box-shadow: 0 0 60px rgba(225, 29, 72, 0.8); }
        }
        
        @keyframes letterBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes textGlow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(225, 29, 72, 0.3)); }
          50% { filter: drop-shadow(0 0 15px rgba(225, 29, 72, 0.6)); }
        }
        
        @keyframes underlinePulse {
          0%, 100% { opacity: 0.7; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.1); }
        }
      `}</style>
    </div>
  );
}