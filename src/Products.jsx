import React from 'react'

const Products =(props)=>{

    console.log(props)
  
      return(
          <>
  
  
          
          <div className='card'>
  <div className='card-header'>
    <h2 className='text-center font-weight-bold'>{props.name}</h2>
    
   </div>
  <div className='card-body text-center' >
     <img src={props.img} alt="" className='img-fluid' style={{height:'250px'}}></img>
  
  </div>
  
  <div className='card-footer p-3'>
    {/* <button className='btn btn-danger px-4 font-weight-bold mx-3'>{props.btn1}</button> */}



    <button className='btn btn-outline-success px-4 font-weight-bold ' style={{marginLeft:'23%'}}>{props.btn2}</button>
  </div> 
  
          </div>
  
  
  </>
      )
  }
  
  export default Products;
