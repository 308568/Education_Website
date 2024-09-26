import React, { useState } from "react";
import Axios from "axios";
import Navbar1 from "./Navbar1";
import UserData from "./UserData";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    skill: "",
    skill1: "",
  });
  const [showUserData, setShowUserData] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveForm = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3000/User", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", pass: "", skill: "", skill1: "" }); // Clear form after submission
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 m-0 p-0">
            {/* <h1 className="p-3 text-center text-warning">Contact</h1> */}

            <div className="c1">
              <div className="ci">
                <h1 style={{ margin: "5%", color: "white" }}>Contact</h1>
              </div>
            </div>

            <form onSubmit={saveForm}>
              <div className="row fw-bold p-4 text-light">
                <div className="col-md-8 my-3">
                  <div className="form-group">
                    <label>Enter Your Name:</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 my-3">
                  <div className="form-group">
                    <label>Enter Your Email:</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 my-3">
                  <div className="form-group">
                    <label>Enter Your Password:</label>
                    <input
                      type="password"
                      name="pass"
                      placeholder="Enter password"
                      value={formData.pass}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12 my-3">
                  <label>Choose Your Education:</label>
                  <select
                    name="skill1"
                    className="form-control"
                    value={formData.skill1}
                    onChange={handleInputChange}
                  >
                    <option value="None">Select Your Education</option>
                    <option value="BCA">BCA</option>
                    <option value="BCS">BCS</option>
                    <option value="BSC">BSC</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-12 my-3">
                  <label>Choose Your Course:</label>
                  <select
                    name="skill"
                    className="form-control"
                    value={formData.skill}
                    onChange={handleInputChange}
                  >
                    <option value="None">Select Your Course</option>
                    <option value="ReactJS">ReactJS</option>
                    <option value="Modern JS">Modern JS</option>
                    <option value="Node JS">Node JS</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="AWS Solution Arch">AWS Solution Arch</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-12 text-center">
                  <button className="btn btn-success px-4 my-3 fw-bold">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Navbar1 onClick={() => setShowUserData(!showUserData)} />
        {showUserData && <UserData />}

<Footer/>

      </div>
    </>
  );
};

export default Contact;
