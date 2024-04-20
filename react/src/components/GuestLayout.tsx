import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { twMerge } from "tailwind-merge";

const GuestLayout = () => {
    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`)}>
            <div className="container mx-auto">
                <Header />
                <main className="flex text-center justify-center">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default GuestLayout;
