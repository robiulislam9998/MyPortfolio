import React, { useState } from "react";
import Container from "../layout/Container";
import Title from "../layout/Title";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const [skillData, setSkillData] = useState(false);
  const [educationData, setEducationData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <Container>
      <section
        id="resume"
        className="w-full py-20 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center">
          <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>
        <div>
          <ul className="w-full flex h-20 gap-x-12 bg-[#1b1b1b] rounded justify-center">
            <li
              className=" mt-4 text-red-50"
              onClick={() =>
                setEducationData(false) &
                setSkillData(false) &
                setExperienceData(true)
              }
            >
              <button className="h-12 w-28 rounded-md bg-red-500  hover:bg-slate-400">
                Expreance
              </button>
            </li>
            <li
              className=" mt-4 text-red-50"
              onClick={() =>
                setSkillData(true) &
                setEducationData(false) &
                setExperienceData(false)
              }
            >
              <button className="h-12 w-28 rounded-md bg-red-500  hover:bg-slate-400">
                Professional Skills
              </button>
            </li>
            <li
              className=" mt-4 text-red-50"
              onClick={() =>
                setEducationData(true) &
                setSkillData(false) &
                setExperienceData(false)
              }
            >
              <button className="h-12 w-28 rounded-md bg-red-500 hover:bg-slate-400">
                Education
              </button>
            </li>
          </ul>
        </div>
        {skillData && <Skills />}
        {experienceData && <Experience />}
        {educationData && <Education />}
      </section>
    </Container>
  );
};

export default Resume;
