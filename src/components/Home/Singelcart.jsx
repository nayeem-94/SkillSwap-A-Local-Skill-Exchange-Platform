import React from 'react';

const Singelcart = ({ card }) => {
    // console.log(card);
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-4  rounded-lg">
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
                    <button className="btn text-lg  text-white font-bold bg-gradient-to-r to-indigo-500 from-teal-400 ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Singelcart;