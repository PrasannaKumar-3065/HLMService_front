import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props: any)=>{
    return(
        <div className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-all cursor-pointer">
            <div className="p-6 text-center"> 
                {props.icon}
                <h2 className="font-semibold mb-2">{props.heading}</h2>
                <p className="text-sm text-blue-100">
                {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card