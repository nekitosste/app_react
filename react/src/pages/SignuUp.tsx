import React, { createRef } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axiosClient from "./../axios-client";

const SignUp = () => {
    const nameRef = createRef<HTMLInputElement>();
    const emailRef = createRef<HTMLInputElement>();
    const passwordRef = createRef<HTMLInputElement>();
    const passwordConfirmationRef = createRef<HTMLInputElement>();

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };
        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div className="max-w-[450px] animate__animated animate__fadeIn animate__delay-1s mt-10">
            <div className="w-full">
                <h2 className="text-4xl text-center mb-5">Hi Welcome To The</h2>
                <h2 className="text-2xl font-bold text-center mb-5 sm:text-6xl">
                    ONLYCHAT
                </h2>
            </div>
            <div className="">
                <h2 className="text-2xl text-center font-bold mb-5 mt-5">
                    Register to your account
                </h2>

                <form onSubmit={onSubmit}>
                    <Input
                        className="mb-5 mt-5"
                        placeholder="Name"
                        type="name"
                        ref={nameRef}
                    />
                    <Input
                        className="mb-5 mt-5"
                        placeholder="Email"
                        type="email"
                        ref={emailRef}
                    />
                    <Input
                        className="mb-5 mt-5"
                        placeholder="Password"
                        type="password"
                        ref={passwordRef}
                    />
                    <Input
                        className="mb-5 mt-5"
                        placeholder="Repeat Password"
                        type="password"
                        ref={passwordConfirmationRef}
                    />
                    <button className="w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition px-6 py-2 ">
                        Sign Up
                    </button>
                    <div className="mt-5 mb-5">
                        <p>
                            Already have an account?
                            <Link
                                className="underline hover:text-neutral-500 ml-2"
                                to="/login"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
