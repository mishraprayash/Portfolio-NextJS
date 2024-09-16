"use client";

// next imports
import Link from "next/link";
import Image from "next/image";

// custom resources imports
import cap from "@/assets/resume/cap.svg";
import badge from "@/assets/resume/badge.svg";
import { aboutMe, myProjects, education, skills } from "./information";

// framer motion
import { motion } from "framer-motion";

// shadcn imports
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="myproject"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="myproject">My Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="myproject" className="w-full">
              <div className="flex flex-col gap-[30px] text-wrap">
                <h3 className="text-3xl font-bold text-center md:text-left">
                  <Image
                    src={badge}
                    height={20}
                    width={20}
                    alt="badge"
                    className="inline mx-2"
                  />
                  {myProjects.title}
                </h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">
                  {myProjects.description}
                </p>
                <div>
                  <span>Scroll Me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-7 h-7 inline mx-5 bg-white/50 hover:bg-white/70 rounded-full p-1 cursor-pointer"
                  >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
                <ScrollArea className="h-[450px]">
                  <ul className="flex flex-col gap-2 rounded mr-3">
                    {myProjects.projects.map((project, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-400/10 px-2 py-6 flex flex-col gap-2 items-start border border-white rounded-xl text-white/80 overflow-visible"
                        >
                          <h2>
                            <span className="font-bold text-accent">
                              Name:{" "}
                            </span>
                            {project.name}
                          </h2>
                          <div>
                            <span className="font-bold text-accent">
                              Description:{" "}
                            </span>
                            <span>{project.description}</span>
                          </div>
                          <div>
                            <span className="font-bold text-accent">
                              Contribution:{" "}
                            </span>
                            <span>{project.mycontribution}</span>
                          </div>
                          <div>
                            <span className="font-bold text-accent">
                              Technology:{" "}
                            </span>
                            <span>{project.technology}</span>
                          </div>
                          <div>
                            <span className="font-bold text-accent">
                              Link:{" "}
                            </span>
                            <Link
                              href={project?.link}
                              className="text-blue-300 italic underline"
                              target="_blank"
                            >
                              {project.link}
                            </Link>
                          </div>
                          <div>
                            {project?.Deployment && (
                              <span>
                                <span className="font-bold  text-accent">
                                  Deployment:{" "}
                                </span>
                                <Link
                                  href={project?.Deployment}
                                  className="text-blue-300 italic underline"
                                  target="_blank"
                                >
                                  {project.Deployment}
                                </Link>
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-3xl font-bold text-center md:text-left">
                    {skills.title}
                  </h3>
                  <p className="text-white/60 xl:mx-0 text-center md:text-left">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index} className="text-center md:text-left">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="bg-[#232329] w-full flex justify-center items-center rounded-xl h-[100px] group">
                              <div className="text-5xl rounded hover:scale-110 hover:text-accent transition-all duration-500">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white text-primary rounded capitalize">
                              {skill.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutme"
              className="w-full text-center md:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{aboutMe.title}</h3>
                <p className="text-white/60 xl:mx-0">{aboutMe.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:mx-0">
                  {aboutMe.info.map((info, index) => {
                    return (
                      <li key={index}>
                        <span className="text-accent">{info.fieldName}: </span>
                        {info.fieldValue === "Email" ? (
                          <span className="text-white">
                            <Link href="mailto:mishraprayash00@gmail.com">{info.fieldValue}</Link>
                          </span>
                        ) : (
                          <span className="text-white">{info.fieldValue}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-wrap">
                <h3 className="text-3xl font-bold text-center md:text-left">
                  <Image
                    src={cap}
                    height={25}
                    width={25}
                    alt="Icon"
                    className="inline mx-2"
                  />
                  {education.title}
                </h3>
                <ScrollArea className="h-[450px]">
                  <ul className="flex flex-col gap-2 rounded mr-3">
                    {education.items.map((education, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-400/10 px-2 py-6 flex flex-col gap-2 items-start border border-white rounded-xl text-white/80 overflow-visible"
                        >
                          <h2>
                            <span className="font-bold text-accent">
                              Degree :{" "}
                            </span>
                            {education.degree}
                          </h2>
                          <div>
                            <span className="font-bold text-accent">
                              Level:{" "}
                            </span>
                            <span>{education.level}</span>
                          </div>
                          <div>
                            <span className="font-bold text-accent">
                              Institution:{" "}
                            </span>
                            <span>{education.institution}</span>
                          </div>
                          <div>
                            <span className="font-bold text-accent">
                              Duration:{" "}
                            </span>
                            <span>{education.duration}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
