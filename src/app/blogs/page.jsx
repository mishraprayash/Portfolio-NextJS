"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const introduction = {
  title: "Welcome to My Blogs!",
  description:
    "As a student constantly exploring new topics and technologies, I use this space to share what I've learned along the way. From diving into new programming languages and tools to tackling complex engineering problems, I write practical, easy-to-follow blogs based on my experiences. Whether you're looking to learn something new or just curious about tech, I hope my posts help you on your own learning journey!",
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("networking");

  useEffect(() => {
    console.log(category);

    // fecching blogs from the server based on the category
    // we can only fetch blog title and id and date here
    const fetchBlogs = async () => {
      try {
        const blogResponse = await fetch(`/api/blogs?category=${category}`, {
          method: "GET",
        });
        const blogData = await blogResponse.json();
        setBlogs(blogData);
      } catch (error) {
        console.log(error);
        alert("Couldnot fetch blogs");
      }
    };
    fetchBlogs();
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12 xl:py-0"
    >
      <div className="flex flex-col gap-6 container mx-auto">
        {/* introduction */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl text-accent">{introduction.title}</h1>
          <p className="w-full text-white/60">{introduction.description}</p>
        </div>
        <p></p>
        {/* options */}
        <div className="w-full bg-[#27272c] shadow-xl rounded">
          <div className="flex flex-col gap-2 mx-10  py-4  text-white md:flex-row md:justify-evenly md:gap-2">
            <div
              className={`${
                category == "networking" && "scale-105 text-accent font-bold"
              }hover:text-accent font-semibold cursor-pointer duration-500`}
              onClick={() => {
                setCategory("networking");
              }}
            >
              Networking
            </div>

            <div
              className={`${
                category === "softwareengineering" &&
                "scale-105 text-accent font-bold "
              }hover:text-accent font-semibold cursor-pointer duration-500`}
              onClick={() => {
                setCategory("softwareengineering");
              }}
            >
              Software Engineering
            </div>

            <div
              className={`${
                category === "cybersecurity" &&
                "scale-105 text-accent font-bold"
              }hover:text-accent font-semibold cursor-pointer duration-500`}
              onClick={() => {
                setCategory("cybersecurity");
              }}
            >
              Cyber Security
            </div>
            <div
              className={`${
                category === "general" && "scale-105 text-accent font-bold"
              }hover:text-accent font-semibold cursor-pointer duration-500`}
              onClick={() => {
                setCategory("general");
              }}
            >
              General
            </div>
          </div>
        </div>
        {/* blogs */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3"> */}
          <div className="flex flex-col gap-4">
          {blogs.length==0?"No Blog Founded for this category":(blogs.map((blog, index) => (
            <li key={index} className="list-none bg-[#27272c] transition-all duration-1000">
              <div className="p-4 ">
                <div className="flex flex-col gap-2 md:flex-row md:justify-between ">
                  <Link
                    className="text-xl text-accent max-w-[500px] truncate font-bold capitalize"
                    href={`/blogs/${blog._id}`}
                  >
                    {blog.title}
                  </Link>
                  <div className="text-sm  text-wrap">
                    <b className="text-accent">Date:</b> {Date().toString()}
                  </div>
                </div>
              </div>
            </li>
          )))}
        </div>
      </div>
    </motion.div>
  );
};
export default Blog;
