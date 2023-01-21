import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsLifePreserver } from "react-icons/bs";
import { BsFillTelephonePlusFill } from "react-icons/bs";


const First = () => {
  return (
    <div className="w-full flex justify-center items-center py-6 gap-8">
      <div className="flex gap-4 items-center">
        <HiOutlineMail />
        <p>support@website.com</p>
        <BsFillTelephonePlusFill className="text-[13px]" />
        <p>(007) 123 8765784</p>
      </div>
      <div className="flex gap-[50px] items-center">
        <div className="flex gap-4 items-center">
          <FaFacebookF />
          <AiOutlineTwitter />
          <AiOutlineInstagram />
          <BsLifePreserver />
        </div>
        <div className="flex gap-4 items-center">
          <p>Register</p>
          <span className="h-[20px] w-[2px] bg-black"></span>
          <p>login</p>
        </div>
      </div>
    </div>
  );
}

export default First