import React from "react";
import MyPhoto from "./../public/my-photo.png";
import { MapPin, Download, Linkedin, Code, PenTool, Users } from "lucide-react";

import Button from "./components/Button";

import NAV_LINKS from "./configs/NavLinks.js";
import SOCIAL_ICONS from "./configs/SocialIcons.js";
import ProjectCard from "./components/ProjectCard.jsx";
import PROJECTS_INFO from "./configs/Projects.js";
import H2 from "./components/H2.jsx";
import H3 from "./components/H3.jsx";
import SkillsIcon from "./components/SkillsIcon.jsx";
import HtmlImg from "./assets/icons/html.png";
import CssImg from "./assets/icons/css.png";
import JsImg from "./assets/icons/js.png";
import ReactImg from "./assets/icons/react.png";
import TailwindCssImg from "./assets/icons/tailwindcss.png";
import NodeJsImg from "./assets/icons/node-js.png";
import ExpressJsImg from "./assets/icons/express-js.png";
import MongoDBImg from "./assets/icons/mongo-db.png";
import GitImg from "./assets/icons/git.png";
import GitHubImg from "./assets/icons/github.png";
import PostmanImg from "./assets/icons/postman.png";
import ViteImg from "./assets/icons/vite.png";
import SOFT_SKILLS from "./configs/SoftSkills.js";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="bg-white shadow-md hover:shadow-xl ransition duration-300 w-80 p-6 hidden md:flex flex-col items-center h-screen">
        {/* Profile image (visible on md+ screens) */}
        <img
          src={MyPhoto}
          alt="My Photo"
          className="w-32 h-32 rounded-full border-4 border-cyan-600 mb-6 bg-gradient-to-b from-cyan-100 to-cyan-50"
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
      <main className="p-6 md:p-12 overflow-y-auto">
        <div className="bg-gray-50 rounded shadow-md hover:shadow-xl ransition duration-300 p-7 sm:p-10 w-full">
          {/* Profile image (visible only on small screens) */}
          <div className="flex justify-center mb-6 md:hidden">
            <img
              src={MyPhoto}
              alt="My Photo"
              className="w-32 h-32 rounded-full border-4 border-cyan-700 bg-gradient-to-b from-cyan-100 to-cyan-50"
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

          <div className="flex gap-3 sm:gap-5 mb-10">
            {SOCIAL_ICONS.map((iconObj, index) => {
              const { Icon, to } = iconObj;
              return (
                <div key={index}>
                  <Icon
                    size={39}
                    className="shadow-lg p-2 border-1 border-gray-400 rounded-lg bg-gray-100 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-600 duration-300 cursor-pointer"
                    onClick={() => {
                      window.open(to, "_blank");
                    }}
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
        {/*Projects Section */}
        <div className=" w-full">
          <section className="py-16">
            {/* Heading */}
            <H2 headingTitle={"Featured Projects"} />

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
        {/*Technical Skills Section */}
        <div>
          <H2 headingTitle={"Skills & Expertise"} />
          <p className="text-gray-600 text-lg max-w-xl mx-auto text-center mb-14">
            A comprehensive overview of my technical skills, tools, and soft
            skills that enable me to deliver high-quality software solutions.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-10">
            {/* Technical Skills */}
            <div className="flex-1 bg-white rounded shadow-md hover:shadow-xl ransition duration-300 p-6">
              <H3
                headingTitle={
                  <>
                    <Code className="min-w-10 min-h-10 bg-gradient-to-r from-cyan-700 to-cyan-800 rounded-full text-white p-3 mr-3" />
                    Technical Skills
                  </>
                }
              />
              <div className="flex justify-center items-center flex-wrap gap-4 mt-6">
                <SkillsIcon icon={HtmlImg} alt="Html Icon" />
                <SkillsIcon icon={CssImg} alt="Css Icon" />
                <SkillsIcon icon={JsImg} alt="Js Icon" />
                <SkillsIcon icon={ReactImg} alt="React Icon" />
                <SkillsIcon icon={TailwindCssImg} alt="TailwindCss Icon" />
                <SkillsIcon icon={NodeJsImg} alt="NodeJs Icon" />
                <SkillsIcon icon={ExpressJsImg} alt="ExpressJs Icon" />
                <SkillsIcon icon={MongoDBImg} alt="MongoDB Icon" />
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="flex-1 bg-white rounded shadow-md hover:shadow-xl ransition duration-300 p-6">
              <H3
                headingTitle={
                  <>
                    <PenTool className="min-w-10 min-h-10 bg-gradient-to-r from-cyan-700 to-cyan-800 rounded-full text-white p-3 mr-3" />
                    Tools & Technologies
                  </>
                }
              />
              <div className="flex justify-center items-center flex-wrap gap-4 mt-6">
                <SkillsIcon icon={GitImg} alt="Git Icon" />
                <SkillsIcon icon={GitHubImg} alt="GitHub Icon" />
                <SkillsIcon icon={ViteImg} alt="Vite Icon" />
                <SkillsIcon icon={PostmanImg} alt="Postman Icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded shadow-md hover:shadow-xl ransition duration-300 p-6">
          <H3
            headingTitle={
              <>
                <Users className="min-w-10 min-h-10 bg-gradient-to-r from-cyan-700 to-cyan-800 rounded-full text-white p-3 mr-3" />
                Soft Skills
              </>
            }
          />

          <div className="flex justify-center flex-wrap gap-3 mt-6">
            {SOFT_SKILLS.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-cyan-50 text-cyan-800 font-medium rounded-full border border-cyan-200 hover:bg-cyan-100 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
