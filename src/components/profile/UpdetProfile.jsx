import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const UpdetProfile = () => {

    const { updateUser,setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const UpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;

        updateUser({
            displayName: name,
            photoURL: photourl,
        }).then(() => {
            
            toast.success("Profile Updated Successfully! ");
            toast.success("Please Refresh the page to see changes.");
            form.reset();


        }).catch((error) => {
            toast.error(error.message);
        });

        setLoading(false);
        navigate('/dashboard');

        form.reset();
    }

    return (
        <div className='flex justify-center items-center py-12 bg-cyan-50'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-7">
                <h2 className="font-bold text-3xl text-center text-indigo-600">
                    Update your Profile
                </h2>
                <form onSubmit={UpdateProfile} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-full" placeholder="Enter Your Name" required />

                        <label className="label">Photo URL</label>
                        <input name="photourl" type="text" className="input w-full" placeholder="Enter Your Photo URL" required />

                        
                        <button type="submit" className="btn mt-4 text-lg text-white bg-indigo-600">
                            Update
                        </button>
                    </fieldset>
                </form>


            </div>

        </div>
    );
};

export default UpdetProfile;