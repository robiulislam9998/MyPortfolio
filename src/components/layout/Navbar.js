import React, { useState, useEffect } from "react";
import Container from "./Container";
import { useTypewriter } from "react-simple-typewriter";
import { VscThreeBars } from "react-icons/vsc";
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [text] = useTypewriter({
    words: ["Robiul"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 40,
    delaySpeed: 3000,
  });

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav>
      <Container>
        <div className="lg:flex md:gap-x-[105px]">
          <div className="flex mt-2 ">
            <img src="images/logo.png" />
            <p className=" absolute font-Poppins font-bold text-xl text-[#fc4a4a] mt-[10px] ml-20">
              {text}
              <br /> <span className=" text-black">Islam</span>
            </p>
          </div>

          <div className="lg:flex items-center md:ml-12">
            <VscThreeBars
              className=" absolute right-2 text-xl md:text-5xl text-[#9e9e9b] top-8 lg:hidden"
              onClick={() => setShow(!show)}
            />
            {show && (
              <ul className="lg:flex gap-x-6 font-Poppins font-regular text-[18px] text-[#ADADAD] cursor-pointer">
                <li className="hover:font-bold hover:text-black ">
                  <a hre="#">Home</a>
                </li>
                <li className="hover:font-bold hover:text-black hover:duration-5000 hover:ease-linear">
                  <a hre="#">ABOUT</a>
                </li>
                <li className="hover:font-bold hover:text-black hover:duration-5000">
                  SERVICES
                </li>
                <li className="hover:font-bold hover:text-black hover:duration-5000">
                  PORTFOLIO
                </li>
                <li className="hover:font-bold hover:text-black hover:duration-5000">
                  BLOG
                </li>
                <li className="hover:font-bold lg:hidden hover:text-black hover:duration-5000">
                  CONTACT
                </li>
              </ul>
            )}
            <div className="ml-[85px] hidden lg:block w-[150px] h-[50px] bg-primary_button rounded-full">
              <p className=" text-center mt-3 font-Poppins font-regular text-[18px]">
                CONTACT
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="h-0 w-full border border-solid  border-[#ADADAD]"></div>
      <div className="flex relative justify-end">
        <img
          className=" hidden lg:block  absolute mt-[-120px]"
          src="images/star.png"
        />
      </div>
    </nav>
  );
};

export default Navbar;
