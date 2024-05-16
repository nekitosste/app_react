import { useState, useEffect } from "react";
import io from "socket.io-client";
import axiosClient from "./../axios-client";
import Dialog from "../components/Dialog";
import HeaderDialog from "../components/HeaderDialog";
import Input from "../components/Input";
import avatar from "./user.png";
import { IoSendSharp } from "react-icons/io5";
import MyMenu from "../components/MyMenu";
import EmojiPicker from "emoji-picker-react";
import { FaRegFaceSmile } from "react-icons/fa6";
import Pusher from "pusher-js";
import Echo from "laravel-echo";

const Chat = () => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [selectedDialog, setSelectedDialog] = useState(null);
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.Pusher = Pusher;
        getUsers();
        window.Echo = new Echo({
            broadcaster: "pusher",
            key: "9ccbb4a07c3c4edd88b2",
            cluster: "ap3",
            encrypted: true,
        });

        if (selectedDialog) {
            window.Echo.private(`chat.${selectedDialog}`).listen(
                "MessageEvent",
                (e) => {
                    setMessages([...messages, e.message]);
                }
            );
        }
    }, [selectedDialog, messages]);

    const handleDialogClick = (userId) => {
        setSelectedDialog(userId);
    };

    const sendMessage = () => {
        window.Echo.private(`chat.${selectedDialog}`).whisper(
            "client-message",
            {
                message: inputValue,
            }
        );

        axiosClient
            .post(`/send-message/${selectedDialog}`, { message: inputValue })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        setInputValue("");
    };
    const getUsers = () => {
        setLoading(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                setLoading(false);
                setUsers(data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div>
            <div className="flex flex-col h-[100vh]">
                <div className="bg-neutral-800  overflow-y-auto flex h-[100vh]">
                    <div className="flex flex-col md:max-w-[380px]  w-full">
                        <div className="p-3 flex justify-between ">
                            <Input placeholder="Search Dialog" />
                            <MyMenu />
                        </div>

                        <div className="mt-3 -[79vh] w-full min-w-[320px] overflow-auto">
                            {users.map((item) => (
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
                    <div className="flex-auto bg-neutral-900 h-full p-3 relative overflow-hidden hidden md:block">
                        {selectedDialog ? (
                            <div className="flex flex-col h-full ">
                                <HeaderDialog data={selectedDialog} />
                                <div className=" overflow-y-auto h-[85%] mt-2 flex flex-col-reverse relative">
                                    <div>
                                        <div className="flex justify-start items-end">
                                            <div className="flex flex-col mt-4 mb-4 ml-4">
                                                <img
                                                    src={avatar}
                                                    alt=""
                                                    className="rounded-[50%]"
                                                    width={15}
                                                    height={15}
                                                />

                                                <div>
                                                    <div>net eto ne pravda</div>
                                                    <p className="text-xs">
                                                        time 22:00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-end">
                                            <div className="flex flex-col">
                                                <div>
                                                    {messages.map(
                                                        (message, index) => (
                                                            <div
                                                                key={index}
                                                                className="mt-4 mb-4 mr-4"
                                                            >
                                                                <div>
                                                                    <div className="text-end">
                                                                        {
                                                                            message
                                                                        }
                                                                        <p className="text-xs text-end">
                                                                            time
                                                                            22:00
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-0">
                                        {showEmojiPicker && (
                                            <EmojiPicker
                                                theme="dark"
                                                autoFocusSearch={false}
                                                onEmojiClick={handleEmojiClick}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className=" bottom-0 right-0 mb-2 flex w-full p-4 relative">
                                    <Input
                                        value={inputValue}
                                        onChange={(e) =>
                                            setInputValue(e.target.value)
                                        }
                                        type="text"
                                        className="flex-auto w-full"
                                        placeholder="Send text"
                                        onKeyPress={handleKeyPress}
                                    />

                                    <button
                                        className="ml-3 mr-3"
                                        onClick={() =>
                                            setShowEmojiPicker(!showEmojiPicker)
                                        }
                                    >
                                        <FaRegFaceSmile size={25} />
                                    </button>
                                    <button
                                        className="ml-2"
                                        onClick={sendMessage}
                                    >
                                        <IoSendSharp size={25} />
                                    </button>
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
        </div>
    );
};

export default Chat;
