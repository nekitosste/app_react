import { FiPhoneCall, FiSearch } from "react-icons/fi";
import avatar from "./user.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BlockIcon from "@mui/icons-material/Block";

const HeaderDialog = ({ data }) => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center h-full">
                <div>
                    <img src={avatar} alt="" width={40} />
                </div>
                <div className="ml-3">
                    <p>Name User {data}</p>
                    <p className="text-sm">last time 20:12</p>
                </div>
            </div>
            <div className="flex justify-end z-11">
                <div className="flex justify-between align-middle text-center w-[120px] items-center">
                    <a className="text-white " href="">
                        <FiPhoneCall size={20} />
                    </a>
                    <a className="text-white" href="">
                        <FiSearch size={20} />
                    </a>
                    <a className="text-white " href="">
                        <DeleteOutlineIcon />
                    </a>
                    <a className="text-white " href="">
                        <BlockIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderDialog;
