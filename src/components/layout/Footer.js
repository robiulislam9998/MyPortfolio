import React from "react";
import Container from "./Container";
import { TiTickOutline } from "react-icons/ti";
const Footer = () => {
  return (
    <Container>
      <div className="flex md:gap-x-4 gap-x-2 mt-10 md:mt-[190px]">
        <div className="h-[150px] w-[110px] md:h-[180px] md:w-[350px] bg-[#F7F7F7] shadow-lg shadow-indigo-500/40 ">
          <h1 className="font-Poppins md:font-bold font-semibold text-base text-main_color text-center md:mt-6 md:text-[24px]">
            Mern Stack Developer
          </h1>
          <div className=" h-12 w-12 bg-primary_button rounded-full  mt-3 ml-6 md:ml-3">
            <TiTickOutline className="ml-[6px] text-4xl" />
          </div>
          <p className="font-Poppins hidden md:block font-regular text-subtext_color text-[18px]  text-center mt-[-50px]">
            Fusce consequat, neque <br />
            vitae bibendum suscipit, <br />
            leo sem hendrerit diamo.
          </p>
        </div>
        <div className="h-[150px] w-[110px] md:h-[180px] md:w-[350px] bg-[#F7F7F7] shadow-lg shadow-indigo-500/40 ">
          <h1 className="font-Poppins md:font-bold font-semibold text-base text-main_color text-center md:mt-6 md:text-[24px]">
            Mern Stack Developer
          </h1>
          <div className=" h-12 w-12 bg-primary_button rounded-full  mt-3 ml-6 md:ml-3">
            <TiTickOutline className="ml-[6px] text-4xl" />
          </div>
          <p className="font-Poppins hidden md:block font-regular text-subtext_color text-[18px]  text-center mt-[-50px]">
            Fusce consequat, neque <br />
            vitae bibendum suscipit, <br />
            leo sem hendrerit diamo.
          </p>
        </div>
        <div className="h-[150px] w-[110px] md:h-[180px] md:w-[350px] bg-[#F7F7F7] shadow-lg shadow-indigo-500/40 ">
          <h1 className="font-Poppins md:font-bold font-semibold text-base text-main_color text-center md:mt-6 md:text-[24px]">
            Mern Stack Developer
          </h1>
          <div className=" h-12 w-12 bg-primary_button rounded-full  mt-3 ml-6 md:ml-3">
            <TiTickOutline className="ml-[6px] text-4xl" />
          </div>
          <p className="font-Poppins hidden md:block font-regular text-subtext_color text-[18px]  text-center mt-[-50px]">
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
