
import  React from 'react';
import Cards from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import{Link} from 'react-router-dom'
import './style.css';

export default function Card({house}) {
  const [liked, setLiked] = React.useState(false);
  const{  image, address, price,description,bedroom,bathrooms,id} = house;


  const handleLikeToggle = () => {
    setLiked(!liked);
};
  return (

    <Cards sx={{ maxWidth: 300 }}
    style={{ marginTop: '20px',
    width:'80%',
    margin:'auto'
     }}>
      
      {/* <img src={image} className='image'/> */}
      <CardMedia
        sx={{ height: 200}}
        image={image}
        // image="/static/images/cards/contemplative-reptile.jpg"
        // title="green iguana"
      />
          <FavoriteBorderIcon
                        sx={{
                            color: liked ? 'red' : 'white',
                            // border: '1px solid red',
                            // borderRadius: '50%',
                            position: 'absolute',
                            top: '13px',
                            right: '17px',
                            zIndex: 1,
                            fontSize: '30px'
                        }}
                        onClick={handleLikeToggle}
                    />
     
         
      <CardContent>
        <Typography component="div"  >
          <div className='qq'> <HotelIcon  className='icon'/> <p className='w'>bd { bedroom }</p> <BathtubIcon className='icon'/> <p className='w'>ba { bathrooms }</p> </div>
        </Typography>
        <Typography gutterBottom variant="h5" component="div" 
         style={{
                                      
                                      alignItems: 'center',
                                      fontWeight: 'bolder',
                                      fontSize: '17px',
                                      color:'#000839'
                                  }}>
        { address }
        </Typography>
        <Typography variant="body2" color="text.secondary"
           style={{
                                      
            alignItems: 'center',
            // fontWeight: 'bolder',
            fontSize: '12px',
            color: '#777'
        }}>
       { description }
        </Typography>
        <Typography  style={{
                        display:'flex',   
                        alignItems:'center' ,
                        justifyContent:'space-between',
                        color:'#000839'
                                  }}>
          <div style={{
            display :'flex'
          }}> <LocationOnIcon style={{marginTop:'10px' }}/> 
          <p style={{
            color:'#aaa',
            marginTop:'10px',
            marginRight:'10px'
          }}>Gaza - Rafah</p> </div>  <p style={{
            color:'#000839'
          }}>${ price }</p>
        </Typography>
        <Typography  style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'
          }}>
                              <Button><Link to={`/detailes/${id}`} size="small" color="primary"
                                style={{
                                  backgroundColor: '#FFA41B',
                                  alignItems: 'center',
                                  fontWeight: 'bolder',
                                  // fontFamily: 'Istok Web',
                                  color:'#fff',
                                  fontSize: '14px',
                                  textAlign: 'center',
                                  textDecoration: 'none',
                                  width: '120px',
                                  height: '30px',
                              }}
                              >More Details</Link></Button>
                                
              
             
       
                    <FavoriteBorderIcon style={{color:'#aaa'}}/>
        </Typography>
     

      </CardContent>
      
      
    </Cards>
   
  );

}
