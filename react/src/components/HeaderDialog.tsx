import { FiPhoneCall, FiSearch, FiMoreVertical } from "react-icons/fi";
import avatar from "./user.png";

const HeaderDialog = ({ data }) => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center h-full">
                <div>
                    <img src={avatar} alt="" width={40} />
                </div>
                <div className="ml-3">
                    <p>{data.name}</p>
                    <p>{data.text}</p>
                </div>
            </div>
            {/* <div className="flex justify-end z-11">
                <div className="flex justify-between w-[100px]">
                    <a className="text-white " href="">
                        <FiPhoneCall size={20} />
                    </a>
                    <a className="text-white" href="">
                        <FiSearch size={20} />
                    </a>
                    <a className="text-white" href="">
                        <FiMoreVertical size={20} />
                    </a>
                </div>
            </div> */}
        </div>
    );
};

export default HeaderDialog;
