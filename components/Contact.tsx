import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you, ${formData.name}! We'll be in touch shortly.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-sm font-bold text-coffee-400 uppercase tracking-widest mb-2">
              Visit Us
            </h2>
            <h3 className="font-heading text-4xl font-bold text-white mb-8">
              Let's Connect
            </h3>
            <p className="text-stone-400 mb-10 text-lg">
              Have a question about our menu or want to book a private event? Drop us a line or swing by for a chat over coffee.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="h-6 w-6 text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Location</h4>
                  <p>123 Sunshine Avenue</p>
                  <p>San Francisco, CA 94110</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="h-6 w-6 text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Clock className="h-6 w-6 text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Hours</h4>
                  <p>Mon - Fri: 7:00 AM - 7:00 PM</p>
                  <p>Sat - Sun: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="h-6 w-6 text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email</h4>
                  <p>hello@sunnybrewcafe.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-heading text-2xl font-bold text-stone-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 outline-none transition-all text-stone-800"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 outline-none transition-all text-stone-800"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 outline-none transition-all text-stone-800 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-coffee-600 hover:bg-coffee-700 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;