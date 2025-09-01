import React from "react";
import MyPhoto from "./../public/my-photo.png";
import { MapPin, Download, Linkedin, Github, Mail, Phone } from "lucide-react";
import { SiPeerlist } from "react-icons/si";
import Button from "./components/Button";

import NAV_LINKS from "./configs/NavLinks";
const SOCIAL_ICONS = [
  {
    Icon: Github,
  },
  {
    Icon: Linkedin,
  },
  {
    Icon: SiPeerlist,
  },
  {
    Icon: Mail,
  },
  {
    Icon: Phone,
  },
];

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
      <main className="flex justify-center p-6 md:p-12">
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
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
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
                    className="shadow-lg p-2 border-1 border-gray-300 rounded-lg bg-gray-100 text-gray-600 hover:text-cyan-600 hover:bg-cyan-100 hover:border-cyan-600 cursor-pointer"
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
                <div className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </div>
              }
              btnVariant={"primary"}
            />
            <Button
              btnTitle={
                <div className="flex items-center justify-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  View LinkedIn
                </div>
              }
              btnVariant={"secondary"}
              onBtnClick={() => {
                window.open(
                  "https://www.linkedin.com/in/ravikant-tarare-7843b31b0/",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
