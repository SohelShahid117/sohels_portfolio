import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const ContactMe = () => {
  return (
    <section id="contact" className="p-5 container mx-auto">
      <div className="w-full  md:w-3/5 mx-auto mb-5">
        <h4 className="capitalize w-full  text-2xl md:text-4xl mt-3 bg-img-gradient text-transparent bg-clip-text font-bold text-center">
          Contact With Me
        </h4>
        <p className="text-md md:text-lg text-black mt-4 text-center ">
          Technology is vast, and there are so many tools, platforms, languages,
          frameworks coming out in the market. It doesn't matter as I am an
          experienced developer. As a modern developer, I should know how to
          integrate modern technologies and use my technical skills in my work
          to make a good product.
        </p>
      </div>
      {/* Main Contact Section */}
      <div className="section-container flex flex-col md:flex-row w-full gap-6">
        {/* Contact Info */}
        <div className="md:w-1/3 px-6 py-4  text-black rounded-2xl border-2">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>For any kind of query, contact me with the details below.</p>
          </div>
          <div className="mt-3 space-y-1">
            <p className="relative mb-2">
              <span className=" text-xl text-blue-500 inline-flex mr-2 mt-1.5">
                <IoCall />
              </span>
              <span className="absolute text-md font-semibold mt-0.5">
                {" "}
                01623-242838
              </span>
            </p>
            <p className="relative mb-2">
              <span className=" text-xl text-blue-500 inline-flex mr-2 mt-1.5">
                {/* <IoCall /> */}
                <FaWhatsapp />
              </span>
              <span className="absolute text-md font-semibold mt-0.5">
                {" "}
                01823-012335
              </span>
            </p>
            {/* <p className="relative mb-2">
              <p className=" text-xl text-blue-500 inline-flex mr-2 mt-1.5">
                <MdEmail />
              </p>
              <span className="absolute text-md font-semibold mt-0.5 ml-1.5">
                jsholdctg@gmail.com
              </span>
            </p> */}
            <p className="relative mb-2">
              <p className=" text-xl text-blue-500 inline-flex mr-2 mt-1.5">
                <MdEmail />
              </p>
              <span className="absolute text-md font-semibold mt-0.5 ml-1.5">
                sohelshahid09@gmail.com
              </span>
            </p>
            <p className="relative">
              <p className=" text-xl text-blue-500 inline-flex mr-2 mt-1.5">
                <FaLocationDot />
              </p>
              <span className="absolute text-md  mt-0.5 ml-1.5">
                Office No # 25, Central Shopping Complex, O.R Nizam Road , GEC,
                Nasirabad, Chattogram,Bangladesh.
              </span>
            </p>
            <p className="relative  my-10 sm:my-5 md:my-25 lg:my-15">
              <p className=" text-xl text-blue-500 inline-flex mr-2 mt-1.5">
                <GoClock />
              </p>
              <span className="absolute text-md  mt-0.5 ml-1.5">
                Service Hours: 24/7
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 px-6 py-4">
          <h3 className="text-lg font-medium mb-2">Get In Touch</h3>
          <h2 className="text-2xl font-bold mb-4">Ask Anything You Need</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full focus:outline-none"
              />
              <input
                type="number"
                placeholder="Contact Number"
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Your message to me..."
              className="textarea textarea-bordered w-full focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="btn text-md md:text-lg font-semibold bg-primaryy text-white rounded-lg"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Placeholder */}
      <div className="section-container mt-0">
        <h2 className="text-xl font-semibold my-2">My Location : </h2>
        <div className="w-full  rounded-lg flex items-center justify-center text-gray-500">
          <iframe
            className="w-full py-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8409805301294!2d91.81927936238252!3d22.35963247288069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001dd59f!2sGEC%20More%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1753352321738!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
