import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiPostman, SiLinux, SiPython, SiPostgresql } from "react-icons/si";

export const aboutMe = {
    title: "About Me",
    description:
        "I'm in my final year of Computer Engineering, and throughout my studies, I've developed a strong interest in building practical solutions with technology. I enjoy working on projects that challenge me, whether it's developing full-stack applications, understanding distributed systems, or diving into cloud infrastructure. Along the way, I've picked up skills in computer networks, cybersecurity and distributed systems. As I get closer to finishing my degree, I’m excited about the opportunities ahead and eager to bring what I've learned in my journey. I’m always looking for ways to improve, collaborate, and contribute to projects that make a difference. ",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Prayash Mishra",
        },
        {
            fieldName: "Phone",
            fieldValue: "+977 9848096818",
        },
        {
            fieldName: "Email",
            fieldValue: "mishraprayash00@gmail.com",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nepalese",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Language",
            fieldValue: "English, Hindi, Nepali",
        },
    ],
};

export const myProjects = {
    title: "My Projects and Experience",
    description:
        "These are some of the projects I have worked as my university projects and while participating in hackathons.",
    projects: [
        {
            name: "CareerLink",
            description:
                "A centralized integrated platform operated by a univerisity or a college which aims to bring students and industry together by making different opportunities available from the platform itself. This platform was created as a minor project during our 6th semester by a team of four.",
            mycontribution:
                "Written APIs, used NextAuth for authentication(using college email) and handled other backend part such as sending emails using the message queing system(BullMQ), implemeted rate limiting and also designed the database model.",
            technology: "NextJS, MongoDB, BullMQ",
            link: "https://github.com/mishraprayash/CareerLink",
            Deployment: "https://career-link-ten.vercel.app/",
        },
        {
            name: "Tokma",
            description:
                "A dedicated mobile app that connects tourists with local guides and nearby hotels and restuarants services. There is also an admin panel designed using React which is used for handling different clients services.The project was completely developed during a 36 hour hackathon organized by Pokhara Engineering College on 15th June, 2024.",
            mycontribution:
                "Designed the database model, written APIs for different routes, handled authentication and tested the APIs using Postman.",
            technology: "NodeJS(Express), React, Flutter, MongoDB, SqLite",
            link: "https://github.com/mishraprayash/Tokma-Backend",
        },
        {
            name: "",
            description: "",
            technology: "",
            link: "",
        },
    ],
};

export const education = {
    title: "My Education",
    items: [
        {
            level: "Bachelors",
            institution: "Paschimanchal Campus, IOE, Tribhuwan University",
            degree: "Bachelors in Computer Engineering",
            duration: "2021-2025",
        },
        {
            level: "High School",
            institution: "The Times International College",
            degree: "+2 Science",
            duration: "2017-2019",
        },
    ],
};

export const skills = {
    title: "My Skills",
    description:
        "These are some of the skillsets I acquired by building multiple projects and learning different concepts during my college.",
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <SiMongodb />,
            name: "mongodb"
        },
        {
            icon: <SiPostman />,
            name: "postman"
        },
        {
            icon: <SiLinux />,
            name: "linux"
        },
        {
            icon: <SiPython />,
            name: "python"
        }, {
            icon: <SiPostgresql />,
            name: "postgresql"
        }
    ],
};