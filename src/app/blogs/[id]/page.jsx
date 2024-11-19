"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const params = useParams();
  const { id } = params;
  const [blogTitle, setBlogTitle] = useState("");
  const [date, setDate] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");

  const parseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString() + " | " + date.toLocaleTimeString();
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setHtmlContent(data.content);
          setBlogTitle(data.title);
          setDate(parseDate(data.createdAt));
        } else {
          console.error("Failed to fetch blog");
        }
      } catch (error) {
        console.error("Failed to fetch blog", error);
      }
    };
    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (htmlContent) {
      // Create a Blob URL for the HTML content
      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      setIframeSrc(url);

      // Clean up the Blob URL when the component unmounts or htmlContent changes
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [htmlContent]);

  return (
    <div>
      <div className="w-[80%] mx-auto flex flex-col gap-2 text-accent justify-center">
        <h1 className="text-3xl">{blogTitle}</h1>
        <span className="text-sm">Published Date: {date}</span>
      </div>
      {/* Render the HTML content inside the iframe */}
      <iframe
        src={iframeSrc}
        height="1000"
        style={{ border: "none" }}
        title="Blog Post"
        className="text-black bg-white/80 w-[80%] mx-auto mt-5 p-5 rounded"
      />
    </div>
  );
};

export default BlogPost;
