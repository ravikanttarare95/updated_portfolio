import PocketPilotImg from "./../assets/pocket-pilot.png";
import BloGridImg from "./../assets/blogrid.png";

const PROJECTS_INFO = [
  {
    id: 1,
    projectPhoto: PocketPilotImg,
    projectTitle: "Pocket Pilot",
    projectDesc:
      "Pocket Pilot is a finance management app where users efficiently track and manage their personal finances, including income, expenses, budgets.",
    features: [
      "User registration	/	login (email/password) and Google	OAuth.",
      "JWT-based	authentication	for protected routes.",
      "Category-wise income and expense management with pie chart.",
      "Monthly budget storage and overspend	alerts.",
      "Track Full Transaction	Details.",
      "Data	encryption	for security.",
      "Responsive design for mobile and desktop",
    ],
    technologies: ["React", "Tailwindcss", "Node.js", "Express.js", "MondoDB"],
    gitHubLink: "https://github.com/ravikanttarare95/pocket-pilot.git",
    liveLink: "https://pocket-pilot.onrender.com",
  },
  {
    id: 2,
    projectPhoto: BloGridImg,
    projectTitle: "BloGrid",
    projectDesc:
      "BloGrid is a blogging app to share your stories, ideas, and experiences with the world.",
    features: [
      "User registration	/	login (email/password) and Google	OAuth.",
      "JWT-based	authentication	for protected routes.",
      "Create, edit, and post blogs.",
      "Users can comment, like, and mark blogs as favourites.",
      "Image upload with drag & drop using imagekit.io.",
      "API caching for faster performance.",
      "Data encryption for security.",
    ],
    technologies: ["React", "Tailwindcss", "Node.js", "Express.js", "MondoDB"],
    gitHubLink: "https://github.com/ravikanttarare95/blogrid.git",
    liveLink: "https://blogrid-ui.onrender.com",
  },
];
export default PROJECTS_INFO;
