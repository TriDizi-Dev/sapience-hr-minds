import "./careerCreation.css";

const CareerCreation = () => {
  return (
    <div className="career_creation_container">
      <div className="career_details_sub">
        <div>
          <h1>Career Creation</h1>
        </div>
        <form className="career_creation_form">
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
              />
            </div>
            <div className="input_container">
              <label htmlFor="type" className="career_labels">
                Type
              </label>
              <select name="type" id="type" className="career_input">
                <option value="">Full Time</option>
                <option value="">Part Time</option>
                <option value="">Internship</option>
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
              ></textarea>
            </div>
          </div>
        </form>

        <div className="career_creation_button_container">
          <button className="create_career_button">Create</button>
          <button className="cancel_career_button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CareerCreation;
