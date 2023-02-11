import React from "react";
import Container from "./Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Mern Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });
  return (
    <div>
      <div className="flex justify-between">
        <div className="mt-2">
          <img src="images/vector.png" />
        </div>
        <div className="mt-8">
          {" "}
          <img src="images/mypic.png" />
        </div>
      </div>
      <Container className="flex justify-between">
        <div className=" mt-[-600px]">
          <h1 className=" font-Poppins font-bold text-5xl text-[#909497]">
            Hello I'm <span className=" text-[#1C2833]">Robiul Islam</span>
          </h1>
          <h2 className=" font-Poppins font-semibold text-6xl text-primary_button mt-3">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className=" font-Poppins font-regular text-[24px] text-[#ADADAD] mt-10">
            I am a User Experience and User Interface Designer.
            <br /> that help AI company reach thier next level
          </p>
          <div className="flex gap-x-16 mt-24 ml-10">
            <div>
              <button className="w-[250px] h-[104px] bg-main_color rounded-full">
                <p className="font-Poppins font-bold text-[24px] text-primary_button">
                  Download CV
                </p>
              </button>
            </div>
            <div>
              {" "}
              <button className="w-[159px] h-[104px] bg-primary_button rounded-full">
                <p className="font-Poppins font-bold text-[24px] text-main_color">
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
