import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props: any)=>{
    return(
        <div className="bg-white text-center flex flex-col items-center">
            {props.icon}
            <div className="p-2"> 
                <h2 className="text-xl font-semibold text-gray-800">{props.heading}</h2>
                <p className="mt-2 text-gray-600 text-sm">
                {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card