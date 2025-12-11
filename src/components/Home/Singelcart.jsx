import React from 'react';
import { NavLink } from 'react-router';

const Singelcart = ({ card }) => {
    // console.log(card);
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-4  rounded-xl shadow-2xl ">
            <figure className=' h-[200px]'>
                <img
                    src={card.image}
                    alt={card.title} />
            </figure>
            <div className="card-body ">
                <h2 className="text-xl h-12"> <span className='font-bold text-xl'>Skill</span> : {card.skillName}</h2>
                <h3 className='text-lg mt-2 font-semibold'>Rating :  <span className=' font-bold text-red-500'> ** {card.rating} **   </span></h3>
                <h3 className='text-lg font-semibold'>Price : <span className='text-green-500 font-bold'> {card.price}$ </span></h3>

                <div className="card-actions justify-center mt-6">
                    <NavLink to={`/skill-details/${card.skillId}`}>
                        <button className="btn text-lg  text-white font-bold bg-gradient-to-r from-indigo-600 to-purple-600 ">View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Singelcart;