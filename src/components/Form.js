import { useState } from "react";
import { addStudent, addMentor } from "../utils/netwokHandler";
import { useHistory } from "react-router-dom";

const Form = ({ title, refreshData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const history = useHistory();
  const onFormSubmit = async () => {
    if (title === "Mentor") {
      await addMentor(form);
      refreshData();
      history.push("/");
    } else {
      await addStudent(form);
      refreshData();
      history.push("/");
    }
  };
  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>Add {title} Form</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <button className="button" onClick={onFormSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
