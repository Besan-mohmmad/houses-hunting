import React from 'react';

import {Landing ,Layout, NotFound } from '../pages'
import { Routes, Route} from 'react-router-dom';
import Details from '../pages/Details';
import SignIn from '../pages/SignIn';
import Filter from '../pages/Filter';
import About from '../pages/About'
// import NotFound from '../pages/NotFound';
import Profile from '../pages/profile'
import Register from '../pages/Register'
// import { AuthProvider } from '../components/Context';



function App() {
  return (
    <Layout className="App">
  
  {/* <AuthProvider> */}
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path={`/detailes/:id`} element={<Details/>} />
        <Route path='/About' element={< About/>}/>
        <Route path='/SignIn' element={<SignIn/>} /> 
        <Route path='/Filter' element={<Filter/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        {/* <Route path= '*' element={<NotFound/>}/> */}
        <Route path='/Register ' element={<Register />}/>
        
      </Routes>
      {/* </AuthProvider> */}
      {/* <SignIn/> */}
    </Layout>
    
  );
}
export default App