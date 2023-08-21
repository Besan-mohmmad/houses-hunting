
import  React from 'react';
import Cards from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import image from '../../Utli/images/card.png';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './style.css';

export default function MediaCard() {
  const [liked, setLiked] = React.useState(false);
  const { id } = house;
  const { url } = house;
  const { address } = house;
  const { price } = house;
  const { description } = house;
  const { bedroom } = house;
  const { bathroom } = house;
  const { type } = house;

  const handleLikeToggle = () => {
    setLiked(!liked);
};
  return (

    <Cards sx={{ maxWidth: 300 }}
    style={{ marginTop: '20px', }}>
      
      {/* <img src={image} className='image'/> */}
      <CardMedia
        sx={{ height: 160}}
        image={url}
        // image="/static/images/cards/contemplative-reptile.jpg"
        // title="green iguana"
      />
          <FavoriteIcon
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
          <div className='qq'> <HotelIcon  className='icon'/> <p className='w'>bd { bedroom }</p> <BathtubIcon className='icon'/> <p className='w'>ba { bathroom }</p> </div>
        </Typography>
        <Typography gutterBottom variant="h5" component="div" 
         style={{
                                      
                                      alignItems: 'center',
                                      fontWeight: 'bolder',
                                      fontSize: '20px',
                                      color:'#000839'
                                  }}>
        { address }
        </Typography>
        <Typography variant="body2" color="text.secondary"
           style={{
                                      
            alignItems: 'center',
            // fontWeight: 'bolder',
            fontSize: '15px',
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
          }}>Gaza - Rafah</p> </div>  <p>{ price }</p>
        </Typography>
        <Typography  style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'
          }}>
        <Button
                        size="small"
                        color="primary"
                        style={{
                            backgroundColor: '#FFA41B',
                            color:'#fff',
                            fontSize: '10px',
                            width: '50%',
                            height: '30px',

                        }}
                    >
                        More Details 
                    </Button>
                    <FavoriteBorderIcon style={{color:'#aaa'}}/>
        </Typography>
     

      </CardContent>
      
      
    </Cards>
   
  );

}
