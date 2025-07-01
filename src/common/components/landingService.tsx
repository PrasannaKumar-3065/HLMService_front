import React from 'react';
import { Link } from 'react-router-dom';
import {  Wrench, Fan, Truck, PaintBucket, Crosshair } from 'lucide-react'
import Card from '../layouts/card';

const LandingService = () => {
    const serviceCategory = [
        {icon: <Wrench className='text-black h-8 w-8 mx-auto mb-3'/>, heading: 'Repairs', description: 'Plumbing, Electrical'},
        {icon: <Fan className='text-black h-8 w-8 mx-auto mb-3' />, heading: 'Cleaning', description: 'Home, Office'},
        {icon: <Truck className='text-black h-8 w-8 mx-auto mb-3' />, heading: 'Moving', description: 'Local, Long Distance'},
        {icon: <PaintBucket className='text-black h-8 w-8 mx-auto mb-3' />, heading: 'Painting', description: 'Interior, Exterior'}
    ]
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-16">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='text-4xl md:text-5xl font-bold mb-4'>
                Local Services, On-Demand
            </div>
            <div className='text-xl text-blue-100 mb-8'>
                Connect with trusted service providers in your area with real-time tracking
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {serviceCategory.map((category: any, index: any) => (
                    <Card
                    key={index}
                    icon={category?.icon}
                    heading={category?.heading}
                    description={category?.description}
                    />
                ))}
            </div>
            <div className='w-full md:w-auto'>
                <div className='w-[100vh] flex flex-col justify-center p-8 rounded-lg shadow-lg bg-white text-black mx-auto'>
                    <label>Your Location</label> 
                    <div className="flex gap-3 h-10">
                        <div className="relative flex-[7]">
                            <input
                                type="text"
                                placeholder="Enter your location"
                                className="w-full py-0.5 px-2 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-full"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-blue-600 focus:outline-none"
                                onClick={() => { /* handle icon click here */ }}
                                tabIndex={0}
                            >
                                <Crosshair className="h-4 w-4" />
                            </button>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-0.5 rounded-md hover:bg-blue-700 transition-colors flex-[3] text-sm h-full">
                            Find Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default LandingService;