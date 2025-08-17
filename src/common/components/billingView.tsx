import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import { Section } from 'lucide-react';

const BillingView = (props: any)=>{
    const [activeTab, setActiveTab] = useState('tab1');
    const hlmBilling = [{
        id: 1,
        name: 'Billing Information',
        description: 'Manage your billing details, view invoices, and update payment methods.',
        link: '/billing',
        invoices: [
            { id: 1, date: '2023-01-01', amount: '$100.00', status: 'Paid' },
            { id: 2, date: '2023-02-01', amount: '$150.00', status: 'Pending' },
            { id: 3, date: '2023-03-01', amount: '$200.00', status: 'Paid' }
        ],
        paymentMethods: [
            { id: 1, type: 'Credit Card', lastFour: '1234', expiration: '12/24' },
            { id: 2, type: 'PayPal', email: '1@gmail.com' }
        ],
        subscriptions: [
            { id: 1, plan: 'Basic', status: 'Active', nextBillingDate: '2023-04-01' },
            { id: 2, plan: 'Premium', status: 'Inactive', nextBillingDate: '2023-05-01' }
        ],
        reciept: [{ id: 1, date: '2023-01-01', amount: '$100.00', status: 'Paid' }],
        paymentHistory: [{ id: 1, date: '2023-01-01', amount: '$100.00', status: 'Paid' }],
        paymentMethodsList: [{ id: 1, type: 'Credit Card', lastFour: '1234', expiration: '12/24' }, { id: 2, type: 'PayPal', email: '1@gmail.com' }],
        subscriptionsList: [{ id: 1, plan: 'Basic', status: 'Active', nextBillingDate: '2023-04-01' }, { id: 2, plan: 'Premium', status: 'Inactive', nextBillingDate: '2023-05-01' }],
    },{
        id: 2,
        name: 'Payment History',
        description: 'View your payment history and manage your payment methods.',
        link: '/payment-history',
        invoices: [],
        paymentMethods: [],
        subscriptions: [],
        reciept: [],
        paymentHistory: [],
        paymentMethodsList: [],
        subscriptionsList: []
    },{
        id: 3,
        name: 'Subscriptions',
        description: 'Manage your subscriptions and view subscription details.',
        link: '/subscriptions',
        invoices: [],
        paymentMethods: [],
        subscriptions: [],
        reciept: [],
        paymentHistory: [],
        paymentMethodsList: [], 
        subscriptionsList: []
    }]
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
                            <div className='w-full text-gray-700 mb-4'>
                                {hlmBilling.map((billing) => {
                                    return (
                                        <div key={billing.id} className='mb-6'>
                                            <h3 className='text-lg font-semibold'>{billing.name}</h3>
                                            <p className='text-sm text-gray-500'>{billing.description}</p>
                                            <Link to={billing.link} className='text-blue-600 hover:underline'>View Details</Link>
                                            <div className='mt-4'>
                                                <h4 className='font-semibold'>Invoices:</h4>
                                                <ul>
                                                    {billing.invoices.map(invoice => (
                                                        <li key={invoice.id}>{invoice.date} - {invoice.amount} - {invoice.status}</li>
                                                    ))}
                                                </ul>
                                                <h4 className='font-semibold mt-2'>Payment Methods:</h4>
                                                <ul>
                                                    {billing.paymentMethods.map(method => (
                                                        <li key={method.id}>{method.type} - {method.lastFour || method.email}</li>
                                                    ))}
                                                </ul>
                                                <h4 className='font-semibold mt-2'>Subscriptions:</h4>
                                                <ul>
                                                    {billing.subscriptions.map(subscription => (
                                                        <li key={subscription.id}>{subscription.plan} - {subscription.status} - Next Billing: {subscription.nextBillingDate}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
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