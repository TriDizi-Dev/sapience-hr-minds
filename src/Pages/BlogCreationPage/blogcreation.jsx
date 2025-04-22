import React, { useEffect, useState } from "react";
import "./blogcreation.css";
import { supabase } from "../../supabase";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

if (typeof setImmediate === "undefined") {
  window.setImmediate = function (callback) {
    return setTimeout(callback, 0);
  };
}

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Textarea description
  const [image, setImage] = useState(null);
  const [blogContent, setBlogContent] = useState(""); // Editor content
  const [preview, setPreview] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  let quillRef = null; 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  console.log(blogContent, "blogContent");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!image) {
      alert("Please select an image.");
      setIsSubmitting(false);
      return;
    }

    if (
      !blogContent ||
      !blogContent.blocks.some((block) => block.text.trim())
    ) {
      alert("Please enter blog content.");
      setIsSubmitting(false);
      return;
    }

    const fileExt = image.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("sapienceminds")
        .upload(fileName, image);

      if (uploadError) {
        console.error("Image upload error:", uploadError.message);
        alert("Error uploading image.");
        setIsSubmitting(false);
        return;
      }

      const imageUrl = supabase.storage
        .from("sapienceminds")
        .getPublicUrl(fileName).data.publicUrl;
      console.log("Image URL:", imageUrl);

      const { error: insertError } = await supabase.from("blogs").insert([
        {
          title,
          content, // Textarea description
          image_url: imageUrl,
          blog_content: JSON.stringify(blogContent), // Editor content
          author_name: authorName,
        },
      ]);

      if (insertError) {
        console.error(
          "Blog insert error:",
          insertError.message,
          insertError.details
        );
        alert("Error posting blog: " + insertError.message);
        setIsSubmitting(false);
      } else {
        alert("Blog posted successfully!");
        setTitle("");
        setContent("");
        setImage(null);
        setPreview(null);
        setAuthorName("");
        setEditorState(EditorState.createEmpty());
      }
    } catch (err) {
      console.error("Error during submission:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link'],
      [{ align: [] }],
      ['image'], // Enable image button in the toolbar
    ],
  };


  return (
    <>
      <div className="blog_creation_page">{/* <Navbar /> */}</div>
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
            <label htmlFor="authorName">Author Name</label>
            <input
              id="authorName"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Enter author name"
            />

            <label htmlFor="content">Description</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog description..."
              rows="4"
              required
            />

            <div>
              <label htmlFor="blogContent">Blog Content</label>
             

              <ReactQuill
                ref={(el) => {
                  quillRef = el;
                }}
                value={blogContent}
                onChange={(value) => setBlogContent(value)}
                modules={modules}
                className="rich-text"
                placeholder="Description"
              />
            </div>

            <label htmlFor="image">Upload Image</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {preview && (
              <img src={preview} alt="Preview" className="preview-img" />
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish Blog"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
