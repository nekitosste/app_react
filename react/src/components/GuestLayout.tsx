import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useStateContext } from "../context/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 `)}>
            <div className="container mx-auto">
                {/* <Header /> */}
                <main className="flex text-center justify-center items-center h-[100vh]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default GuestLayout;
