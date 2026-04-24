import React, { useState } from 'react';
import { kyemsvg0, kyemsvg1, kyemsvg2, kyemsvg3 } from '../assets';
// Placeholder images using picsum.photos
const branchImages = [
  kyemsvg0,kyemsvg1,kyemsvg2,kyemsvg3
];

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    message: '',
    phone:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', branch: '', message: '',phone:''});
  };

  const branches = [
    {
      name: "Kibaha",
      address: "P.O Box 123 Pwani",
      phone: "+255 777 555-234",
      email: "kibaha@kyemgeneralsupplies.co.tz",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
      image: branchImages[0]
    },
    {
      name: "Morogoro",
      address: "P.O Box 2223 Morogoro",
      phone: "+255 777 555-234",
      email: "morogoro@kyemgeneralsupplies.co.tz",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
      image: branchImages[1]
    },
    {
      name: "Mbeya",
      address: "P.O Box 2223 Mbeya",
      phone: "255 777 555-234",
      email: "mbeya@kyemgeneralsupplies.co.tz",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
      image: branchImages[2]
    },
    {
      name: "Lilongwe",
      address: "P.o Box 789 Lilongwe Malawi",
      phone: "+255 777 555-976",
      email: "lilongwe@kyemgeneralsupplies.co.tz",
      hours: "Mon-Fri: 7am-7pm, Sat: 8am-3pm",
      image: branchImages[3]
    }
  ];

  return (
    <div id="CONTACTUS" className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team or visit one of our branches near you. We're here to answer all your logistics, construction and scrap metal questions.
          </p>
        </div>

        {/* Main Grid: Contact Form + Map/Branch Info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
                            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Branch *
                </label>
                <select
                  name="branch"
                  id="branch"
                  required
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a branch</option>
                  {branches.map((branch, idx) => (
                    <option key={idx} value={branch.name}>{branch.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your scrap metal needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Branch Highlight / Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 bg-gray-200 relative">
              <img
                src="https://picsum.photos/id/15/800/400"
                alt="Headquarters Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
                  <p className="text-gray-800 font-semibold">📍 Find us nationwide</p>
                  <p className="text-sm text-gray-600">Multiple branches serving your area</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Why choose Kyem General Supplies?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">✓ Competitive prices for all construction materials and scrap metals</li>
                <li className="flex items-center gap-2">✓ Construction supplies delivered to your site timely</li>
                <li className="flex items-center gap-2">✓ Just give us a call and location we reach you site to collect the scrap and give you cash</li>
                <li className="flex items-center gap-2">✓ We have enough vehicles to serve you</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Branches Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Branches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={branch.image}
                  alt={`${branch.name} Branch`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{branch.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold">📍</span> {branch.address}
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold">📞</span> {branch.phone}
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold">✉️</span> {branch.email}
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold">🕒</span> {branch.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;