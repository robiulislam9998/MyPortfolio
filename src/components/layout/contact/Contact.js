import React, { useState } from "react";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [des, setDes] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    if (firstname === "") {
      setErrmsg("enter the name ");
    } else if (email === "") {
      setErrmsg("enter your email");
    } else if (phone === "") {
      setErrmsg("Please Enter Your Phone Number");
    } else if (subject === "") {
      setErrmsg("Please Enter Your Subject");
    } else if (des === "") {
      setErrmsg("  Please Enter Your Full Describtion");
    } else {
      setErrmsg("");
      setFirstname("");
      setEmail("");
      setPhone("");
    }
  };
  return (
    <div className="flex justify-between bg-[#454546]">
      <div className="p-8">
        <h1 className="fon-bold font-Poppins text-[32px] text-[#fff]">
          Leave Us Your Info
        </h1>
        {errmsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errmsg}
          </p>
        )}
        <div className="mt-4">
          <input
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            type="text"
            placeholder="Enter Your Full Name"
            className="px-2 py-2 mt-4 w-[40%] border border-solid border-[#a3e832] outline-none rounded-lg"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Your Email Or Phone Number"
            className="px-2 py-2  mt-4  w-[40%] border  border-solid border-[#a3e832] outline-none rounded-lg"
          />

          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            placeholder="Enter Your Phone Number"
            className="px-2 py-2  mt-4  w-[40%] border  border-solid border-[#a3e832] outline-none rounded-lg"
          />

          <input
            placeholder="Enter Your Subject"
            className="px-2 py-2 mt-4 w-[40%] border  border-solid border-[#a3e832] outline-none rounded-lg"
          />

          <input
            placeholder="Enter Your Describtion"
            className="px-2 py-2 mt-4 w-[40%] border border-solid border-[#a3e832] outline-none rounded-lg"
          />
          <button
            onClick={handleSend}
            className="bg-[#c1f433] w-[20%] h-8 rounded-xl mt-4"
          >
            <h1 className=" font-Poppins font-bold text-sm text-[#b1adad]">
              Send
            </h1>
          </button>
        </div>
      </div>
      <div className="p-8 mt-20">
        <p className=" font-Poppins font-semibold text-[32px] text-[#fff]">
          Support services:{" "}
          <span className=" font-normal font-Poppins text-xl ">
            +8801709293799{" "}
          </span>
        </p>
        <p className=" font-Poppins font-semibold text-[32px] text-[#fff]">
          Personal:{" "}
          <span className=" font-normal font-Poppins text-xl ">
            +8801709293799{" "}
          </span>
        </p>
        <p className=" font-Poppins font-semibold text-[32px] text-[#fff]">
          Email:{" "}
          <span className=" font-normal font-Poppins text-xl ">
            robiulislam99981@gmail.com{" "}
          </span>
        </p>
        <p className=" font-Poppins font-semibold text-[32px] text-[#fff]">
          Website:{" "}
          <span className=" font-normal font-Poppins text-xl ">
            www.robiulislam.com{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
