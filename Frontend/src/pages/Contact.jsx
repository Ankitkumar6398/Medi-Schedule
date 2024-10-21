import React, { useState } from 'react';
import { assets } from "../assets/assets.js"; // Assuming you have an assets file for icons/images

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted', formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container mx-auto p-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-16 rounded-lg shadow-lg mb-12 text-center">
                <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Have a question? We’d love to hear from you! Reach out and we’ll get back to you shortly.
                </p>
            </div>

            {/* Contact Form Section */}
            <section className="bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Get in Touch</h2>

                <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition duration-200"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition duration-200"
                            required
                        />
                    </div>

                    {/* Subject Input */}
                    <div>
                        <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition duration-200"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                            className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition duration-200"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-purple-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </section>

            {/* Contact Information Section */}
            <section className="mt-12 p-10 bg-gray-50 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Reach Us Directly</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    You can also contact us through the following channels. We're here to assist you with any inquiries.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-8">
                    {/* Phone */}
                    <div className="flex items-center justify-center space-x-4">
                        <img src={assets.phone_icon} alt="Phone Icon" className="w-8 h-8" />
                        <span className="text-lg font-medium text-gray-700">+123-456-7890</span>
                    </div>
                    {/* Email */}
                    <div className="flex items-center justify-center space-x-4">
                        <img src={assets.email_icon} alt="Email Icon" className="w-8 h-8" />
                        <span className="text-lg font-medium text-gray-700">support@medbook.com</span>
                    </div>
                    {/* Location */}
                    <div className="flex items-center justify-center space-x-4">
                        <img src={assets.location_icon} alt="Location Icon" className="w-8 h-8" />
                        <span className="text-lg font-medium text-gray-700">123 Med Street, Health City</span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-12 p-6 rounded-lg shadow-lg">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    {/* Social Media Links */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:scale-110 transition-transform duration-300">
                            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform duration-300">
                            <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform duration-300">
                            <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="text-center mt-4 text-sm text-gray-500">
                        © 2024 MedBook. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
