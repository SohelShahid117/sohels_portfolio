import React from "react";
import profilePic from "../assets/images/Sohel_Pic_PP.JPG";
import { PiHandWaving } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="p-5 container mx-auto">
      <div className=" flex flex-col-reverse md:flex-row gap-14 items-center justify-between mt-10 md:mt-5 ">
        <div className="text-center md:text-left w-full md:w-2/3">
          <h3 className="text-xl md:text-2xl font-medium text-black">
            {" "}
            <PiHandWaving className="inline text-blue-500 w-8 h-10" /> Hi , I'm
            Md Sahidul Islam Sohel
          </h3>
          <h1 className="capitalize w-full  text-2xl md:text-4xl mt-3 bg-img-gradient text-transparent bg-clip-text font-bold">
            Building Scalable and user friendly Web apps
          </h1>
          <p className="w-full  text-xl  mt-4 text-justify">
            I am a passionate <span className="text-xl font-bold">MERN</span>{" "}
            developer.I really enjoy problem solving, learning languages like
            Javascript, Typescript, Java & libraries/frameworks like Node.js,
            Express.js, React.js & Next.js !
          </p>
          <div className="flex justify-center md:justify-start gap-4 md:gap-8 mt-5">
            <button className="text-[#4098da] px-4 py-2 border-2 border-primaryy text-lg font-semibold rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              View My Work
            </button>
            <button className="bg-img-gradient text-white font-semibold text-lg px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 items-center justify-center mx-auto flex flex-col relative  ">
          <img
            src={profilePic}
            alt=""
            className="w-[300px] h-[250px] md:rotate-12 transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-0 "
          />
          {/* bottom-10 left-15 lg:bottom-12 */}

          {/* <FaReact className="w-16 h-16 absolute transition-transform duration-300 ease-in-out text-white hover:scale-110 left-20  bottom-20  bg-blue-400 rounded-2xl p-2 rotate-3" />
          <FaNodeJs className="w-16 h-16 absolute transition-transform duration-300 ease-in-out text-white hover:scale-110 left-17  -bottom-7  bg-blue-400 rounded-2xl p-2 rotate-2 " />
          <SiMongodb className="w-16 h-16 absolute transition-transform duration-300 ease-in-out text-white hover:scale-110 left-48 -bottom-10  bg-blue-400 rounded-2xl p-2 " />
          <RiNextjsLine className="w-16 h-16 absolute transition-transform duration-300 ease-in-out text-white hover:scale-110 left-80 -bottom-7  bg-blue-400 rounded-2xl p-2 -rotate-2" />
          <FaJs className="w-16 h-16 absolute transition-transform duration-300 ease-in-out text-white hover:scale-110 left-80 bottom-20 bg-blue-400 rounded-2xl p-2 -rotate-3 " /> */}
        </div>
      </div>

      <div>stats</div>
    </section>
  );
};

export default Hero;
