import React from "react";
// import logo from '../Utilis/images/logo.png';
import { Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import './style.css'

const pages = ['Home', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Footer() {
    return (
        <footer className="footer">
            {/* <div className="logo-container">
                <img className="logo" src={logo} alt="Logo" />
            </div> */}
            
            <Typography variant="body2"  align="center" style={{backgroundColor:' #000839', color:'#fff'}}>
                &copy; {new Date().getFullYear()} Bisan muhammad 2023 house
            </Typography>
        </footer>
    )
}

export default Footer;
