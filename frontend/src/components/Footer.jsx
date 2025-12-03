import React from 'react';
import { Mail, Phone, MapPin, ShoppingBag, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  // Hide footer on contact page
  if (location.pathname === '/contact' || location.pathname === '/'  ) {
    return null;
  }

  return (
    <footer className="bg-linear-to-r from-rose-700 via-rose-500 to-rose-700 text-white">
      {/* CTA Section */}
      <div className="border-b border-rose-600">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-200 text-lg">
                Let's build something amazing together
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="/contact"
                className="px-8 py-3 bg-white text-rose-700 hover:bg-gray-100 rounded-lg font-semibold transition-all flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rohit-tanwar-rs1612?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-rose-600 hover:bg-rose-800 border-2 border-white rounded-lg font-semibold transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <ShoppingBag className="text-rose-900 w-5 h-5" />
              </div>
              <span className="text-xl font-semibold">Tech<span className="inline-block animate-pulse text-2xl font-bold text-white">Z</span>one</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              We create digital experiences for brands and companies by using technology.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/rohit-tanwar-rs1612?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" className="w-9 h-9 bg-rose-800 hover:bg-rose-700 rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/banna_1210_?igsh=N2szN3Y4Y2dieWJ5" target="_blank" className="w-9 h-9 bg-rose-800 hover:bg-rose-700 rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.16c2.453 0 2.748.01 3.718.054.898.041 1.386.19 1.71.316.43.167.738.367 1.06.69.323.322.523.63.69 1.06.126.324.275.812.316 1.71.044.97.054 1.265.054 3.718s-.01 2.748-.054 3.718c-.041.898-.19 1.386-.316 1.71-.167.43-.367.738-.69 1.06-.322.323-.63.523-1.06.69-.324.126-.812.275-1.71.316-.97.044-1.265.054-3.718.054s-2.748-.01-3.718-.054c-.898-.041-1.386-.19-1.71-.316-.43-.167-.738-.367-1.06-.69-.323-.322-.523-.63-.69-1.06-.126-.324-.275-.812-.316-1.71-.044-.97-.054-1.265-.054-3.718s.01-2.748.054-3.718c.041-.898.19-1.386.316-1.71.167-.43.367-.738.69-1.06.322-.323.63-.523 1.06-.69.324-.126.812-.275 1.71-.316.97-.044 1.265-.054 3.718-.054zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://github.com/Pr-Rajput-Rohit1612"  target="_blank" className="w-9 h-9 bg-rose-800 hover:bg-rose-700 rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:tanwarrohit559@gmail.com" className="w-9 h-9 bg-rose-800 hover:bg-rose-700 rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Latest Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Latest blog</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80&h=80&fit=crop" 
                  alt="Blog post"
                  className="w-16 h-16 rounded object-cover flex shrink-0"
                />
                <div>
                  <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                    I think really important to design...
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <img 
                  src="https://i.ibb.co/h1g9qX8v/1764007766522.jpg" 
                  alt="Blog post"
                  className="w-16 h-16 rounded object-cover flex shrink-0"
                />
                <div>
                  <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                    Recognizing the need is the primary...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Company services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Job opportunities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Creative people
                </a>
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Client support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Latest news
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Company story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Pricing packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex shrink-0 mt-0.5" />
                <a href="mailto:info@yourmail.com" className="text-gray-300 hover:text-white text-sm transition-colors">
                  info@TechZone.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex shrink-0 mt-0.5" />
                <a href="tel:+8885434565" className="text-gray-300 hover:text-white text-sm transition-colors">
                  +91 6377xxx343
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 techzone street , 12th Floor, jaipur, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rose-600">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 TechZone</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Legal notice
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}