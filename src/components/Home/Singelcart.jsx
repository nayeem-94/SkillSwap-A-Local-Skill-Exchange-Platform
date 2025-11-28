import React from 'react';

const Singelcart = ({ card }) => {
    console.log(card);
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className=' h-[200px]'>
                <img
                    src={card.image}
                    alt={card.title} />
            </figure>
            <div className="card-body">
                <h2 className="text-xl"> <span className='font-bold text-xl'>Skill</span> : {card.skillName}</h2>
                <h3 className='text-lg font-semibold'>Rating :  <span className=' font-bold text-red-500'> ** {card.rating} **   </span></h3>
                <h3 className='text-lg font-semibold'>Price : <span className='text-green-500 font-bold'> {card.price}$ </span></h3>
                <div className="card-actions justify-center ">
                    <button className="btn btn-primary ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Singelcart;