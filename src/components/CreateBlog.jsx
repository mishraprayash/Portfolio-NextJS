"use client";
import { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]); // Add new images to the existing array
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove specific image
  };

  const handleRemoveAllImages = () => {
    setImages([]); // Clear all images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCreating) return;
    setIsCreating(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("/api/createblog", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Blog added successfully");
        setTitle("");
        setCategory("");
        setContent("");
        setImages([]);
      } else {
        alert('Failed to add blog');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add blog: " + error.message);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 overflow-auto m-10 rounded-2xl">
      <div className="w-full p-8 space-y-6 bg-primary rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Add New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
            <input
              type="text"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-black bg-slate-300"
              placeholder="Blog Title"
            />
          </div>

          {/* Category Field */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-white">Category</label>
            <select
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-black bg-slate-300"
            >
              <option value="" disabled >Select a category</option>
              <option value="cybersecurity">CyberSecurity</option>
              <option value="general">General</option>
              <option value="networking">Computer Network</option>
              <option value="softwareengineering">Software Engineering</option>
            </select>
          </div>

          {/* Content Field */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-white">Content</label>
            <textarea
              id="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="10"
              maxLength="5000000"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-black bg-slate-300"
              placeholder="<h1>Your HTML content here</h1>"
            />
          </div>

          {/* Image Upload Field */}
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-white">Images (optional)</label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-black bg-slate-300"
            />
          </div>

          {/* Image Preview and Remove Options */}
          {images.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-">Uploaded Images:</h3>
              {images.map((image, index) => (
                <div key={index} className="flex items-center justify-between text-white">
                  <span>{image.name}</span>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveImage(index)} 
                    className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              ))}
              
              {/* Button to Remove All Images */}
              <button 
                type="button" 
                onClick={handleRemoveAllImages} 
                className="w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-200"
              >
                Remove All Images
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {isCreating ? "Creating..." : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;