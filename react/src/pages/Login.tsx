import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { createRef } from "react";
import axiosClient from "./../axios-client";

const Login = () => {
    const emailRef = createRef();
    const passwordRef = createRef();

    const onSubmit = (ev: any) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        // setErrors(null);
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                // setUser(data.user);
                // setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        // setErrors(response.data.errors);
                    } else {
                        setErrors({
                            // email: [response.data.message],
                        });
                    }
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
                    Login to your account
                </h2>
                <form onSubmit={onSubmit}>
                    <Input
                        ref={emailRef}
                        className="mb-5 mt-5"
                        placeholder="Email"
                        type="email"
                        value="test@yandex.ri"
                    />
                    <Input
                        ref={passwordRef}
                        className="mb-5 mt-5"
                        placeholder="Password"
                        value="229229112"
                    />
                    <button className="w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition px-6 py-2 ">
                        Login
                    </button>
                </form>
                <div className="mt-5 mb-5">
                    <p>
                        Don't have an account?{" "}
                        <Link
                            className="underline hover:text-neutral-500"
                            to="/signup"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
