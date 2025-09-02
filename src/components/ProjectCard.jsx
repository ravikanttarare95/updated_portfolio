import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Button from "./Button";

function ProjectCard({
  projectPhoto,
  projectTitle,
  projectDesc,
  technologies,
  gitHubLink,
  liveLink,
}) {
  return (
    <div className="group rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={projectPhoto}
          alt="moneyBook"
          className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <h4 className="text-2xl font-bold text-gray-800 mb-2">
          {projectTitle}
        </h4>
        <p className="text-gray-600 mb-4 leading-relaxed">{projectDesc}</p>

        <h5 className="font-semibold text-gray-800 mb-2">Key Features:</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>Track all daily income and expenses in one place.</li>
          <li>Category-wise income and expense management.</li>
          <li>Monthly expense limit with overspending alerts.</li>
        </ul>

        {/* Tags */}
        <h5 className="font-semibold text-gray-800 mb-2">Technologies:</h5>

        <ul className="flex flex-wrap gap-2 mb-6">
          {technologies.map((technology, index) => (
            <li
              className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm"
              key={index}
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-auto ">
          <Button
            btnTitle={
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                Code
              </div>
            }
            btnVariant="secondary"
            customStyle="w-full"
            onBtnClick={() => {
              window.open(gitHubLink, "_blank");
            }}
          />
          <Button
            btnTitle={
              <>
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </>
            }
            btnVariant="primary"
            customStyle="w-full"
            onBtnClick={() => {
              window.open(liveLink, "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
