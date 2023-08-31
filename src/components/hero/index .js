import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Utli/images/Heroo.png'
import SearchIcon from '@mui/icons-material/Search';
import{Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const navigate = useNavigate();
    function navToSearch(){
        navigate('/Filter');
    }
  return (
    <Card sx={{
        backgroundImage: `url(${image})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:'500px',
        
     }}>
      <CardContent>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            color:'#fff',
            flexDirection:'column',
            marginTop:'200px',
            fontSize:'30px',
        }}>
        <Typography variant="h4" component="div">
        Find The House of Your Dream 
        </Typography>
        <Typography variant="h4" component="div">
        Using our Platform
        </Typography>
            <div className="input-container">
            <Box sx={{ marginTop: 2 }}>
         <input type="text" placeholder="Sarch About Home... " onClick={navToSearch}
                            style={{
                                width: '500px',
                                height: '45px',
                                border: '0.2px solid #000839',
                                borderRadius: '10px',
                                position: 'relative',
                                paddingLeft:'30px'
                            }}
                      />
                        
                        <SearchIcon style={{
                            color: '#fff',
                            fontSize:'35px',
                            
                            position: 'absolute',
                         
                          
                            backgroundColor:'#000839',
                            borderRadius: '5px',
                            zIndex:'2',
                            left:'900px',
                            bottom:'200px'
                        }} />
                        
            </Box>
            {/* <button><Link to='/Portofil'>start</Link></button> */}

            </div>
        </div>
      
       
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
