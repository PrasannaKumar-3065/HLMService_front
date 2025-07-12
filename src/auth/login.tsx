import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props: any) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-blue-50">
            <div className='w-[30%] h-[50%] bg-white p-6 rounded shadow-lg flex flex-col justify-between'>
                <div className="flex-shrink-0 mb-4">
                    <div className="text-2xl font-bold text-blue-600 flex items-center">
                        HLM Service
                    </div>
                </div>
                <hr></hr>
                <form className="flex flex-col space-y-4 mt-5 w-full">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        className="border p-2 rounded w-full"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="border p-2 rounded w-full"
                    />
                    <button className='mt-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out'
                        type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
