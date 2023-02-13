import React from "react";
import Container from "./Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Mern Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });
  return (
    <div>
      <div className="flex justify-between">
        <div className=" md:block hidden mt-2">
          <img src="images/vector.png" />
        </div>
        <div className="mt-8">
          {" "}
          <img src="images/mypic.png" />
        </div>
      </div>
      <Container className="flex justify-between">
        <div className=" md:mt-[-600px] mt-[-250px]">
          <h1 className=" font-Poppins font-bold text-2xl md:text-5xl text-[#909497]">
            Hello I'm <span className=" text-[#1C2833]">Robiul Islam</span>
          </h1>
          <h2 className=" font-Poppins font-semibold text-3xl md:text-6xl text-primary_button mt-3">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className=" font-Poppins font-regular text-xl md:text-[24px] text-[#ADADAD] mt-4 md:mt-10">
            I am a User Experience and User Interface Designer.
            <br /> that help AI company reach thier next level
          </p>
          <div className="flex md:gap-x-16 gap-x-4 mt-16 md:mt-24 ml-10">
            <div>
              <button className="md:w-[250px] w-[140px] md:h-[104px] h-[65px] bg-main_color rounded-full">
                <p className="font-Poppins md:font-bold md:text-[24px] font-semibold text-lg text-primary_button">
                  Download CV
                </p>
              </button>
            </div>
            <div>
              {" "}
              <button className="md:w-[159px] md:h-[104px] mt-2 w-[95px] h-[50px] bg-primary_button rounded-full">
                <p className="font-Poppins md:font-bold md:text-[24px] font-semibold text-lg  text-main_color">
                  Hire Me
                </p>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
