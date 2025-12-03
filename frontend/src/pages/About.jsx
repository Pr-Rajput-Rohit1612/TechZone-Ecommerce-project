import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "Prescripto",
      description: "Online doctor booking app with appointment scheduling and patient management.",
      icon: "🏥",
      github: "https://github.com/yourusername/prescripto",
      bg: "bg-gradient-to-br from-blue-400 to-blue-600",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      name: "Todo App",
      description: "A sleek task management app with priorities, deadlines, and categories.",
      icon: "✅",
      github: "https://github.com/yourusername/todo-app",
      bg: "bg-gradient-to-br from-green-400 to-green-600",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
    },
    {
      name: "Music App Clone",
      description: "Spotify-inspired music streaming platform with playlists and audio controls.",
      icon: "🎵",
      github: "https://github.com/yourusername/music-app",
      bg: "bg-gradient-to-br from-purple-400 to-purple-600",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop"
    },
    {
      name: "Flipkart Clone",
      description: "Full-featured e-commerce platform with cart, checkout, and product filters.",
      icon: "🛒",
      github: "https://github.com/yourusername/flipkart-clone",
      bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
    },
    {
      name: "Golf Website",
      description: "Premium golf club site with course info, booking system, and member portal.",
      icon: "⛳",
      github: "https://github.com/yourusername/golf-site",
      bg: "bg-gradient-to-br from-emerald-400 to-teal-600",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop"
    },
    {
      name: "Personal Portfolio",
      description: "Modern portfolio showcasing skills, projects, and professional experience.",
      icon: "💼",
      github: "https://github.com/yourusername/portfolio",
      bg: "bg-gradient-to-br from-pink-400 to-rose-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-16">
      {/* Slider Container with Background Images */}
      <div className="overflow-hidden rounded-3xl border border-white/30 shadow-2xl relative">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full relative">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 backdrop-blur-sm"></div>
              </div>

              {/* Content on top of image */}
              <div className="relative z-10 p-14 text-center">
                {/* Icon with gradient background */}
                <div className={`inline-block ${project.bg} p-8 rounded-3xl shadow-xl mb-6 float transform hover:scale-110 transition-all duration-300`}>
                  <div className="text-6xl">{project.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">{project.name}</h3>
                <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                  {project.description}
                </p>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold 
                  px-10 py-3 rounded-full shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 
        hover:from-indigo-600 hover:to-purple-700 text-white text-2xl w-14 h-14 rounded-full 
        shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 
        flex items-center justify-center font-bold"
      >
        ←
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 
        hover:from-indigo-600 hover:to-purple-700 text-white text-2xl w-14 h-14 rounded-full 
        shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 
        flex items-center justify-center font-bold"
      >
        →
      </button>

      {/* Dots Indicator - Enhanced */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-500 shadow-lg ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 w-10 shadow-pink-500/50' 
                : 'bg-white/50 w-3 hover:bg-white/70 hover:w-6'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
    navigate(0); 
  }

  return (
    <>
      {/* Inline Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .fadeIn { animation: fadeIn 1.2s ease-in-out; }
        .fadeUp { animation: fadeUp 1.2s ease-in-out; }
        .float { animation: float 3s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-rose-500 via-rose-400 to-rose-600 
      flex items-center justify-center py-16 px-6 fadeIn">

        <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl border border-white/20 
        rounded-3xl shadow-2xl p-12">

          
          <h1 className="text-center text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl fadeUp">
            Welcome to <span className="text-white/95">TechZone</span>
          </h1>

          <p className="text-center mt-4 text-white/90 text-lg max-w-3xl mx-auto fadeUp">
            Discover a next-generation shopping experience. Blending fashion, electronics, 
            and modern lifestyle — all in one beautiful digital space.
          </p>

          
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20 
            hover:scale-105 transition-all duration-300 float fadeUp cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🛍️</div>
              <h2 onClick={handleClick} className="text-xl font-semibold text-white mb-1">Stylish Fashion</h2>
              <p className="text-white/80 text-sm">Trendy outfits curated for a modern lifestyle.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20 
            hover:scale-105 transition-all duration-300 float fadeUp cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">⚡</div>
              <h2 onClick={handleClick} className="text-xl font-semibold text-white mb-1">Smart Electronics</h2>
              <p className="text-white/80 text-sm">Latest gadgets built for speed, power & comfort.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20
            hover:scale-105 transition-all duration-300 float fadeUp cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🚚</div>
              <h2 onClick={handleClick} className="text-xl font-semibold text-white mb-1">Fast Delivery</h2>
              <p className="text-white/80 text-sm">Swift, safe, and reliable shipping at your door.</p>
            </div>

          </div>

          
          <div className="mt-16 text-center fadeUp">
            <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
              Shop Smarter. Live Better.
            </h3>
            <p className="text-white/85 max-w-2xl mx-auto text-base">
              At TechZone, we blend aesthetics with innovation — giving you a premium shopping
              experience with high-quality products and a beautifully simple interface.
            </p>
          </div>

          <div className="mt-20 fadeUp">
            <h2 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-lg">
              Our Amazing Projects
            </h2>
            <p className="text-white/85 text-center mb-10 max-w-2xl mx-auto">
              Check out some of our best work — from doctor appointments to music streaming.
            </p>

            <ProjectSlider />
          </div>

          {/* Portfolio Link */}
          <div className="mt-16 text-center fadeUp">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
              text-white font-bold text-lg px-10 py-4 rounded-full 
              shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 pulse"
            >
              🔗 View Full Portfolio on GitHub
            </a>
          </div>

        </div>
      </div>
    </>
  );
}