import React, { useState } from "react";
import "./blogcreation.css";
// import { Navbar } from "../../Components/NavBar/Navbar";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const [preview, setPreview] = useState(null);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      content,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    console.log("Submitted blog:", blogData);
    // Send data to backend here
  };

  return (
    <>
    <div className="blog_creation_page">

     {/* <Navbar /> */}
    </div>
     <div className="blog_page_main_container">

    <div className="blog-container">
      
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Create a New Blog</h2>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title" 
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content..."
          rows="4"
          required
        />

        <label htmlFor="image">Upload Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {preview && <img src={preview} alt="Preview" className="preview-img" />}

        {/* <label htmlFor="tags">Tags (comma separated)</label>
        <input
          id="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g., React, JavaScript, WebDev"
        /> */}

        <button type="submit">Publish Blog</button> 
      </form>
    </div>
     </div>
    </>
  );
};
