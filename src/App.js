import React from 'react';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
// import EditUser from './EditUser';

import Home from './Home';
import Services from './Services';
import Courses1 from './Courses1';
import Contact from './Contact';
import EditUser from './EditUser'
import Login from './Login';
import Register from './Register';



// import Blog from './Blog';

// import PageNotFound from './PageNotFound';

const App = () =>{
  return(
    <>


<div>
          

       <Router>
      

       <NavBar />
        {/* <Navbar1 />     */}


       <Routes>

          
          <Route path='/' element={<Home />} >  </Route>

       
        <Route path='/Contact' element={<Contact  />}> </Route> 
         <Route path='/Courses1'element={<Courses1 />}></Route>
        <Route path ='/Services'element={<Services />}></Route>
        <Route path ='/Login'element={<Login />}></Route>
        <Route path ='/Register'element={<Register />}></Route>





         <Route path='/About' element={<About />} /> 

          {/* fallback routing */}
          {/* <Route path='*' element={<Contact />} /> */}


          {/* Edit User */}

          <Route path='/edituser/:id' element={<EditUser />} /> 
      
       
         </Routes>
       </Router>
</div>

    </>
  )
}

export default App;
