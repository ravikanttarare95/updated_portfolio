import moneyBookImg from "./../assets/money-book.png";
import swadImg from "./../assets/swad.png";

const PROJECTS_INFO = [
  {
    id: 1,
    projectPhoto: moneyBookImg,
    projectTitle: "moneyBook",
    projectDesc:
      "moneyBook helps you take control of your finances by tracking your income and expenses all in one place.",
    features: [
      "Track all daily income and expenses in one place.",
      "Category-wise income and expense management with pie chart.",
      "Monthly expense limit with overspending alerts.",
      "View full transaction history.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    gitHubLink: "https://github.com/ravikanttarare95/money-book.git",
    liveLink: "https://money-book-ruby.vercel.app",
  },

  {
    id: 2,
    projectPhoto: swadImg,
    projectTitle: "Swad",
    projectDesc:
      "Experience the authentic taste of India with our delicious, home-style meals. Fresh ingredients, traditional recipes, and a warm ambiance await you!",
    features: [
      "Implement Form Validation for Reviews.",
      "Increase/Decrease item's quantity.",
      "Total price calculation.",
    ],
    technologies: ["React", "Node.js", "Tailwindcss"],
    gitHubLink: "https://github.com/ravikanttarare95/swad-tasty-food.git",
    liveLink: "https://swad-the-taste.netlify.app",
  },
];
export default PROJECTS_INFO;
