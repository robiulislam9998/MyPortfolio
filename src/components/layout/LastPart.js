import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const LastPart = () => {
  return (
    <div className=" w-full h-24 bg-[#000000]">
      <div>
        <h1 className=" p-8 text-[#fff] flex justify-center">
          <p className="md:mt-1 mt-8">
            2023 All Rights Reserved. Robiul Islam @
          </p>
        </h1>
      </div>
      <div className="flex justify-end mr-24 gap-6 ml-36 mt-[-90px] md:mt-[-50px]">
        <a href="https://www.linkedin/in/robiul-islam-mern">
          <p className=" text-2xl text-[#2962FF]">
            <AiFillLinkedin />
          </p>
        </a>
        <a href="https://github.com/robiulislam9998">
          <p className=" text-2xl text-[#fff]">
            <AiFillGithub />
          </p>
        </a>
        <p className=" text-2xl text-[#FB7D05]">
          <AiFillInstagram />
        </p>

        <a href="https://www.facebook.com/robiulislam9998">
          <p className=" text-2xl text-[#1A0DAB]">
            <FaFacebookSquare />
          </p>
        </a>
      </div>
    </div>
  );
};

export default LastPart;
