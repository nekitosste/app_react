import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
    return (
        <div className="max-w-[450px] animate__animated animate__fadeIn animate__delay-1s">
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
                <Input className="mb-5 mt-5" placeholder="Email" type="email" />
                <Input className="mb-5 mt-5" placeholder="Password" />
                <Button className=" px-6 py-2 ">Login</Button>
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
