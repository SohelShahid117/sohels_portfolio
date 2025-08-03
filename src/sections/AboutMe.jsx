import React from "react";
import profilePic from "../assets/images/Sohel_Pic_PP.JPG";
import { about_me } from "../utils/data";
import { Link } from "react-scroll";

const AboutMe = () => {
  console.log(about_me);
  return (
    <section className="p-5 container mx-auto">
      {/* <div className=""> */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 section-container">
        <h1 className="sm:hidden block text-3xl font-bold pb-8 text-blue-600">
          About Me
        </h1>
        <div className="w-full sm:w-2/5 mx-auto flex items-center justify-center">
          <img
            src={profilePic}
            className="w-[300px] h-[250px] md:rotate-12 transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-0 "
          />
        </div>
        <div className="w-full sm:w-3/5 pt-10">
          <div className="">
            <h1 className="hidden sm:block text-3xl font-bold pb-8 text-blue-600">
              About Me
            </h1>
          </div>
          <p className="text-gray-700 justify-around">{about_me[0].content}</p>

          <div className="flex">
            {/* <button className="bg-img-gradient text-white font-semibold text-lg px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out mt-5">
              About More
            </button> */}
            <div className="flex justify-center items-center mx-auto sm:mx-0 mt-5 gap-10">
              {about_me[0].socialIcons.map((social, i) => (
                <Link
                  key={i}
                  className="w-10 h-10 text-white bg-img-gradient rounded-2xl p-2 text-2xl font-bold hover:scale-105 transition-all duration-300 ease-in-out hover:rotate-6"
                >
                  {<social.icon />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
