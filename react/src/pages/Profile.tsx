import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Profile = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                <div className="col-span-4 sm:col-span-3">
                    <div className="bg-neutral-950 shadow rounded-lg p-6">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/94.jpg"
                                className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                            ></img>
                            <h1 className="text-xl font-bold">Name User</h1>
                            <p className="">Admin this website</p>
                            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                <Button>Change Photo</Button>
                                <Button className="bg-white">
                                    Delete Photo
                                </Button>
                            </div>
                        </div>
                        <hr className="my-6 border-t border-gray-300" />
                        <div className="flex flex-col">
                            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                                Skills
                            </span>
                            <ul>
                                <li className="mb-2">JavaScript</li>
                                <li className="mb-2">React</li>
                                <li className="mb-2">Node.js</li>
                                <li className="mb-2">HTML/CSS</li>
                                <li className="mb-2">Tailwind Css</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 sm:col-span-9">
                    <div className="bg-neutral-950 shadow rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">About Me</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed finibus est vitae tortor ullamcorper, ut
                            vestibulum velit convallis. Aenean posuere risus non
                            velit egestas suscipit. Nunc finibus vel ante id
                            euismod. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia Curae;
                            Aliquam erat volutpat. Nulla vulputate pharetra
                            tellus, in luctus risus rhoncus id.
                        </p>

                        <h2 className="text-xl font-bold mt-6 mb-4">
                            <h2 className="text-xl font-bold mb-4">Settings</h2>
                        </h2>
                        <div className="mb-6">
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                <h2>Change Nickname</h2>
                                <Input placeholder="Enter New Nicknama" />

                                <Button className="bg-white mt-2 w-[100px]">
                                    Save
                                </Button>
                                <p>
                                    <span className="text-gray-700 mr-2">
                                        at ABC Company
                                    </span>
                                    <span className="text-gray-700">
                                        2017 - 2019
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between flex-wrap gap-2 w-full mt-3">
                                <h2>Change Password</h2>
                                <Input
                                    className=""
                                    placeholder="Enter Old Password"
                                    type="password"
                                />
                                <Input
                                    placeholder="Enter New Password"
                                    type="password"
                                />
                                <Input
                                    placeholder="Repeat New Password"
                                    type="password"
                                />
                                <Button className="bg-white mt-2 w-[100px]">
                                    Save
                                </Button>
                                <p>
                                    <span className="text-gray-700 mr-2">
                                        at ABC Company
                                    </span>
                                    <span className="text-gray-700">
                                        2017 - 2019
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
