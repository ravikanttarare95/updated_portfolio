import React from "react";
import MyPhoto from "./../public/my-photo.png";
import { MapPin, Download, Linkedin, ExternalLink, Github } from "lucide-react";

import Button from "./components/Button";

import NAV_LINKS from "./configs/NavLinks.js";
import SOCIAL_ICONS from "./configs/SocialIcons.js";

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
        <div className="bg-gray-50 rounded-xl shadow p-10 w-full">
          {/* Profile image (visible only on small screens) */}
          <div className="flex justify-center mb-6 md:hidden">
            <img
              src={MyPhoto}
              alt="My Photo"
              className="w-32 h-32 rounded-full border-4 border-cyan-500"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold text-gray-700 mb-3">
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
            <div className="max-w-6xl mx-auto">
              {/* Heading */}
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
                Featured Projects
              </h2>
              <p className="text-gray-600 text-lg w-150 mx-auto text-center mb-14">
                A selection of projects that highlight my skills in full-stack
                development, user-focused design, and modern web technologies.
              </p>

              {/* Projects Grid */}
              <div className="grid gap-10 md:grid-cols-2">
                {/* Project Card */}
                <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={MyPhoto}
                      alt="moneyBook"
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                      moneyBook
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      moneyBook helps you take control of your finances by
                      tracking your income and expenses all in one place.
                    </p>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Key Features:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                      <li>Track all daily income and expenses in one place.</li>
                      <li>Category-wise income and expense management.</li>
                      <li>Monthly expense limit with overspending alerts.</li>
                    </ul>

                    {/* Tags */}
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Technologies:
                    </h5>
                    <ul className="flex flex-wrap gap-2 mb-6">
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        React
                      </li>
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        Node.js
                      </li>
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        Express.js
                      </li>
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        MongoDB
                      </li>
                    </ul>

                    {/* Buttons */}
                    <div className="flex justify-between gap-3 mt-auto">
                      <Button
                        btnTitle={
                          <div className="flex items-center gap-2">
                            <Github className="w-5 h-5" />
                            Code
                          </div>
                        }
                        btnVariant="secondary"
                        customStyle="w-full"
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
                      />
                    </div>
                  </div>
                </div>

                {/* Duplicate and replace content for other projects */}
                <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white flex flex-col">
                  <div className="relative">
                    <img
                      src={MyPhoto}
                      alt="EduConnect"
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-cyan-700 opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                      EduConnect
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      EduConnect is an online learning platform designed to
                      connect students with curated courses and interactive
                      study tools.
                    </p>

                    <h5 className="font-semibold text-gray-800 mb-2">
                      Technologies:
                    </h5>
                    <ul className="flex flex-wrap gap-2 mb-6">
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        React
                      </li>
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        Tailwind CSS
                      </li>
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        Node.js
                      </li>
                      <li className="bg-cyan-50 px-3 py-1 rounded-full text-cyan-700 text-sm font-medium shadow-sm">
                        MongoDB
                      </li>
                    </ul>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        btnTitle={
                          <div className="flex items-center gap-2">
                            <Github className="w-5 h-5" />
                            Code
                          </div>
                        }
                        btnVariant="secondary"
                      />
                      <Button
                        btnTitle={
                          <div className="flex items-center gap-2">
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                          </div>
                        }
                        btnVariant="primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
