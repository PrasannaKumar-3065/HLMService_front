import React from 'react';
import { Link } from 'react-router-dom';
import {  Award, MapPin, MessageCircle, Phone, Shield, Star, Tag } from 'lucide-react'
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
          <div className="w-full h-full max-w-7xl flex gap-10 mx-auto items-start">
            <div className="basis-[70%] bg-blue-50 text-center shadow rounded border border-gray-300 grid grid-cols-3 items-center justify-center h-[350px]">
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
              <div className="flex items-start p-4   justify-end col-start-3 col-end-4" style={{ height: "100%" }}>
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <div className="text-sm font-semibold">2.3 miles away</div>
                  <div className="text-sm">ETA: 8 minutes</div>
                </div>
              </div>
            </div>
            <div className='basis-[30%] grid grid-rows-2 md:grid-rows-3 gap-6'>
              <div className="bg-white shadow-md p-4 flex flex-col gap-2">
                <div className="text-lg font-semibold mb-2">Service Status</div>
                <div className="text-gray-600 flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <div className='flex flex-col'><span className='text-sm font-semibold'>Service Confirmed</span>
                  <span className='text-sm text-grey-100'>2:30 PM</span></div>
                </div>
                <div className="text-gray-600 flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <div className='flex flex-col'><span className='text-sm text-green font-semibold'>Provider En Route</span>
                  <span className='text-sm text-grey-100'>Current</span></div>
                </div>
                <div className="text-gray-600 flex items-center">
                    <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                    <div className='flex flex-col'><span className='text-sm font-semibold'>Service In Progress</span>
                    <span className='text-sm text-grey-100'>Pending</span></div>
                  </div>
              </div>
              <div className="bg-white shadow-md p-4 flex flex-col gap-2">
                <div className="text-lg font-semibold mb-2">Your Provider</div>
                <div className="text-gray-600 flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-2"></div>
                  <div className='flex flex-col'><span className='text-sm font-bold'>Mike Johnson</span>
                  <span className='text-sm text-grey-100'>Licensed Plumber</span>
                  <div className='flex items-center space-x-1 mt-1'><div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div><span className='text-sm text-grey-100'>4.9 (127 reviews)</span></div></div>
                </div>
                <div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-gray-700">Background Checked</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-gray-700">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-gray-700">Top Rated Provider</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-400 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </button>
                </div>
              </div>
              <div className="bg-white shadow-md p-4 flex flex-col gap-2 p-6">
                <div className="text-lg font-semibold mb-2">Service Estimate</div>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>Base Service Fee</span>
                    <span className='text-sm font-bold'>$89.00</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>Distance (2.3 miles)</span>
                    <span className='text-sm font-bold'>$11.50</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>Service Fee</span>
                    <span className='text-sm font-bold'>$8.95</span>
                  </div>
                  <hr></hr>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600 font-semibold'>Estimated Total</span>
                    <span className='text-blue-400 text-sm font-bold'>$109.45</span>
                  </div>
                  <div className="text-xs text-gray-500">* Final price may vary based on actual work performed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default LandingTracking;