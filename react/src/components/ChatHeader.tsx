import { FiPhoneCall, FiSearch, FiMoreVertical } from "react-icons/fi";

const ChatHeader = () => {
  return (
    <div className="m-auto flex justify-end z-11">
      <div className="flex justify-between w-[100px] ">
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
    </div>
  );
};

export default ChatHeader;
