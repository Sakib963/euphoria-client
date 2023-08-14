import { useState } from "react";
import CloseIcon from "../../../assets/icons/CloseIcon";

const InviteFriends = () => {
    const [close,setClose] = useState(false);
  return (
    <div className={`${close? "hidden" : "flex"} items-center text-xs lg:text-lg bg-[#F9FAFF] w-full py-4`}>
      <p className="text-[#272727] lg:ml-auto mr-4 ml-2">
        Invite Friends and get 50% off on your next purchase
      </p>
      <a className="text-[#00398F] mr-auto" href="#">
        Invite now
      </a>
      <div onClick={()=>setClose(true)} className="mr-2 lg:mr-11 cursor-pointer">
        <CloseIcon></CloseIcon>
      </div>
    </div>
  );
};

export default InviteFriends;
