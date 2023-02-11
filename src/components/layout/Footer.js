import React from "react";
import Container from "./Container";
import { TiTickOutline } from "react-icons/ti";
const Footer = () => {
  return (
    <Container>
      <div className="flex gap-x-4 mt-[190px]">
        <div className=" h-[180px] w-[350px] bg-[#F7F7F7] shadow-lg shadow-indigo-500/40 ">
          <h1 className="font-Poppins font-bold text-main_color text-center mt-6 text-[24px]">
            Mern Stack Developer
          </h1>
          <div className=" h-12 w-12 bg-primary_button rounded-full  mt-3 ml-3">
            <TiTickOutline className="ml-[6px] text-4xl" />
          </div>
          <p className="font-Poppins font-regular text-subtext_color text-[18px] text-center mt-[-50px]">
            Fusce consequat, neque <br />
            vitae bibendum suscipit, <br />
            leo sem hendrerit diamo.
          </p>
        </div>
        <div className=" h-[180px] w-[350px] bg-[#F7F7F7] shadow-lg shadow-indigo-500/40 ">
          <h1 className="font-Poppins font-bold text-main_color text-center mt-6 text-[24px]">
            Mern Stack Developer
          </h1>
          <div className=" h-12 w-12 bg-primary_button rounded-full  mt-3 ml-3">
            <TiTickOutline className="ml-[6px] text-4xl" />
          </div>
          <p className="font-Poppins font-regular text-subtext_color text-[18px] text-center mt-[-50px]">
            Fusce consequat, neque <br />
            vitae bibendum suscipit, <br />
            leo sem hendrerit diamo.
          </p>
        </div>
        <div className=" h-[180px] w-[350px] bg-[#F7F7F7] shadow-lg shadow-indigo-500/40 ">
          <h1 className="font-Poppins font-bold text-main_color text-center mt-6 text-[24px]">
            Mern Stack Developer
          </h1>
          <div className=" h-12 w-12 bg-primary_button rounded-full  mt-3 ml-3">
            <TiTickOutline className="ml-[6px] text-4xl" />
          </div>
          <p className="font-Poppins font-regular text-subtext_color text-[18px] text-center mt-[-50px]">
            Fusce consequat, neque <br />
            vitae bibendum suscipit, <br />
            leo sem hendrerit diamo.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
