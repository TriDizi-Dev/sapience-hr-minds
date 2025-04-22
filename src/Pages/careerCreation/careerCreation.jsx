import { useState } from "react";
import "./careerCreation.css";
import { database, ref, push, set } from "../../Firebase/firebase";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CareerCreation = () => {
  const [formData, setFormData] = useState({
    ShortDiscription: "",
    JobDiscription: null,
    Requirements: null,
    Location: "",
    Type: "",
    Qualification: "",
    PostDate: "",
    JobTitle: "",
    Category: "",
    FieldOfJob: "",
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [Requirements,setRequirements] = useState(EditorState.createEmpty());
  console.log(formData.Requirements,"lkjhgfghj");
  

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const rawContent = convertToRaw(newEditorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);
    setFormData((prev) => ({
      ...prev,
      JobDiscription: htmlContent,
    }));
  };
  const onEditorRequirementStateChange = (newEditorState) => {
    setRequirements(newEditorState);
    const rawContent = convertToRaw(newEditorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);
    setFormData((prev) => ({
      ...prev,
      Requirements: htmlContent,
    }));
  };

  const formHandlerOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const careerRef = ref(database, "careers");
      const newCareerRef = push(careerRef);
      await set(newCareerRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      alert("Career post created successfully!");
      cancelHandler();
    } catch (error) {
      console.error("Error saving career:", error);
      alert("An error occurred while saving the career.");
    }
  };

  const cancelHandler = () => {
    setFormData({
      ShortDiscription: "",
      JobDiscription: "",
      Requirements: "",
      Location: "",
      Type: "",
      Qualification: "",
      PostDate: "",
      JobTitle: "",
      Category: "",
      FieldOfJob: "",
    });
    setEditorState(EditorState.createEmpty());
    setRequirements(EditorState.createEmpty())
  };

  return (
    <div className="career_creation_container">
      <div className="career_details_sub">
        <h1>Career Creation</h1>
        <form className="career_creation_form" onSubmit={handleSubmit}>
          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="Location" className="career_labels">Location</label>
              <input
                type="text"
                id="Location"
                name="Location"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.Location}
              />
            </div>
            <div className="input_container">
              <label htmlFor="Category" className="career_labels">Category</label>
               <select
                name="Category"
                id="Category"
                onChange={formHandlerOnChange}
                value={formData.Category}
                className="career_input"
              >
                <option value="">Select job type</option>
                <option value="Our">Our</option>
                <option value="Clients">Clients</option>
              </select>
            </div>
            <div className="input_container">
              <label htmlFor="FieldOfJob" className="career_labels">FieldOfJob</label>
              <input
                type="text"
                id="FieldOfJob"
                name="FieldOfJob"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.FieldOfJob}
              />
            </div>
            <div className="input_container">
              <label htmlFor="Type" className="career_labels">Type</label>
              <select
                name="Type"
                id="Type"
                onChange={formHandlerOnChange}
                value={formData.Type}
                className="career_input"
              >
                <option value="">Select job type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="Qualification" className="career_labels">Qualification</label>
              <input
                type="text"
                id="Qualification"
                name="Qualification"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.Qualification}
              />
            </div>
            <div className="input_container">
              <label htmlFor="PostDate" className="career_labels">Posted Date</label>
              <input
                type="date"
                id="PostDate"
                name="PostDate"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.PostDate}
              />
            </div>
          </div>

          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="JobTitle" className="career_labels">Title</label>
              <input
                type="text"
                id="JobTitle"
                name="JobTitle"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.JobTitle}
              />
            </div>
            <div className="input_container">
              <label htmlFor="ShortDiscription" className="career_labels">Title Description</label>
              <textarea
                id="ShortDiscription"
                className="career_textarea"
                name="ShortDiscription"
                onChange={formHandlerOnChange}
                value={formData.ShortDiscription}
              ></textarea>
            </div>
          </div>

          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="JobDiscription" className="career_labels">Job Description</label>
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
            </div>

            <div className="input_container">
              <label htmlFor="Requirements" className="career_labels">Requirements</label>
              <Editor
                Requirements={Requirements}
                onEditorStateChange={onEditorRequirementStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                  options: ["inline", "list", "link"],
                  inline: { options: ["bold", "italic", "underline"] },
                  list: { options: ["unordered", "ordered"] },
                }}
              />
              {/* <textarea
                id="Requirements"
                className="career_textarea"
                name="Requirements"
                onChange={formHandlerOnChange}
                value={formData.Requirements}
              ></textarea> */}
            </div>
          </div>

          <div className="career_creation_button_container">
            <button className="create_career_button" type="submit">Create</button>
            <button className="cancel_career_button" type="button" onClick={cancelHandler}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerCreation;
