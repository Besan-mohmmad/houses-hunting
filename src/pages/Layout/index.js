import React from 'react';
import NavBar from '../../components/NavBar'
// import Card from '../../components/hero'
// import Footer from '../../components/Footer'


const Layout = ({children})=> {
return <>
<NavBar/>
 {children}
 {/* <Card/> */}
{/* <Footer/> */}
</>
}

export default Layout