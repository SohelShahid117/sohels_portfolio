import React from "react";

const ProjectCard = ({ imgUrl, tags, title }) => {
  console.log(imgUrl, tags, title);
  return (
    <div className="h-full  bg-white rounded-2xl shadow-md ">
      <img
        src={imgUrl}
        // src="https://js-engineering-and-consultancy.vercel.app/assets/bannerFine-CGMzkC6N.png"
        alt=""
        className="w-full h-72 md:h-80 p-5 "
      />
      <div className="px-4 py-5">
        <h3 className="text-base font-semibold overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm text-white bg-blue-500 py-1 px-4 rounded-xl font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
