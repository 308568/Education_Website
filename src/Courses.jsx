import React from "react";
import Products from "./Products";
import AOS from "aos";

export default class Coures extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,

      // allproduct: true,
      electronicpro: true,
      otherpro: true,
    };
  }

  // **********************************************

  Electronic = () => {
    // alert()

    this.setState({
      otherpro: false,
      electronicpro: true,
    });
  };

  //  ****************************************

  Allpro = () => {
    this.setState({
      otherpro: true,
      electronicpro: true,
    });
  };

  //  ****************************************
  otherprodcu = () => {
    this.setState({
      otherpro: true,
      electronicpro: false,
    });
  };

  componentDidMount() {
    AOS.init({ duration: 2000, once: true });
  }

  render() {
    const OtherProducts = [
      {
        id: 1,
        name: "Product Manager",
        img: "assests/c4.jpg",
        btn2: "Enroll this Course",
      },

      {
        id: 2,
        name: "Front-End Developer",
        img: "assests/c9.jpeg",
        btn2: "Enroll this Course",
      },

      {
        id: 3,
        name: "IT Support Specialist",
        img: "assests/c1.jpg",
        btn2: "Enroll this Course",
      },

      {
        id: 4,
        name: "UX Designer",
        img: "assests/c7.jpeg",
        btn2: "Enroll this Course",
      },

      {
        id: 5,
        name: "Project Manager",
        img: "assests/c3.jpg",
        btn2: "Enroll this Course",
      },

      // {
      //     id:6,
      //     name:"Fruits",
      //     img:"img/vg2.jpeg",
      //     btn1:"Add to card",
      //     btn2:"Buy Now"
      // }
    ];

    const ElectronicsProducts = [
      {
        id: 1,
        name: "Mobile Applicaton",
        img: "assests/c8.jpeg",
        btn2: "Enroll this Course",
      },

      {
        id: 2,
        name: "Data Analyst",
        img: "assests/c2.jpg",
        btn2: "Enroll this Course",
      },

      {
        id: 3,
        name: "Cybersecurity ",
        img: "assests/c6.jpeg",
        btn2: "Enroll this Course",
      },
    ];

    return (
      <>
        {/* <h1 className='text-center bg-dark mx-2 py-4 text-warning'>Ecommerce App</h1> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center my-5">
              <button
                className="btn btn-danger px-4 my-3 fw-bold"
                onClick={() => this.Allpro()}
              >
                All Courses
              </button>
              <button
                className="btn btn-outline-dark px-4 my-3 fw-bold mx-5"
                onClick={() => this.Electronic()}
              >
                Academic Courses
              </button>
              <button
                className="btn btn-success px-4 my-3 fw-bold"
                onClick={() => this.otherprodcu()}
              >
                Other Courses
              </button>
            </div>

            <div className="col-md-12">
              {/* nested grid */}
              <div className="row">
                {/* ***************************************************************** */}

                {this.state.otherpro
                  ? OtherProducts.map((val, index) => {
                      return (
                        <div
                          className="col-md-3 mt-3"
                          key={index}
                          data-aos="zoom-in"
                        >
                          <Products
                            name={val.name}
                            img={val.img}
                            btn1={val.btn1}
                            btn2={val.btn2}
                          />
                        </div>
                      );
                    })
                  : null}

                {/* *********************************************************************               */}

                {/* Iterate electronics */}

                {this.state.electronicpro &&
                  ElectronicsProducts.map((val, index) => {
                    return (
                      <div
                        className="col-md-3 mt-3"
                        key={index}
                        data-aos="flip-up"
                      >
                        <Products
                          name={val.name}
                          img={val.img}
                          btn1={val.btn1}
                          btn2={val.btn2}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
