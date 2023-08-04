import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Home from './Home';
import Drinks from './Drinks';
import Hamburger from './Hamburger';
import Location from './Location';
import Meals from './Meals';
import Cakes from './Cakes';
import {useLocation} from 'react-router-dom';
import NotFound from './NotFound';
function App() {
  const{pathname}=useLocation();
  useLayoutEffect(()=>{
    window.scrollTo({top:0,behavior: "auto"});
  },[pathname])







  return (
    <div>
<div className='navbar'>    
<Link to='./'>HOME</Link>
<Link to='./hamburger'>HAMBURGER</Link>
<Link to='./meals'>MEALS</Link>
<span className='app1'>SPECIAL RESTAURANT</span>
<Link to='./cakes'>CAKES</Link>
<Link to='./drinks'>DRINKS</Link>
<Link to='./location'>LOCATION</Link>
</div>  



































<Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/cakes' element={<Cakes/>}/>
   <Route path='/drinks' element={<Drinks/>}/>
   <Route path='/hamburger' element={<Hamburger/>}/>
   <Route path='/location' element={<Location/>}/>
   <Route path='/meals' element={<Meals/>}/>
   <Route path='*' element={<NotFound/>}/>
</Routes>








    </div>
  );
}

export default App;
