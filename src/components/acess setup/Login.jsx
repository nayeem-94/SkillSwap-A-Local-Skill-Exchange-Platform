import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [error, setError] = useState("");
    const { signIn, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const notify = () => toast("You are Logged in!");

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                form.reset();
                setLoading(false); // optional if you have a loading state
                toast.success("Login Successful!");

                // Redirect to the original page or default "/"
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    };

    return (
        <div className="flex bg-cyan-50 justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-7">
                <h2 className="font-bold text-3xl text-center text-indigo-600">
                    Login to your account
                </h2>
                <form onSubmit={handleLogin} className="card-body flex flex-col gap-4">
                    <label className="label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        required
                    />

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

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="btn mt-4 text-lg text-white bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="font-semibold text-center pt-2">
                    Don’t have an account?{" "}
                    <Link className="text-secondary" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default Login;
