import React from 'react'
import Footer from './Footer'
import './Services.css'

const Services = () => {
  return (

    <>

    <div className="c1">
    <div className="ci">

    <h1 style={{margin:'5%',color:'white'}}>Admissions</h1>

    </div>
</div>

<div style={{height:'80vh',width:'100%',float:'left',marginTop:'5%'}}>

    <div style={{height:'82vh',width:'50%',float:'left',backgroundColor:'aliceblue'}}>
       
       <img src="assests/c2.jpg" alt="" style={{height:'50vh',width:'70%',marginLeft:'20%',marginTop:'20%'}} />

    </div>

    <div style={{height:'82vh',width:'50%',float:'left',backgroundColor:'aliceblue'}}>
        
    <h3 style={{marginTop:'20%',marginLeft:'10%'}}>College Requirements</h3>
    <div className='ul1' style={{marginLeft:'10%',width:'37%'}}></div>

  
    <p style={{marginLeft:'10%', marginRight:'30%',marginTop:'5%'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Illum, necessitatibus!</p>

         <p style={{marginLeft:'10%', marginRight:'30%'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Illum, necessitatibus!</p>

         <h5 style={{marginLeft:'10%'}}>✔️ Accomplished Application Form</h5>
         <h5 style={{marginLeft:'10%'}}>✔️High School Report Card</h5>
         <h5 style={{marginLeft:'10%'}}> ✔️High School Transcript</h5>
         <h5 style={{marginLeft:'10%'}}> ✔️Certificate of Good Moral Character</h5>
         <h5 style={{marginLeft:'10%'}}> ✔️2×2 picture</h5>

    </div>

</div>

<div style={{height:'80vh',width:'100%',float:'left',marginTop:'8%'}}>

<div style={{height:'80vh',width:'50%',float:'left',backgroundColor:'aliceblue'}}>
        
        <h3 style={{marginTop:'20%',marginLeft:'10%'}}>College Requirements</h3>
        <div className='ul1' style={{marginLeft:'10%',width:'37%'}}></div>
    
      
        <p style={{marginLeft:'10%',marginTop:'5%'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Illum, necessitatibus!</p>
    
             <p style={{marginLeft:'10%'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Illum, necessitatibus!</p>
    
             <h5 style={{marginLeft:'10%'}}>✔️ Accomplished Application Form</h5>
             <h5 style={{marginLeft:'10%'}}>✔️High School Report Card</h5>
             <h5 style={{marginLeft:'10%'}}> ✔️High School Transcript</h5>
             <h5 style={{marginLeft:'10%'}}> ✔️Certificate of Good Moral Character</h5>
             <h5 style={{marginLeft:'10%'}}> ✔️2×2 picture</h5>
    
        </div>

        <div style={{height:'80vh',width:'50%',float:'left',backgroundColor:'aliceblue'}}>
       
       <img src="assests/c4.jpg" alt="" style={{height:'50vh',width:'70%',marginLeft:'5%',marginTop:'20%'}} />

    </div>

</div>

<div>
    <Footer />
</div>


</>
  )
}

export default Services