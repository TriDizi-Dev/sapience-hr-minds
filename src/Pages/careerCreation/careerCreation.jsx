import { useState } from "react";
import "./careerCreation.css";
import { supabase } from "../../supabase";

const CareerCreation = () => {
  const [formData, setFormData] = useState({
    location: "",
    type: "",
    qualification: "",
    postedDate: "",
    title: "",
    description: "",
    jobDescription: "",
    requirements: "",
  });

  const formHandlerOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
   
     if (!image) {
       alert("Please select an image.");
       return;
     }
   
     const fileExt = image.name.split('.').pop();
     const fileName = `${Date.now()}.${fileExt}`;
   
     try {
   
       const { error: insertError } = await supabase
         .from('blogs')
         .insert([{ title, content, image_url: imageUrl }]); // removed tags
   
       if (insertError) {
         console.error('Blog insert error:', insertError);
         alert("Error posting blog.");
       } else {
         alert('Blog posted successfully!');
         setTitle('');
         setContent('');
         setImage(null);
         setTags('');
         setPreview(null);
       }
     } catch (err) {
       console.error('Error during submission:', err);
       alert('An error occurred. Please try again.');
     }
   };

  const cancelHandler = () => {
    setFormData({
      location: "",
      type: "",
      qualification: "",
      postedDate: "",
      title: "",
      description: "",
      jobDescription: "",
      requirements: "",
    });
  };

  return (
    <div className="career_creation_container">
      <div className="career_details_sub">
        <div>
          <h1>Career Creation</h1>
        </div>
        <form className="career_creation_form" onSubmit={handleSubmit}>
          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="location" className="career_labels">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.location}
              />
            </div>
            <div className="input_container">
              <label htmlFor="type" className="career_labels">
                Type
              </label>
              <select
                name="type"
                id="type"
                onChange={formHandlerOnChange}
                value={formData.type}
                className="career_input"
              >
                className="career_input"
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="qualification" className="career_labels">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.qualification}
              />
            </div>
            <div className="input_container">
              <label htmlFor="postedDate" className="career_labels">
                Posted Date
              </label>
              <input
                type="date"
                id="postedDate"
                name="postedDate"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.postedDate}
              />
            </div>
          </div>
          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="title" className="career_labels">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.title}
              />
            </div>
            <div className="input_container">
              <label htmlFor="description" className="career_labels">
                Title Description
              </label>
              <textarea
                id="description"
                className="career_textarea"
                name="description"
                onChange={formHandlerOnChange}
                value={formData.description}
              ></textarea>
            </div>
          </div>
          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="jobDescription" className="career_labels">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                className="career_textarea"
                name="jobDescription"
                onChange={formHandlerOnChange}
                value={formData.jobDescription}
              ></textarea>
            </div>
            <div className="input_container">
              <label htmlFor="requirements" className="career_labels">
                Requirements
              </label>
              <textarea
                id="requirements"
                className="career_textarea"
                name="requirements"
                onChange={formHandlerOnChange}
                value={formData.requirements}
              ></textarea>
            </div>
          </div>
          <div className="career_creation_button_container">
            <button className="create_career_button" type="submit">
              Create
            </button>
            <button
              className="cancel_career_button"
              type="button"
              onClick={cancelHandler}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerCreation;
