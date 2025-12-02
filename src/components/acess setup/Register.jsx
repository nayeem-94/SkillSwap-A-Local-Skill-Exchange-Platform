import React from 'react';
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser } = use(AuthContext);

    const [nameError, setNameError] = useState("");


    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (name.length < 5) {
            setNameError("Name should be more then 5 character");
            return;
        } else {
            setNameError("");
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, errorCode);
            });

    }




    return (
        <div className="flex bg-cyan-50 justify-center min-h-screen items-center py-14">
            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl py-7">
                <h2 className="font-bold text-3xl text-center text-indigo-600">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full "
                            placeholder="Enter Your Name"
                            required
                        />

                        {/* Photo Url   */}
                        <label className="label">Photo URL</label>
                        <input
                            name="photourl"
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Photo URL"
                            required
                        />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            required
                        />
                        {/* passowrd  */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            required
                        />


                        {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}

                        <button type="submit" className="btn  mt-4 text-lg  text-white bg-indigo-600">
                            Register
                        </button>
                        <p className="font-semibold text-sm text-center pt-5">
                            Already Have An Account ?{" "}
                            <Link className="text-secondary" to="/login">
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;