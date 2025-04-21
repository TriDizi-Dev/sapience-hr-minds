import React, { useEffect, useState } from "react";
import "./blogcreation.css";
import { supabase } from "../../supabase";
// import { Navbar } from "../../Components/NavBar/Navbar";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [blogContent, setBlogContent] = useState("");
  const [tags, setTags] = useState(""); // You can re-enable this if needed
  const [preview, setPreview] = useState(null);
  // const [blogs, setBlogs] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  console.log(blogContent,'blogContent');
  

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

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const fileExt = image.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("sapienceminds")
        .upload(fileName, image);

      if (uploadError) {
        console.error("Image upload error:", uploadError);
        alert("Error uploading image.");
        return;
      }

      const imageUrl = supabase.storage
        .from("sapienceminds")
        .getPublicUrl(fileName).data.publicUrl;

      const { error: insertError } = await supabase
        .from("blogs")
        .insert([{ title, content, image_url: imageUrl }]); // removed tags

      if (insertError) {
        console.error("Blog insert error:", insertError);
        alert("Error posting blog.");
      } else {
        alert("Blog posted successfully!");
        setTitle("");
        setContent("");
        setImage(null);
        setTags("");
        setPreview(null);
      }
    } catch (err) {
      console.error("Error during submission:", err);
      alert("An error occurred. Please try again.");
    }
  };

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    // Convert editor content to raw JSON or plain text
    const contentRaw = convertToRaw(newEditorState.getCurrentContent());
    const plainText = contentRaw.blocks.map(block => block.text).join("\n");
    setBlogContent(plainText); 
  };

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const { data, error } = await supabase
  //       .from('blogs')
  //       .select('*')
  //       .order('created_at', { ascending: false });

  //     if (error) {
  //       console.error('Error fetching blogs:', error);
  //     } else {
  //       setBlogs(data);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);
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

            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content..."
              rows="4"
              required
            />

            <div>
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                  options: ["inline", "list", "link"], // Make sure "link" is here
                  inline: {
                    options: ["bold", "italic", "underline"],
                  },
                  list: {
                    options: ["unordered", "ordered"],
                  },
                  link: {
                    inDropdown: false,
                    defaultTargetOption: "_blank",
                    options: ["link", "unlink"],
                    showOpenOptionOnHover: true,
                  },
                }}
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

            <button type="submit">Publish Blog</button>
          </form>
        </div>
      </div>
      {/* <div className="blogs-container">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h2>{blog.title}</h2>
          <img src={blog.image_url} alt={blog.title} />
          <p>{blog.content}</p>
        </div>
      ))}
    </div> */}
    </>
  );
};
