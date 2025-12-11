import React from 'react';
import { toast } from 'react-toastify';

const Booking = () => {

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        toast.success("Booking Successful!");
        form.reset();
    }
    return (
        <div className='flex justify-center items-center my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-7">
                <h2 className="font-bold text-3xl text-center text-indigo-600">
                    Book your Provider
                </h2>
                <form onSubmit={submitForm} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-full" placeholder="Enter Your Name" required />

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full" placeholder="Email" required />

                        <label className="label">Phone number</label>
                        <input name="phone" type="text" className="input w-full" placeholder="Phone number" required />

                        <button type="submit" className="btn mt-4 text-lg text-white bg-indigo-600">
                            Submit
                        </button>
                    </fieldset>
                </form>


            </div>
        </div>
    );
};

export default Booking;