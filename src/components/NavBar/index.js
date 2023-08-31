import  React , {useContext, useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from "@mui/material/Typography";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import Imagelogo from '../../Utli/images/logo.png';
// import AuthContext from "../Context/AuthContext";
import{Link} from 'react-router-dom';
import './style.css'

const settings = ['Profile', 'Favorite', 'Logout'];
function NavBar() { 
//   const { isLoggedIn, setisLoggedIn, logout, setError } =
// useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isSignDialogOpen, setIsSignDialogOpen] = useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handellogout = () => {
  //   try {
  //     logout();
  //     Navigate("/");
  //   } catch (err) {
  //     setError("iiiii");
  //   }
  // };

  const handleLoginClick = () => {
    setIsLoginDialogOpen(true);
  };
  const handleSignClick = () => {
    setIsSignDialogOpen(true);
  };
  
  // const handleprofile =() => {
  //   navigator("/Portofil");
  // };
  return (
    <AppBar position="static" style={{
      backgroundColor:' #000839'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <img src={Imagelogo} alt="" width={110}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
          
            </Menu>
          </Box>
          
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',textTransform:'capitalize' }}
              >
              <Link to='/' style={{color:'#fff', textDecoration: 'none',}}>
              House
              </Link>
              </Button>
              <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block',textTransform:'capitalize' }}
            >
            <Link to='/about' style={{color:'#fff', textDecoration: 'none',}}>
              AboutUs
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
           
            
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Button variant="contained" style={{
                backgroundColor:'#FFA41B',
                marginRight:'5px',
                marginLeft:'5px',
                textTransform:'capitalize',
                color:'#fff'
              }}><Link to='/SignIn'  style={{textDecoration: 'none',  color:'#fff'}}>Sign in</Link></Button>
              <Button variant="contained" style={{
                backgroundColor:'#fff',
                color:'#000839',
                marginRight:'5px',
                marginLeft:'5px',
                textTransform:'capitalize'
              }}> <Link to='/Register' style={{textDecoration:'none', color:'#000839',}}>Register</Link></Button>
               
              </IconButton>
             
{/*        
            {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    className="avatar-profile"
                    alt="Bisan"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip> */}
            {/* <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              > */}
                {/* <section className="section-profile">
                  <Button>
                    <Link className="nav-profile" to="/Profile">
                      Profile
                    </Link>
                  </Button>
                  <Button>
                    <Link className="nav-profile" onClick={handellogout}>
                      log out
                    </Link>
                  </Button>
                </section>
              </Menu> */}
            {/* </Box> */}
          {/* // ) : (
          //   <section className="header-right">
          //     <button className="login-btn" onClick={handleLoginClick}>
          //       SignIn
          //     </button>
          //     <button className="signup-btn" onClick={handleSignClick}>
          //       SignUp
          //     </button>
          //   </section> */}
          {/* // )} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;





