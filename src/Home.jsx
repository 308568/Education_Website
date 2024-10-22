import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import Courses from "./Courses";
import Testomonials from "./Testomonials";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <div style={{ height: "100vh", float: "left" }}>
        <div className="bi">
          {/* <img src="assests/ed1.jpg" alt="" style={{height:'100vh',width:'100%'}} /> */}
          <div className="b1">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  style={{ backgroundImage: "assests/ed2.jpg" }}
                >
                  {/* <img src="assests/ed2.jpg" class="d-block w-100" alt="..."/> */}
                  <h1
                    style={{
                      fontSize: "100px",
                      marginTop: "20%",
                      marginLeft: "30%",
                      color: "white",
                    }}
                  >
                    YOU CAN LEARN ANYTHING
                  </h1>
                </div>
                <div className="carousel-item">
                  <img
                    src="assests/ed.jpg"
                    className="d-block w-100"
                    alt="..."
                    style={{ height: "100vh", width: "100%", float: "left" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="assests/ed2.jpg"
                    className="d-block w-100"
                    alt="..."
                    style={{ height: "100vh", width: "100%", float: "left" }}
                  />
                  {/* <h1></h1> */}
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* ********************************************** */}

        <div className="box2">
          <h1 className="head1">Why Academics Works</h1>
          <div className="ul1"></div>

          <div className="b2" data-aos="zoom-in-up">
            <img src="assests/sch1.png" alt="" className="img1" />
            <h2 style={{ marginLeft: "15%", marginTop: "3%" }}>
              Personalize Learning
            </h2>
            <p style={{ marginLeft: "20%", marginRight: "15%" }}>
              Personalized learning is an educational approach that aims to
              customize learning for each student’s strengths, needs, skills,
              and interests.
            </p>
            <button
              style={{
                backgroundColor: "lightgreen",
                marginLeft: "40%",
                padding: "2%",
              }}
            >
              Learn More
            </button>
          </div>

          <div className="b3" data-aos="zoom-in-up">
            <img
              src="assests/sch2.png"
              alt=""
              className="img1"
              style={{ height: "12vh" }}
            />
            <h2 style={{ marginLeft: "20%", marginTop: "3%" }}>
              Trusted Courses
            </h2>
            <p style={{ marginLeft: "20%", marginRight: "15%" }}>
              Recognise the procedure of conducting a needs analysis Identify
              the role of learning objectives in course design Indicate the ways
              to create a design .
            </p>
            <button
              style={{
                backgroundColor: "lightgreen",
                marginLeft: "40%",
                padding: "2%",
              }}
            >
              Learn More
            </button>
          </div>

          <div className="b4" data-aos="zoom-in-up">
            <img
              src="assests/sch3.png"
              alt=""
              className="img1"
              style={{ height: "12vh" }}
            />
            <h2 style={{ marginLeft: "15%", marginTop: "3%" }}>
              Tools for Students
            </h2>
            <p style={{ marginLeft: "20%", marginRight: "15%" }}>
              Motivating Students to Learn,Transformative Teaching for Unlocking
              Students' PotentialData Entry Tools and Techniques
            </p>
            <button
              style={{
                backgroundColor: "lightgreen",
                marginLeft: "40%",
                padding: "2%",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        {/* ******************************************************************************** */}

        <div
          className="p1"
          style={{
            height: "170vh",
            width: "100%",
            float: "left",
            marginTop: "10%",
          }}
        >
          <h1 className="head1" style={{ marginLeft: "10%" }}>
            Popular Courses
          </h1>
          <div className="ul1"></div>

          <div className="co1">
            <Courses />
          </div>
        </div>

        <div className="un1">
          <div style={{ width: "40%", float: "left" }}>
            <h2 style={{ marginLeft: "29%", marginTop: "10%", color: "white" }}>
              About Our University
            </h2>
            <div
              className="ul1"
              style={{
                width: "50%",
                marginLeft: "30%",
                backgroundColor: "palegreen",
              }}
            ></div>
          </div>

          <div style={{ width: "60%", float: "left" }}>
            <p style={{ marginTop: "7%", marginRight: "15%", color: "white" }}>
              {" "}
              To always remain inclusive and quality conscious, and with deep
              conviction that knowledge not only improves the quality of life,
              but leads to good character, to capitalize on our inherent
              advantages to generate skilled manpower for nation building
              through excellent teaching, attracting talent, fostering
              creativity, research, and innovation.
            </p>

            <p style={{ marginTop: "5%", marginRight: "15%", color: "white" }}>
              To provide free and conducive atmosphere for creative thinking and
              impart deep disciplinary knowledge with interdisciplinary
              bandwidth to the learners in order to make them problem solvers,
              leaders and entrepreneurs; * To assimilate and transmit the values
              of honesty, equality, human dignity, and inclusivity;
            </p>

            <p style={{ marginTop: "5%", marginRight: "15%", color: "white" }}>
              {" "}
              To contribute effectively to the welfare of society, address the
              local and global challenges; respecting culture, environment, and
              sustainability; * To attract, retain and engage talent in diverse
              disciplines and promote academic rigour and scholarship;
            </p>
          </div>
        </div>

        <div
          style={{
            height: "40vh",
            float: "left",
            marginTop: "5%",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <h1 className="tes1" style={{ marginLeft: "40%" }}>
            Testimonials
          </h1>
          <div className="ul1"></div>

          <div className="tes2">
            <Testomonials />
          </div>
        </div>

        <div className="bii">
          <div className="b9">
            <div className="info1" data-aos="zoom-in">
              <img src="assests/sch11.png" className="im1" alt="" />
              <h3 style={{ color: "palegreen", marginLeft: "40%" }}>
                Our Philosopy
              </h3>
              <p style={{ marginLeft: "40%", color: "rgb(151, 151, 151)" }}>
                {" "}
                The course will discuss the characteristics and learning styles
                of elementary, secondary and adult learners. Next, it will
                discuss the curriculum offered in the elementary and secondary
                schools. And thirdly, the course will discuss the role of the
                teacher in the classroom{" "}
              </p>
            </div>
            <div className="info2" data-aos="zoom-in">
              <img src="assests/sch22.png" className="im12" alt="" />
              <h3 style={{ color: "palegreen", marginLeft: "20%" }}>
                Academic Principle
              </h3>
              <p style={{ marginLeft: "20%", color: "rgb(151, 151, 151)" }}>
                {" "}
                In the scientific literature, motivation is often defined as “a
                process in which goal-directed activity is instigated and
                sustained” (Schunk et al., 2014, p. 5). Research on academic
                motivation focuses on explaining why students behave the way
                they do and how this affects learning and performance
              </p>
            </div>
            <div className="info3" data-aos="zoom-in">
              <img src="assests/sch33.png" className="im13" alt="" />
              <h3 style={{ color: "palegreen", marginLeft: "20%" }}>
                Key of success
              </h3>
              <p style={{ marginLeft: "20%", color: "rgb(151, 151, 151)" }}>
                {" "}
                Success in life may be defined by the individual. Your idea of
                success may differ greatly from someone else's idea of success.
                Once you learn how to succeed, you can apply the same strategies
                to other areas to improve the quality of your life. Figure out
                what works for you and what does not. This may give you an idea
                about your individualistic approach to doing things.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mrq1">
          <div className="mr1">
            <h2 style={{ color: "green", marginLeft: "10%" }}>
              News And Updates
            </h2>

            <img
              src="assests/edu-1.webp"
              alt=""
              style={{ height: "25vh", width: "40%", marginLeft: "5%" }}
            />
            <h2 style={{ marginLeft: "5%" }}>
              The Complete Google Ads Masterclass 2024
            </h2>
            <p style={{ marginLeft: "5%" }}>
              {" "}
              Learn Google Ads (AdWords) Strategies, PPC &amp; PMax to Increase
              Traffic, Leads &amp; Sales and Get Google Ads Certified!
            </p>
          </div>

          <div className="mr2">
            <h2 style={{ color: "green", marginLeft: "45%" }}>Our Features</h2>

            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/PHJVAQ6kFHM"
              title="Coaching Institute Advertisement Video | Coaching Institute Video | Video Production agency in India"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{ marginLeft: "25%" }}
              className="vid1"
            ></iframe>
          </div>
        </div>

        <div className="foot">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
