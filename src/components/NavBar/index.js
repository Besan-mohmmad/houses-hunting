import  React from 'react';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import Imagelogo from '../../Utli/images/logo.png';
import{Link} from 'react-router-dom';
import './style.css'
//const pages = ['Houses', 'AboutUs'];
//const settings = ['Profile', 'Favorite', 'Logout'];
function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hunting
          </Typography> */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',textTransform:'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
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
            {/* <Tooltip title="Open settings"> */}
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
              }}>Sign up</Button>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
             
            {/* </Tooltip> */}
         
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > */}
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            {/* </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;


