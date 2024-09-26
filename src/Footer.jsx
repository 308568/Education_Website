import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bi11">
        <div className="b8">
          <h1 style={{ color: "aliceblue", margin: "10%", float: "left" }}>
            Subscribe to Us!
          </h1>

          <input
            className="btt1"
            type="text"
            placeholder="Enter Your Email"
            style={{
              height: "8vh",
              width: "40%",
              float: "left",
              marginTop: "10%",
            }}
          />
          <button className="btn btn-success p-3 " style={{ marginTop: "10%" }}>
            Send
          </button>
        </div>
      </div>

      <div
        style={{
          height: "70vh",
          float: "left",
          backgroundColor: "#183661",
          width: "100%",
        }}
      >
        <div className="f1">
          {/* <h2 style={{marginLeft:'8%', marginTop:'8%',float:'left'}}>Append</h2> */}
          <img
            src="assests/name.jpg"
            alt=""
            style={{ marginLeft: "8%", marginTop: "8%", float: "left" }}
          />
          <p
            style={{
              marginLeft: "8%",
              float: "left",
              marginTop: "5%",
              color: "aliceblue",
            }}
          >
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div style={{ marginLeft: "8%", float: "left" }}>
            <img src="assests/face1.png" alt="" />
            <img src="assests/insta1.png" alt="" />
            <img src="assests/what1.png" alt="" />
            <img src="assests/twit1.png" alt="" />
          </div>
        </div>

        <div className="f2">
          <div style={{ float: "left", marginLeft: "8%", marginTop: "4%" }}>
            <h4 style={{ color: "white" }}>Useful Links</h4>
            <p style={{ color: "green" }}>Home</p>
            <p style={{ color: "green" }}>About Us</p>
            <p style={{ color: "green" }}>Services</p>
            <p style={{ color: "green" }}>Terms Of Services</p>
            <p style={{ color: "green" }}>Privacy policy</p>
          </div>

          <div style={{ float: "left", marginLeft: "8%", marginTop: "4%" }}>
            <h4 style={{ color: "white" }}>Our Services</h4>
            <p style={{ color: "green" }}>Web Development</p>
            <p style={{ color: "green" }}>Web design</p>
            <p style={{ color: "green" }}>Product Management</p>
            <p style={{ color: "green" }}>Marketing</p>
            <p style={{ color: "green" }}>Graphics Design</p>
          </div>

          <div style={{ float: "left", marginLeft: "8%", marginTop: "4%" }}>
            <h4 style={{ color: "white" }}>Contact Us</h4>
            <p style={{ color: "green" }}>A108 Adam Street</p>
            <p style={{ color: "green" }}>New York, NY 535022</p>
            <p style={{ color: "green" }}>United States</p>
            <p style={{ color: "green" }}>
              <b>Phone:</b>+1 5589 55488 55
            </p>
            <p style={{ color: "green" }}>
              <b>Email:</b>info@example.com
            </p>
          </div>
        </div>

        <div className="f3">
          <p className="text-center my-3 text-light">
            © Copyright <b>Append</b> All Rights Reserved
          </p>
          <p className="text-center my-2 text-light">
            Designed by <b className="text-danger"> Developer </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
