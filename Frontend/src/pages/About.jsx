import React from 'react';
import { assets } from "../assets/assets.js"; // assuming you have an assets file

const About = () => {
    return (
        <div className="container mx-auto p-6">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white p-10 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
                <p className="text-lg text-center max-w-2xl mx-auto">
                    Welcome to MedBook, your trusted partner for reliable healthcare appointments and expert consultations. We’re dedicated to providing a seamless experience for patients and healthcare providers.
                </p>
            </div>

            {/* Our Mission Section */}
            <section className="mt-12 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to simplify healthcare by connecting patients with qualified doctors and specialists. We aim to offer a convenient and stress-free way for people to manage their health and schedule appointments online.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    At MedBook, we believe in leveraging technology to bring patients closer to healthcare professionals and ensure they receive the best medical advice and treatment. We are passionate about enhancing the healthcare experience for everyone.
                </p>
            </section>

            {/* Why Choose Us Section */}
            <section className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                    <li>Access to a wide network of verified doctors and specialists.</li>
                    <li>Easy-to-use platform for booking appointments and consultations.</li>
                    <li>Affordable fees with transparent pricing.</li>
                    <li>Available for both in-person and virtual consultations.</li>
                    <li>Committed to providing excellent customer support and healthcare guidance.</li>
                </ul>
            </section>

            {/* Our Team Section */}

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white mt-12 p-6 rounded-lg shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p>Email: support@medbook.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/appointment" className="hover:underline">Book Appointment</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-3">
                            <a href="#" className="hover:scale-110 transition-transform">
                                <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform">
                                <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform">
                                <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4 text-sm text-gray-400">
                    © 2024 MedBook. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default About;
