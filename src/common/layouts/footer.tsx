import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <div className="text-2xl font-bold text-primary mb-4">
                        HLM Service
                    </div>
                    <p className="text-gray-400">
                        Connecting customers with trusted local service providers through real-time tracking and transparent pricing.
                    </p>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>For Customers</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/dashboard" className="text-gray-400 hover:text-primary">Find Services</Link>
                        </li>
                        <li>
                            <Link to="/billing" className="text-gray-400 hover:text-primary">How it Works</Link>
                        </li>
                        <li>
                            <Link to="/provider" className="text-gray-400 hover:text-primary">Saftey</Link>
                        </li>
                        <li>
                            <Link to="/admin" className="text-gray-400 hover:text-primary">Support</Link> 
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>For Providers</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/dashboard" className="text-gray-400 hover:text-primary">Become a Provider</Link>
                        </li>
                        <li>
                            <Link to="/billing" className="text-gray-400 hover:text-primary">Provider App</Link>
                        </li>
                        <li>
                            <Link to="/provider" className="text-gray-400 hover:text-primary">Requirements</Link>
                        </li>
                        <li>
                            <Link to="/admin" className="text-gray-400 hover:text-primary">Earnings</Link> 
                        </li>
                    </ul>
                </div><div>
                    <h3 className='font-semibold mb-4'>Company</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/dashboard" className="text-gray-400 hover:text-primary">About Us</Link>
                        </li>
                        <li>
                            <Link to="/billing" className="text-gray-400 hover:text-primary">Careers</Link>
                        </li>
                        <li>
                            <Link to="/provider" className="text-gray-400 hover:text-primary">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/admin" className="text-gray-400 hover:text-primary">Terms of Service</Link> 
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} HLMService. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;