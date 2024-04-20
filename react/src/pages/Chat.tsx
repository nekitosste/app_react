import Button from "../components/Button";
import Dialog from "../components/Dialog";
import HeaderDialog from "../components/HeaderDialog";
import Input from "../components/Input";
import avater from "./user.png";
import { IoSendSharp } from "react-icons/io5";

const dialogs = [
    { avatar: avater, text: "nigger", name: "Nikita Nikita" },
    { avatar: avater, text: "helow", name: "Alex Alex" },
    {
        avatar: avater,
        text: "345345",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "345",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "345",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "345435",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "345",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "345",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "345345",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "123",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "123",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "123",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "123",
        name: "Diama dimaaaaa",
    },
];

const Chat = () => {
    return (
        <div className="flex mt-3">
            <div className="bg-neutral-500 rounded-lg h-full w-full overflow-hidden overflow-y-auto  flex justify-start">
                <div className="flex-auto bg-neutral-900">
                    <div className="p-[13px]  border-b-2 border-emerald-800 rounded-l-lg">
                        <Input placeholder="Search Dialog" />
                    </div>
                    <div className="h-[79vh] w-full min-w-[320px] overflow-auto ">
                        <div className=" hover:cursor-pointer">
                            {dialogs.map((item) => (
                                <Dialog key={item.name} data={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-auto bg-neutral-800 h-[89vh] w-[80%] relative">
                    <div className="p-3 bg-neutral-900 border-b-2 border-emerald-800 rounded-r-lg">
                        <HeaderDialog />
                    </div>
                    <h2 className="text-2xl text-neutral-300  flex justify-center items-center non-content"></h2>
                    <div className="absolute bottom-0 w-full p-4 mb-2 flex">
                        <Input
                            type="text"
                            className="w-full"
                            placeholder="Send text"
                        />
                        <Button className="w-[40px] ml-2">
                            <IoSendSharp />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
