import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-8 md:mx-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-0 text-center md:text-left">
                {/*-------------------------------Left-----------------------*/}
                <div>
                    <h4 className="text-2xl font-extrabold mb-4">MedSchedule</h4>
                    <p className="text-gray-400">Providing accurate, real-time scheduling for healthcare professionals.</p>
                </div>

                {/*---------------------------Right--------------------------*/}
                <div>
                    <p className="text-xl font-semibold mb-4">Company</p>
                    <ul className="space-y-3">
                        <li className="hover:text-gray-300 cursor-pointer transition-colors duration-300">Home</li>
                        <li className="hover:text-gray-300 cursor-pointer transition-colors duration-300">Contact</li>
                        <li className="hover:text-gray-300 cursor-pointer transition-colors duration-300">About</li>
                        <li className="hover:text-gray-300 cursor-pointer transition-colors duration-300">Privacy Policy</li>
                    </ul>
                </div>

                {/*-------------------------------Center------------------------------*/}
                <div>
                    <p className="text-xl font-semibold mb-4">Get in touch</p>
                    <ul className="space-y-3">
                        <li className="text-gray-400">1111-111-111</li>
                        <li className="text-gray-400">support@medschedule.com</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                <p className="text-gray-500">© 2024 MedSchedule. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
