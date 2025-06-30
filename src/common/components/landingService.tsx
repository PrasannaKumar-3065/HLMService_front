import React from 'react';
import { Link } from 'react-router-dom';
import {  Wrench, Fan, Truck, PaintBucket } from 'lucide-react'
import Card from '../layouts/card';

const LandingService = () => {
    const serviceCategory = [
        {icon: <Wrench className='text-black'/>, heading: 'Repairs', description: 'Plumbing, Electrical'},
        {icon: <Fan className='text-black' />, heading: 'Cleaning', description: 'Home, Office'},
        {icon: <Truck className='text-black' />, heading: 'Moving', description: 'Local, Long Distance'},
        {icon: <PaintBucket className='text-black' />, heading: 'Painting', description: 'Interior, Exterior'}
    ]
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-16">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                Local Services, On-Demand
            </div>
            <div>
                Connect with trusted service providers in your area with real-time tracking and transparent pricing.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {serviceCategory.map((category: any, index: any) => (
                    <Card
                    key={index}
                    icon={category?.icon}
                    heading={category?.heading}
                    description={category?.description}
                    />
                ))}
            </div>
            <div>
                Location
            </div>
        </div>
    </section>
  );
}

export default LandingService;