import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const LastPart = () => {
  return (
    <div className=" w-full h-24 bg-[#000000]">
      <div>
        <h1 className=" p-8 text-[#fff] flex justify-center">
          2023 All Rights Reserved. Robiul Islam @
        </h1>
      </div>
      <div className="flex justify-end mr-24 gap-6 ml-36 mt-[-50px]">
        <p className=" text-2xl text-[#2962FF]">
          <AiFillLinkedin />
        </p>
        <p className=" text-2xl text-[#FB7D05]">
          <AiFillInstagram />
        </p>
        <p className=" text-2xl text-[#fff]">
          <AiFillGithub />
        </p>
        <p className=" text-2xl text-[#1A0DAB]">
          <FaFacebookSquare />
        </p>
      </div>
    </div>
  );
};

export default LastPart;
