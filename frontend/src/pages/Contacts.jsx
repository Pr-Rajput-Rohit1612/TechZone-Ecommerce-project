import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields!');
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration
      const serviceID = 'service_mdh550h'; 
      const templateID = 'template_06rs3t4'; 
      const publicKey = 'lQtvpBGnbo0x1HgF0'; 

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'TechZone Team', 
      };

      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      alert('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-slate-800/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-500/20 p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Get in Touch with <span className="text-rose-400">TechZone</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Contact Info</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Have a question or need support? We're here to help you with your Fashion journey.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Address:</p>
                  <p className="text-gray-300 text-sm">123 TechStreet , jaipur, India</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email:</p>
                  <p className="text-gray-300 text-sm">support@Techzone.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone:</p>
                  <p className="text-gray-300 text-sm">+91 6377xxx343</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-600/10 to-rose-600/10 rounded-xl border border-purple-500/20">
              <p className="text-sm text-gray-300 italic">
                "We're committed to providing exceptional support and service to all our customers."
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Your Name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Your Message */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="Type your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message →'}
            </button>

            {/* Info Text */}
            <p className="text-xs text-gray-400 text-center mt-4">
              We'll get back to you within 24 hours
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}