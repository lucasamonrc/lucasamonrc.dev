import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const socialLinks = [
  {
    url: "https://github.com/lucasamonrc",
    icon: <FaGithub className="w-5 h-5 hover:text-sky-600 transition-colors" />,
  },
  {
    url: "https://www.linkedin.com/in/lucasamonrc",
    icon: (
      <FaLinkedin className="w-5 h-5 hover:text-sky-600 transition-colors" />
    ),
  },
  // {
  //   url: "https://blog.lucasamonrc.dev",
  //   icon: (
  //     <SiSubstack className="w-5 h-5 hover:text-orange-500 transition-colors" />
  //   ),
  // },
];

export default socialLinks;
