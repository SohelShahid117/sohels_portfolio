import React from "react";
import { projects } from "../utils/data";
import ProjectCard from "../components/ProjectCard";
// import { span } from "framer-motion/client";
// import { div } from "framer-motion/client";

const MyProjects = () => {
  console.log(projects);
  return (
    <section className="bg-[#fbfeff] p-5 mt-10">
      <div className="container mx-auto">
        <div className="w-full  md:w-3/5 mx-auto">
          <h4 className="capitalize w-full  text-2xl md:text-4xl mt-3 bg-img-gradient text-transparent bg-clip-text font-bold text-center">
            Recent Projects
          </h4>
          <p className="text-md text-black mt-4 text-center ">
            From concept to deployment these project shows my technical
            expertise . I focus on clean code ,performance and user experience
          </p>
        </div>

        <div className="">
          <div className="">
            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto */}
            {/* <div className=" gap-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-full md:min-w-1/2 lg:min-w-1/3"
                >
                  <ProjectCard
                    imgUrl={project.image}
                    tags={project.tags}
                    title={project.title}
                  />
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col  text-start p-5 bg-white shadow-lg mb-2 rounded-lg hover:shadow-2xl cursor-pointer space-y-2  transition-all duration-200 hover:-translate-y-1.5"
                >
                  <img
                    src={project.image}
                    alt=""
                    className="min-h-50 md:min-h-60"
                  />
                  <p className="text-xl text-blue-600 text-left">
                    {project.title}
                  </p>
                  <h1 className="text-sm font-bold text-gray-800  ">
                    {project.tags.map((tag) => (
                      <span className=" bg-blue-400 text-white mr-2 mb-0 py-1 px-2 rounded-xl">
                        {tag}
                      </span>
                    ))}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
