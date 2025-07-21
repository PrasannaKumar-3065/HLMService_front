import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import { Section } from 'lucide-react';

const BillingView = (props: any)=>{
    const [activeTab, setActiveTab] = useState('tab1');
    return(
        <>
            <Navbar/>
                <Section className='text-2xl font-bold text-center my-8'>
                    Billing Information
                </Section>
                <div className='max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md'>
                    <p className='text-gray-700 mb-4'>
                        This is the billing information page. Here you can manage your billing details, view invoices, and update payment methods.
                    </p>
                    <div className="flex justify-center space-x-4">
                    <div className="border-e border-gray-300 dark:border-neutral-700">
                        <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        <button
                            type="button"
                            onClick={() => setActiveTab('tab1')}
                            className={`py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 text-sm whitespace-nowrap
                            ${
                                activeTab === 'tab1'
                                ? 'border-blue-500 text-blue-600 dark:text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500'
                            }`}
                            id="tab-1"
                            aria-selected={activeTab === 'tab1'}
                            role="tab"
                        >
                            Tab 1
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tab2')}
                            className={`py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 text-sm whitespace-nowrap
                            ${
                                activeTab === 'tab2'
                                ? 'border-blue-500 text-blue-600 dark:text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500'
                            }`}
                            id="tab-2"
                            aria-selected={activeTab === 'tab2'}
                            role="tab"
                        >
                            Tab 2
                        </button>
                        </nav>
                    </div>
                    <div className="ms-3">
                        {activeTab === 'tab1' && (
                        <div role="tabpanel" aria-labelledby="tab-1">
                            Tab 1 content goes here. You can add any information related to billing, such as payment methods, invoices, and subscription details.
                        </div>
                        )}
                        {activeTab === 'tab2' && (
                        <div role="tabpanel" aria-labelledby="tab-2">
                            Tab 2 content goes here. You can add any information related to billing, such as payment methods, invoices, and subscription details.
                        </div>
                        )}
                    </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default BillingView;