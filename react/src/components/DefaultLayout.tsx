import React from "react";
import { Outlet } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Header from "./Header";

const DefaultLayout = () => {
    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`)}>
            <div className="">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
