import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router";
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import { Eye, EyeOff } from "lucide-react"; // 👈 import icons

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // 👈 password toggle state
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        // name validation
        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
            return;
        } else {
            setNameError("");
        }

        // password validation
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter");
            return;
        }
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        } else {
            setPasswordError("");
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                toast.success("Successfully account created!");
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
                toast.error(error.message);
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
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="input w-full pr-10"
                                placeholder="Password"
                                required
                            />
                            <div
                                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </div>
                        </div>

                        {nameError && <p className="text-red-400 text-xs">{nameError}</p>}
                        {passwordError && <p className="text-red-400 text-xs">{passwordError}</p>}

                        <button type="submit" className="btn mt-4 text-lg text-white bg-indigo-600">
                            Register
                        </button>
                    </fieldset>
                </form>

                <p className="font-semibold text-center mt-4">
                    Already Have An Account?{" "}
                    <Link className="text-secondary link link-hover" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
