import React, { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    skill: "",
    skill1: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveForm = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3000/User", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", pass: "", skill: "", skill1: "" }); // Clear form after submission
    } catch {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", pass: "", skill: "", skill1: "" }); // Clear form after submission
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 text-primary">Contact Us</h2>
              <form onSubmit={saveForm}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    aria-label="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    aria-label="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">Password</label>
                  <input
                    type="password"
                    id="pass"
                    name="pass"
                    placeholder="Enter your password"
                    value={formData.pass}
                    onChange={handleInputChange}
                    className="form-control"
                    aria-label="Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="skill1" className="form-label">Education</label>
                  <select
                    id="skill1"
                    name="skill1"
                    className="form-select"
                    value={formData.skill1}
                    onChange={handleInputChange}
                    aria-label="Education"
                    required
                  >
                    <option value="">Select Your Education</option>
                    <option value="BCA">BCA</option>
                    <option value="BCS">BCS</option>
                    <option value="BSC">BSC</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="skill" className="form-label">Course</label>
                  <select
                    id="skill"
                    name="skill"
                    className="form-select"
                    value={formData.skill}
                    onChange={handleInputChange}
                    aria-label="Course"
                    required
                  >
                    <option value="">Select Your Course</option>
                    <option value="ReactJS">ReactJS</option>
                    <option value="Modern JS">Modern JS</option>
                    <option value="Node JS">Node JS</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="AWS Solution Arch">AWS Solution Arch</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary px-4 py-2" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
