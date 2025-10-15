import PocketPilotImg from "./../assets/pocket-pilot.png";
import BloGridImg from "./../assets/blogrid.png";

const PROJECTS_INFO = [
  {
    id: 1,
    projectPhoto: BloGridImg,
    projectTitle: "BloGrid",
    projectDesc:
      "BloGrid is a blogging app to share your stories, ideas, and experiences with the world.",
    features: [
      "User authentication & login with Google.",
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
  {
    id: 2,
    projectPhoto: PocketPilotImg,
    projectTitle: "Pocket Pilot",
    projectDesc:
      "Pocket Pilot is a finance management app where users efficiently track and manage their personal finances, including income, expenses, budgets.",
    features: [
      "Track all daily income and expenses in one place.",
      "Category-wise income and expense management with pie chart.",
      "Monthly expense limit with overspending alerts.",
      "View full transaction history.",
    ],
    technologies: ["React", "Tailwindcss", "Node.js", "Express.js", "MondoDB"],
    gitHubLink: "https://github.com/ravikanttarare95/pocket-pilot.git",
    liveLink: "https://pocket-pilot.onrender.com",
  },
];
export default PROJECTS_INFO;
