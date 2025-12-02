import React, { use, useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const [error, setError] = useState("");
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // form.reset();
                //  navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
            });

    };

    return (
        <div className="flex bg-cyan-50 justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl py-7">
                <h2 className="font-bold text-3xl text-center text-indigo-600">
                    Login your account
                </h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
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
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                        {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}

                        <button type="submit" className="btn  mt-4 text-lg  text-white bg-indigo-600">
                            Login
                        </button>
                        <p className="font-semibold text-sm text-center pt-5">
                            Dont’t Have An Account ?{" "}
                            <Link className="text-secondary" to="/register">
                                Register
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;