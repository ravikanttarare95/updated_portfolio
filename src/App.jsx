import React from "react";
import MyPhoto from "./../public/my-photo.png";
import { MapPin, Download, Linkedin, ExternalLink, Github } from "lucide-react";

import Button from "./components/Button";

import NAV_LINKS from "./configs/NavLinks.js";
import SOCIAL_ICONS from "./configs/SocialIcons.js";
import ProjectCard from "./components/ProjectCard.jsx";
import PROJECTS_INFO from "./configs/Projects.js";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="bg-white shadow-sm w-64 p-6 hidden md:flex flex-col items-center">
        {/* Profile image (visible on md+ screens) */}
        <img
          src={MyPhoto}
          alt="My Photo"
          className="w-32 h-32 rounded-full border-4 border-cyan-600 mb-6"
        />

        {/* Nav links */}
        <div className="mt-4 w-full space-y-3">
          {NAV_LINKS.map(({ linkTitle, icon: Icon }) => {
            return (
              <div key={linkTitle}>
                {" "}
                <button className="flex items-center gap-4 w-full px-4 py-3 text-gray-600 text-md font-semibold rounded-lg hover:bg-cyan-100 transition">
                  <Icon className="text-cyan-700" /> {linkTitle}
                </button>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6 md:p-12">
        <div className="bg-gray-50 rounded shadow p-7 sm:p-10 w-full">
          {/* Profile image (visible only on small screens) */}
          <div className="flex justify-center mb-6 md:hidden">
            <img
              src={MyPhoto}
              alt="My Photo"
              className="w-32 h-32 rounded-full border-4 border-cyan-700"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Ravikant Tarare
          </h1>

          {/* Title / Positions */}
          <h2 className="text-2xl font-semibold text-cyan-700 leading-snug mb-8">
            Full-Stack Developer | MERN Stack
          </h2>

          <div className="flex gap-5 mb-10">
            {SOCIAL_ICONS.map((iconObj, index) => {
              const { Icon } = iconObj;
              return (
                <div key={index}>
                  <Icon
                    size={39}
                    className="shadow-lg p-2 border-1 border-gray-200 rounded-lg bg-gray-100 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-600 cursor-pointer"
                  />
                </div>
              );
            })}
          </div>

          {/* Location */}
          <p className="flex items-center text-gray-600 text-lg mb-8">
            <MapPin className="w-6 h-6 mr-2" />
            Pune, India
          </p>

          {/* Bio */}
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            A passionate full-stack web developer with a focus on the MERN
            (MongoDB, Express.js, React, Node.js) stack — always learning,
            always coding, and building real-world web applications.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              btnTitle={
                <>
                  <Download className="w-5 h-5" />
                  Download Resume
                </>
              }
              btnVariant={"primary"}
              btnSize={"lg"}
            />
            <Button
              btnTitle={
                <>
                  <Linkedin className="w-5 h-5" />
                  View LinkedIn
                </>
              }
              btnVariant={"secondary"}
              btnSize={"lg"}
              onBtnClick={() => {
                window.open(
                  "https://www.linkedin.com/in/ravikant-tarare-7843b31b0/",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
        <div className=" w-full">
          <section className="py-16">
            {/* Heading */}
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto text-center mb-14">
              A selection of projects that highlight my skills in full-stack
              development, user-focused design, and modern web technologies.
            </p>

            {/* Projects Grid */}
            <div className="grid w-full gap-10 lg:grid-cols-2">
              {PROJECTS_INFO.map((projectObj) => {
                const {
                  id,
                  projectPhoto,
                  projectTitle,
                  projectDesc,
                  features,
                  technologies,
                  gitHubLink,
                  liveLink,
                } = projectObj;
                return (
                  <ProjectCard
                    projectPhoto={projectPhoto}
                    projectTitle={projectTitle}
                    projectDesc={projectDesc}
                    features={features}
                    technologies={technologies}
                    gitHubLink={gitHubLink}
                    liveLink={liveLink}
                    key={id}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
