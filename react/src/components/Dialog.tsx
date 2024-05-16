import avatar from "../pages/user.png";

const Dialog = ({ data }) => {
    return (
        <div className="flex mb-1  hover:bg-neutral-700">
            <div className="m-auto ml-2">
                <img
                    src={avatar}
                    alt="avatar"
                    width={75}
                    height={75}
                    property="true"
                    className="rounded-[50%]"
                />
            </div>
            <div className="flex flex-col overflow-hidden dialog-bg w-full">
                <h2 className="text-lg ml-2 font-semibold overflow-hidden">
                    {data.name}
                </h2>
                <div className="ml-2 overflow-hidden w-full text-ellipsis whitespace-nowrap">
                    {data.text}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
