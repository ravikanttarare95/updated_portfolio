import {
  MapPin,
  User,
  Briefcase,
  FolderKanban,
  Code2,
  Download,
  Linkedin,
} from "lucide-react";

const NAV_LINKS = [
  {
    linkTitle: "About",
    icon: User,
    to: "about",
  },
  // {
  //   linkTitle: "Experience",
  //   icon: Briefcase,
  //   to:"experience"
  // },
  {
    linkTitle: "Projects",
    icon: FolderKanban,
    to: "projects",
  },
  {
    linkTitle: "Skills",
    icon: Code2,
    to: "skills",
  },
];
export default NAV_LINKS;
