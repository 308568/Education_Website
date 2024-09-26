import React,{useEffect} from 'react'
import './About.css'
import AOS from 'aos'
import Footer from './Footer';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (

    <>

<div className="c1">
               <div className="ci">

                 <h1 style={{margin:'5%',color:'white'}}>About</h1>

                 </div>
            </div>


            <div style={{height:'60vh', marginTop:'2%' ,float:'left',width:'100%',backgroundColor:'#8082C4'}}>

  <div style={{width:'40%',float:'left'}}>
  <h2  style={{marginLeft:'29%',marginTop:'10%',color:'white' }}>About Our University</h2>
  <div   className='ul1' style={{ width:'50%',marginLeft:'30%',backgroundColor:'palegreen'}}></div>
  </div>

  <div style={{width:'60%',float:'left'}}>
    <p style={{marginTop:'7%',marginRight:'15%',color:'white'}}> To always remain inclusive and quality conscious, and with deep conviction that knowledge
       not only improves the quality of life, but leads to good character, to capitalize on our inherent
        advantages to generate skilled manpower for nation building through excellent teaching,
         attracting talent, fostering creativity, research, and innovation.</p>

    <p style={{marginTop:'5%',marginRight:'15%',color:'white'}}>To provide free and conducive atmosphere for creative thinking and impart deep disciplinary knowledge with interdisciplinary bandwidth to the learners in order to make them problem solvers, leaders and entrepreneurs;

* To assimilate and transmit the values of honesty, equality, human dignity, and inclusivity;</p>

<p style={{marginTop:'5%',marginRight:'15%',color:'white'}}> To contribute effectively to the welfare of society, address the local and global challenges; respecting culture, environment, and sustainability;

* To attract, retain and engage talent in diverse disciplines and promote academic rigour and scholarship;</p>
  </div>

</div>



{/* ********************************************************************************* */}

<div className='ab1'>


<div className='ab11' data-aos="flip-left">
  <img src="assests/c1.jpg" alt="" style={{height:'45vh', margin:'4%',marginLeft:'20%'}} />
</div>

<div className='ab12'>

<h2 style={{marginLeft:'20%',marginTop:'3%'}}>Why Academics Works</h2>
<div className='ul1' style={{width:'43%',float:'left',marginLeft:'20%'}}></div>

<p style={{marginLeft:'20%',marginRight:'15%',float:'left',marginTop:'5%'}}>Personalized learning is an educational approach that
       aims to customize learning for each student’s
       strengths, needs, skills, and interests.</p>

       <p style={{marginLeft:'20%',marginRight:'15%'}}>Recognise the procedure of conducting a needs analysis
       Identify the role of learning objectives in course design Indicate the ways to create a design .</p>

    <p style={{marginLeft:'20%',marginRight:'15%'}}>Motivating Students to Learn,Transformative Teaching for Unlocking Students' PotentialData Entry Tools and Techniques</p>


</div>

</div>


{/* ************************************* */}

<div className='ab1'>

<div className='ab12'>

<h2 style={{marginLeft:'20%',marginTop:'3%'}}>Personalized Learning</h2>
<div className='ul1' style={{width:'43%',float:'left',marginLeft:'20%'}}></div>

<p style={{marginLeft:'20%',marginRight:'15%',float:'left',marginTop:'5%'}}>Personalized learning is an educational approach that
       aims to customize learning for each student’s
       strengths, needs, skills, and interests.</p>

       <p style={{marginLeft:'20%',marginRight:'15%'}}>Recognise the procedure of conducting a needs analysis
       Identify the role of learning objectives in course design Indicate the ways to create a design .</p>

    <p style={{marginLeft:'20%',marginRight:'15%'}}>Motivating Students to Learn,Transformative Teaching for Unlocking Students' PotentialData Entry Tools and Techniques</p>


</div>


<div className='ab11' data-aos="flip-right">
  <img src="assests/c3.jpg" alt="" style={{height:'45vh', margin:'4%',marginLeft:'20%'}} />
</div>

</div>



{/* ***************************************************************************** */}



{/* <div className='bii'>
  <div className='b9'>


<div className='info1' data-aos='zoom-in'>
  <img src="assests/sch11.png" className='im1' alt="" />
  <h3 style={{color:'palegreen',marginLeft:'40%'}}>Our Philosopy</h3>
  <p style={{marginLeft:'40%',color:'rgb(151, 151, 151)'}}> The course will discuss the characteristics and learning styles of elementary, secondary and adult learners. Next, it will discuss the curriculum offered in the elementary and
     secondary schools. And thirdly, the course will discuss the role of the teacher in the classroom </p>
</div>
<div className='info2' data-aos='zoom-in'>
<img src="assests/sch22.png" className='im12' alt="" />
<h3 style={{color:'palegreen',marginLeft:'20%'}}>Academic Principle</h3>
<p style={{marginLeft:'20%',color:'rgb(151, 151, 151)'}}> In the scientific literature, motivation is often defined as “a process in which goal-directed activity is instigated and sustained” (Schunk et al., 2014, p. 5). Research on academic motivation focuses on explaining why students 
  behave the way they do and how this affects learning and performance</p>

</div>
<div className='info3' data-aos='zoom-in'>
<img src="assests/sch33.png" className='im13' alt="" />
<h3 style={{color:'palegreen' ,marginLeft:'20%'}}>Key of success</h3>
<p style={{marginLeft:'20%',color:'rgb(151, 151, 151)'}}> Success in life may be defined by the individual. Your idea of success may differ greatly from someone else's idea of success. Once you learn how to succeed, you can apply the same strategies to other areas to improve the quality of your life. Figure out what works for you
   and what does not. This may give you an idea about your individualistic approach to doing things. </p>

</div>


  </div>
</div> */}


<div className='bii'>
  <div className='b9'>

    <div className='info1' data-aos='zoom-in'>
      <img src="assests/sch11.png" className='im1' alt="" />
      <h3 style={{color:'green'}}>Our Philosophy</h3>
      <p style={{color:'white'}}>The course will discuss the characteristics and learning styles of elementary, secondary, and adult learners...</p>
    </div>

    <div className='info2' data-aos='zoom-in'>
      <img src="assests/sch22.png" className='im12' alt="" />
      <h3  style={{color:'green'}}>Academic Principle</h3>
      <p style={{color:'white'}}>Motivation is defined as "a process in which goal-directed activity is instigated and sustained".</p>
    </div>

    <div className='info3' data-aos='zoom-in'>
      <img src="assests/sch33.png" className='im13' alt="" />
      <h3  style={{color:'green'}}>Key to Success</h3>
      <p style={{color:'white'}}>Success in life is individualistic, and once learned, it can be applied to other areas.</p>
    </div>

  </div>
</div>


{/* **************************************************************************** */}


<h1 className='head1' style={{marginLeft:'40%'}}>Our Teachers</h1>
<div className='ul1'></div>


{/* 
<div className='Team'
 style={{backgroundColor:'aliceblue',height:'150vh',float:'left' ,marginTop:'5%', width:'100%'}}>
       
       <div data-aos='fade-up' style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
        <img src="assests/c1.jpg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />

         <h3 className='text-center'>Sarah Jhonson</h3>
         <p className='text-center'> Product Manager</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
       </div>


       <div data-aos='fade-up' style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
        <img src="assests/t2.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />

         <h3 className='text-center'>Walter White</h3>
         <p className='text-center'> Chief Executive Officer</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
       </div>



       <div data-aos='fade-up' style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
        <img src="assests/t4.jpg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />

         <h3 className='text-center'> William Anderson</h3>
         <p className='text-center'> CTO</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
       </div>



       <div data-aos='fade-up' style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
        <img src="assests/t4.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />

         <h3 className='text-center'>Amanda Jepson</h3>
         <p className='text-center'> Accountant</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
       </div>


       <div data-aos='fade-up' style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
        <img src="assests/t5.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />

         <h3 className='text-center'>Brian Doe</h3>
         <p className='text-center'> Marketing</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
       </div>

       <div data-aos='fade-up' style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
        <img src="assests/t3.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />

         <h3 className='text-center'>Josepha Palas</h3>
         <p className='text-center'> Operation</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
       </div>
       </div> */}



<div className="Team">
  <div data-aos='fade-up'  style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
    <img src="assests/c1.jpg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />
    <h3 className='text-center'>Sarah Johnson</h3>
    <p className='text-center'>Product Manager</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
  </div>

  <div data-aos='fade-up'  style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
    <img src="assests/t2.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}}/>
    <h3 className='text-center'>Walter White</h3>
    <p className='text-center'>Chief Executive Officer</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
  </div>

  <div data-aos='fade-up'  style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
    <img src="assests/t4.jpg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />
    <h3 className='text-center'>William Anderson</h3>
    <p className='text-center'>CTO</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
  </div>

  <div data-aos='fade-up'  style={{marginTop:'3%' , marginRight:'10%', float:'right', width:'20%'}}>
    <img src="assests/t4.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />
    <h3 className='text-center'>Amanda Jepson</h3>
    <p className='text-center'>Accountant</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
  </div>

  <div data-aos='fade-up'  style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}>
    <img src="assests/t5.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />
    <h3 className='text-center'>Brian Doe</h3>
    <p className='text-center'>Marketing</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
  </div>

  <div data-aos='fade-up'  style={{marginTop:'3%' , marginLeft:'10%', float:'left', width:'20%'}}> 
    <img src="assests/t3.jpeg" alt="" style={{ height:'40vh', width:'100%' , borderStyle:'groove',borderRadius:'50%'}} />
    <h3 className='text-center'>Josepha Palas</h3>
    <p className='text-center'>Operation</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, dolore.. Quam</p>
  </div>
</div>


       <div>
        <Footer />
       </div>

    
    </>

  )
}

export default About