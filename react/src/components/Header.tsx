import { FiPhoneCall, FiSearch, FiMoreVertical } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <a
        href=""
        className="items-center text-2xl font-semibold text-neutral-400 font-mono "
      >
        ChatForMe
      </a>
      {/* <div className="flex justify-between w-[100px]">
        <a className="text-white " href="">
          <FiPhoneCall size={20} />
        </a>
        <a className="text-white" href="">
          <FiSearch size={20} />
        </a>
        <a className="text-white" href="">
          <FiMoreVertical size={20} />
        </a>
      </div> */}
    </div>
  );
};

export default Header;
