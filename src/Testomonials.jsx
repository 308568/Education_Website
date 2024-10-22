import React from 'react'

const Testomonials = () => {
  return (
    <div>

<div style={{marginTop:'10%'}}>

  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="assests/c1.jpg" className="d-block w-10 " style={{height:'30vh', float:'left',borderRadius:'50%'}} alt="..." />
        <h3 style={{color:'black', marginLeft:'30%'}} >Neha Willson</h3>
        <p style={{color:'black', marginLeft:'30%'}} >Designer</p>
        <h2 style={{color:'goldenrod ',marginLeft:'30%'}}>★★★★★</h2>
        <p style={{color:'black', marginLeft:'30%',marginRight:'20%'}}> <b></b>Focused on vocational subjects, these teachers prepare students for specific careers with hands-on training and practical 
        skills in fields like design, technology, or trades.
        </p>

      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="assests/t1.jpeg" className="d-block w-10" style={{height:'30vh', float:'left',borderRadius:'50%'}} alt="..." />
        <h3 style={{color:'black', marginLeft:'30%'}} >Sara Willson</h3>
        <p style={{color:'black', marginLeft:'30%'}} >developer</p>
        <h2 style={{color:'goldenrod ',marginLeft:'30%'}}>★★★★★</h2>
        <p style={{color:'black', marginLeft:'30%',marginRight:'20%'}}> <b></b>In  Classroom, the Sara Willson becomes both a mentor and a target to his class of misfit students, teaching them life skills while training them to be his assassins. His unconventional methods and genuine
         care for his students turn the classroom into a crucible of growth and redemption.</p>
      </div>
      <div className="carousel-item">
        <img src="assests/t2.jpeg" className="d-block w-10"  style={{height:'30vh', float:'left',borderRadius:'50%'}} alt="..." />
        <h3 style={{color:'black', marginLeft:'30%'}} >Alison Holmes</h3>
        <p style={{color:'black', marginLeft:'30%'}} >Associate Professor</p>
        <h2 style={{color:'goldenrod ',marginLeft:'30%'}}>★★★★★</h2>
        <p style={{color:'black', marginLeft:'30%',marginRight:'20%'}}> <b></b>Experts in particular subjects such as Math, Science, English, or History, these teachers focus on delivering
         in-depth knowledge at the secondary or post-secondary level.</p>
      </div>
    </div>
    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon " aria-hidden="true"></span>
      <span className="visually-hidden ">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  </div>

  </div>

  )
}

export default Testomonials