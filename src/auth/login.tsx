import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props: any)=>{
    return(
        <div className="w-screen h-screen flex items-center justify-center bg-blue-50">
            <div className='bg-white p-6 rounded shadow-md'>
                <div className="flex-shrink-0 cursor-pointer">
                    <div className="text-2xl font-bold text-blue-600 flex items-center">
                    HLM Service
                    </div>
                </div>
                <hr></hr>
                <form className="flex flex-col space-y-4 mt-5">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="border p-2 rounded"
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                />
                </form>
            </div>
        </div>
    )
}

export default Login
