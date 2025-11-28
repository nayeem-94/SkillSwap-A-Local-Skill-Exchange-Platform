import React from 'react';
import { useLoaderData } from 'react-router';
import Singelcart from './Singelcart';


const Allcard = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div className='flex justify-center flex-col gap-4 my-8'>
                <h2 className='text-4xl font-bold text-center mt-10 text-cyan-500 '>All Skills of Different types of people <br></br> in a singel place</h2>
                <p className='text-lg text-center font-semibold text-gray-400'> Explore a diverse range of skills offered by our community members, all in one convenient location.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center p-5'>
                {data.map(card => (
                    <Singelcart key={card.skillId} card={card}></Singelcart>
                ))}
            </div>
        </div>
    );
};

export default Allcard;