import image from "/public/pattern-31.svg";
import ChatHeader from "./ChatHeader";
import Dialog from "./Dialog";
import avater from "../../public/6596121.png";

const dialogs = [
    { avatar: avater, text: "nigger", name: "Nikita Nikita" },
    { avatar: avater, text: "helow", name: "Alex Alex" },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
    {
        avatar: avater,
        text: "loremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfsloremdfsdfsdfsdfsdfs",
        name: "Diama dimaaaaa",
    },
];

const Chat = () => {
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto  flex justify-start">
            <div className="flex-auto bg-neutral-900 h-[89vh] w-[20%] min-w-[320px] overflow-auto ">
                <div className="w-full ps-2 pe-2 pt-2 pb-2">
                    <input
                        type="text"
                        className=" w-full rounded-md bg-neutral-800 border border-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
                    />
                </div>
                <div className=" hover:cursor-pointer p-[0.4rem] ">
                    {dialogs.map((item) => (
                        <Dialog key={item.name} data={item} />
                    ))}
                </div>
            </div>

            <div className="flex-auto bg-neutral-800 h-[89vh] w-[80%] relative">
                <img
                    src={image}
                    alt="image"
                    className="w-full h-full object-cover overflow-hidden absolute blur"
                />
                <div className="p-4">
                    <ChatHeader />
                </div>
                <h2 className="text-2xl text-neutral-300  flex justify-center items-center non-content">
                    Select a chat from the list to start chatting.
                </h2>
            </div>
        </div>
    );
};

export default Chat;
