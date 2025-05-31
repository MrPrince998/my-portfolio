import React from "react";

const ProjectCard = ({ image, title, description, tags = [] }) => {
  return (
    <div
      className="
      group relative
      bg-white
      border border-gray-200
      rounded-xl overflow-hidden
      shadow-sm hover:shadow-md
      transition-all duration-300 ease-in-out
      hover:-translate-y-1
    "
    >
      {/* Image Container */}
      <div
        className="
        relative overflow-hidden
        h-48 bg-gray-100
        flex items-center justify-center
      "
      >
        {image || (
          <div
            className="
            text-gray-400 
            text-4xl
            transition-colors duration-300
            group-hover:text-[#FFB600]
          "
          >
            📁
          </div>
        )}
        {/* Overlay */}
        <div
          className="
          absolute inset-0 bg-black/0
          group-hover:bg-black/20
          transition-all duration-300
        "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="
          text-lg font-semibold
          text-gray-900 
          mb-2
          transition-colors duration-300
          group-hover:text-[#FFB600] 
        "
        >
          {title || "Project Title"}
        </h3>

        <p
          className="
            text-sm text-gray-600
            mb-3 line-clamp-2
          "
        >
          {description || "Description"}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
