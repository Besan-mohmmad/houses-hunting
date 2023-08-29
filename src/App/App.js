import React from 'react';

import {Landing ,Layout } from '../pages'
import { Routes, Route} from 'react-router-dom';
import Details from '../pages/Details';
import SignIn from '../pages/SignIn';
import Filter from '../pages/Filter';
// import NotFound from '../pages/NotFound';
import Portofil from '../pages/Portofil'
import Search from '../pages/Search'


function App() {
  return (
    <Layout className="App">
   
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path={`/detailes/:id`} element={<Details/>} />
        {/* <Route path='/about' element={< About/>}/> */}
        <Route path='/SignIn' element={<SignIn/>} /> 
        <Route path='/Filter' element={<Filter/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path='/Portofil' element={<Portofil/>}/>
        <Route path='/Search' element={<Search/>}/>

        {/* <Route exact  path= '*' element={<NotFound/>}/> */}
        
      </Routes>
      {/* <SignIn/> */}
    </Layout>
    
  );
}
export default App