import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router";

const ForgetPassword = () => {

    const [email, setEmail] = useState("");
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
            const form = e.target;
        const email = form.email.value;
        if (!email) return toast.error("Email is required!");

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent!");
            setEmail("");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center py-10">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-7">
                <h2 className="font-bold text-3xl text-center text-indigo-600">
                    Rest Password
                </h2>
                <form onSubmit={handleSubmit} className="card-body flex flex-col gap-4">
                    <label className="label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        required
                    />


                    <button
                        type="submit"
                        className="btn mt-4 text-lg text-white bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        Send Reset Email
                    </button>
                </form>


                <p className="font-semibold text-center pt-2">
                    Already have an account?{" "}
                    <Link className="text-secondary link link-hover" to="/login">
                        Login
                    </Link>
                </p>
                <p className="font-semibold text-center pt-2">
                    Don’t have an account?{" "}
                    <Link className="text-secondary link link-hover" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;