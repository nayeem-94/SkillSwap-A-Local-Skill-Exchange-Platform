import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router";
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from "firebase/auth"; // import this
import { toast } from 'react-toastify';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
            return;
        } else {
            setNameError("");
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                toast.success("Successfully account are created!");
                // ✅ Update displayName and photoURL
                updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photourl
                })
                    .then(() => {
                        console.log("Profile updated successfully");
                        navigate("/dashboard");
                    })
                    .catch((error) => {
                        console.error("Error updating profile:", error);
                    });

            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <div className="flex bg-cyan-50 justify-center min-h-screen items-center py-14">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-7">
                <h2 className="font-bold text-3xl text-center text-indigo-600">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-full" placeholder="Enter Your Name" required />

                        <label className="label">Photo URL</label>
                        <input name="photourl" type="text" className="input w-full" placeholder="Enter Your Photo URL" required />

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full" placeholder="Password" required />

                        {nameError && <p className="text-red-400 text-xs">{nameError}</p>}

                        <button type="submit" className="btn mt-4 text-lg text-white bg-indigo-600">
                            Register
                        </button>
                    </fieldset>
                </form>

                <p className="font-semibold text-center">
                    Already Have An Account?{" "}
                    <Link className="text-secondary" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
