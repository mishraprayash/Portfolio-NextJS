import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/mishraprayash" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/prayash-mishra-5a409422b/" },
];
const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" target="_blank">
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
