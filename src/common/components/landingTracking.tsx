import React from 'react';
import { Link } from 'react-router-dom';
import {  MapPin } from 'lucide-react'
import Card from '../layouts/card';

const LandingTracking = () => {
  return (
    <section className="bg-gradient-to-br py-16">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='text-4xl md:text-5xl font-bold mb-4'>
            Real-Time Service Tracking
          </div>
          <div className='text-xl mb-8'>
            Watch your service provider approach in real-time
          </div>
          <div className="w-full h-full max-w-7xl flex gap-10 mx-auto">
            <div className="basis-[70%] bg-blue-50 text-center shadow rounded border border-gray-300 grid grid-cols-3 items-center justify-center">
              <div className="flex items-center justify-center mt-10">
                <div className="relative bottom-40 right-8">
                  <div className="bg-green-400 text-white px-3 py-2 rounded-full text-sm flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                    Provider En Route
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Interactive Map Integration</p>
                <p className="text-sm text-gray-500">Real-time tracking & route optimization</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <div className="text-sm font-semibold">2.3 miles away</div>
                  <div className="text-sm">ETA: 8 minutes</div>
                </div>
              </div>
            </div>
            <div className='basis-[30%] grid grid-rows-2 md:grid-rows-4 gap-6'>
              <div className="bg-white shadow-md p-4">
                <div className="text-lg font-semibold mb-2">Service Provider</div>
                <div className="text-gray-600">John Doe</div>
              </div>
              <div className="bg-white shadow-md p-4">
                <div className="text-lg font-semibold mb-2">Estimated Arrival</div>
                <div className="text-gray-600">15 minutes</div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default LandingTracking;