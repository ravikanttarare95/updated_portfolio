import React from "react";
import MyPhoto from "./../public/my-photo.png";
import {
  MapPin,
  User,
  Briefcase,
  FolderKanban,
  Code2,
  Download,
  Linkedin,
} from "lucide-react";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="bg-white border-r shadow-sm w-64 p-6 hidden md:flex flex-col items-center">
        {/* Profile image (visible on md+ screens) */}
        <img
          src={MyPhoto}
          alt="My Photo"
          className="w-32 h-32 rounded-full border-4 border-cyan-500 mb-6"
        />

        {/* Nav links */}
        <div className="mt-4 w-full space-y-3">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-cyan-700 text-xl font-semibold rounded-lg bg-cyan-50 hover:bg-cyan-100 transition">
            <User className="w-6 h-6" /> About
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 text-xl font-semibold rounded-lg hover:bg-gray-100 transition">
            <Briefcase className="w-6 h-6" /> Experience
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 text-xl font-semibold rounded-lg hover:bg-gray-100 transition">
            <FolderKanban className="w-6 h-6" /> Projects
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 text-xl font-semibold rounded-lg hover:bg-gray-100 transition">
            <Code2 className="w-6 h-6" /> Skills
          </button>
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
          <h2 className="text-2xl font-semibold text-cyan-700 leading-snug mb-6">
            Full-Stack Developer | MERN Stack
          </h2>

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
            <a
              href="/resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-700 text-white text-base font-medium hover:bg-cyan-800 transition"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-cyan-700 text-cyan-700 text-base font-medium hover:bg-cyan-50 transition"
            >
              <Linkedin className="w-5 h-5" />
              View LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
