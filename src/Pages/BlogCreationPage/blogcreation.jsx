import React, { useState } from "react";
import "./blogcreation.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { storage, ref, push, set, storageRef, uploadBytes, getDownloadURL, database } from "../../Firebase/firebase"; // Import your Firebase functions
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [DepartmentOfblog,setDepartmentOfblog] = useState("")
  const [blogContent, setBlogContent] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const rawContent = convertToRaw(newEditorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);
    setBlogContent(htmlContent);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
  
    if (!image) {
      alert("Please select an image.");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const imageRef = storageRef(storage, `blogs/${Date.now()}-${image.name}`);
  console.log(imageRef,"lkjhgfddfgh");
  
      const uploadTask = await uploadBytes(imageRef, image);
      console.log('Image upload result:', uploadTask);
  
      const imageUrl = await getDownloadURL(uploadTask.ref);
      console.log(imageUrl, "imageUrlimageUrl");
  
      const newBlogRef = push(ref(database, "blogs/hr-minds"));
      await set(newBlogRef, {
        title,
        content,
        image_url: imageUrl,
        blog_content: blogContent,
        author_name: authorName,
        created_at: new Date().toISOString(),
      });
  
      alert("Blog posted successfully!");
      setTitle("");
      setContent("");
      setImage(null);
      setPreview(null);
      setAuthorName("");
      setEditorState(EditorState.createEmpty());
    } catch (err) {
      console.error("Error during submission:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="blog_creation_page">
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
              required
            />

            <label htmlFor="authorName">Author Name</label>
            <input
              id="authorName"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            <label htmlFor="DepartName">Department Name</label>
            <input
              id="DepartName"
              type="text"
              value={DepartmentOfblog}
              onChange={(e) => setDepartmentOfblog(e.target.value)}
            />

            <label htmlFor="content">Description</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              required
            />

            <label htmlFor="blogContent">Blog Content</label>
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={{
                options: ["inline", "list", "link"],
                inline: { options: ["bold", "italic", "underline"] },
                list: { options: ["unordered", "ordered"] },
              }}
            />

            <label htmlFor="image">Upload Image</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {preview && <img src={preview} alt="Preview" className="preview-img" />}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish Blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
