import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/layout/Banner";
import Contact from "../components/layout/contact/Contact";
import Footer from "../components/layout/Footer";
import LastPart from "../components/layout/LastPart";
import MySarvice from "../components/layout/MySarvice";
import Navbar from "../components/layout/Navbar";
import Resume from "../components/resume/Resume";
import Skills from "../components/resume/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Footer />
      <MySarvice />
      <Resume />
      <Contact />
      <LastPart />
    </>
  );
};

export default Home;
