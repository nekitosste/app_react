const Dialog = ({ data }) => {
    return (
        <div className="flex bg-neutral-950 mb-2 p-1 rounded-lg">
            <div className="m-auto">
                <img
                    src={data.avatar}
                    alt="avatar"
                    width={75}
                    height={75}
                    property="true"
                    className="rounded-[50%]"
                />
            </div>
            <div className="flex flex-col gap-y-2 ml-2 overflow-hidden dialog-bg w-full">
                <h2 className="text-lg  font-semibold overflow-hidden">
                    {data.name}
                </h2>
                <div className="overflow-hidden w-full text-ellipsis whitespace-nowrap">
                    {data.text}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
