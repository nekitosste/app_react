import React, { useState } from "react";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import HeaderDialog from "../components/HeaderDialog";
import Input from "../components/Input";
import avatar from "./user.png";
import { IoSendSharp } from "react-icons/io5";

const dialogs = [
    { id: 1, avatar: avatar, text: "nigger", name: "Nikita Nikita" },
    { id: 2, avatar: avatar, text: "helow", name: "Alex Alex" },
    { id: 1, avatar: avatar, text: "nigger", name: "Nikita Nikita" },
    { id: 2, avatar: avatar, text: "helow", name: "Alex Alex" },
    { id: 1, avatar: avatar, text: "nigger", name: "Nikita Nikita" },
    { id: 2, avatar: avatar, text: "helow", name: "Alex Alex" },
    { id: 1, avatar: avatar, text: "nigger", name: "Nikita Nikita" },
    { id: 2, avatar: avatar, text: "helow", name: "Alex Alex" },
    { id: 1, avatar: avatar, text: "nigger", name: "Nikita Nikita" },
    { id: 2, avatar: avatar, text: "helow", name: "Alex Alex" },
    { id: 1, avatar: avatar, text: "nigger", name: "Nikita Nikita" },
    { id: 2, avatar: avatar, text: "helow", name: "Alex Alex" },
];

const Chat = () => {
    const [selectedDialog, setSelectedDialog] = useState(null);

    const handleDialogClick = (id) => {
        setSelectedDialog(id);
    };

    return (
        <div className="flex flex-col h-[85vh] mt-5">
            <div className="bg-neutral-800  overflow-y-auto flex">
                <div className="flex flex-col max-w-[350px]  w-full">
                    <div className="p-3">
                        <Input placeholder="Search Dialog" />
                    </div>

                    <div className="mt-3 -[79vh] w-full min-w-[320px] overflow-auto">
                        {dialogs.map((item) => (
                            <div
                                key={item.id}
                                className="hover:bg-neutral-700 cursor-pointer"
                                onClick={() => handleDialogClick(item.id)}
                            >
                                <Dialog
                                    data={item}
                                    selected={selectedDialog === item.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-auto bg-neutral-900 h-full p-3 relative overflow-hidden">
                    {selectedDialog ? (
                        <div className="flex flex-col h-full">
                            <HeaderDialog data={dialogs} />
                            <div className=" overflow-y-auto h-[85%] mt-2">
                                <div className="flex justify-start">
                                    <div className="flex flex-col">
                                        <div>net eto ne pravda</div>
                                        <p className="text-xs">time 22^00</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex flex-col">
                                        <div>net eto ne pravda</div>
                                        <p className="text-xs">time 22^00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 right-0 mb-2 flex w-full p-4">
                                <Input
                                    type="text"
                                    className="flex-auto w-full"
                                    placeholder="Send text"
                                />
                                <Button className="w-[40px] ml-2">
                                    <IoSendSharp />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-neutral-300 text-center mt-20">
                            Select a dialog to start conversation
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;
