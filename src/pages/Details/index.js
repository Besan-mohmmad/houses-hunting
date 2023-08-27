import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Details() {
    const { id } = useParams();
    const [house, setHouse] = useState({});

    useEffect(() => {
        async function fetchHouse() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/Besan-mohmmad/api/houses/${id}`);
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                const house = await response.json();
                setHouse(house);
            } catch (error) {
                console.error(error);
            } 
        }
        fetchHouse();
    }, [id]);

    // const { url, description, address, price, bedroom, bathroom, type } = house;

    return (
        <Container maxWidth="lg" >
            {
                (
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <img src={house.image} style={{
                                width:'100%',
                                height:'700px',
                               marginTop:'20px',
                            //    direction:'70px',
                               borderradius:'100%'
                            }}/>
                                
                            
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="h4"  style={{marginTop:'20px', color:'#000839'}}>
                                {house.address}
                            </Typography>
                        </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12} >
                         
                                <Typography variant="subtitle1"  style={{display:'flex',}}>
                                <HotelIcon  style={{ color:' #000839', width:'60px', }}/>  <div style={{  color:'#aaa' ,
                                fontSize:'12',
                            }}>bd{house.bedroom}</div>
                                <BathtubIcon style={{color:' #000839', width:'60px'}}/>    <div style={{  color:'#aaa' ,
                                fontSize:'12',
                            }}>ba {house.bathrooms}</div>
                                </Typography>
                           
                        </Grid>
                       
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            
                                <Typography variant="subtitle1" className="subtitle" style={{color:'#777', fontSize:'14px'}}>
                                    {house.description} Hilltop in the Highlands Apartments offers one- and two-bedroom townhouses in Renton, Washington. The Hilltop in the Highlands is close to I-405, upscale shopping, and just one block from Renton Technical College. All major Washington cities are just 20 minutes away. The 1 and 2 bedroom Renton apartments feature dramatic lighting and walk-in closets. Some homes have been professionally remodeled and feature custom cabinetry in the kitchen and bathrooms.
                                </Typography>
                            
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                          <Typography variant="subtitle1" style={{color:'#000839', fontSize:'20', display:'flex', justifyContent:'space-between'}}>
                       <div style={{display:'flex'}}>
                       <LocationOnIcon style={{marginTop:'10px' }}/> 
          <p style={{
            color:'#aaa',
            marginTop:'10px',
            marginRight:'10px'
          }}>Gaza - Rafah</p> </div> ${house.price}
                          </Typography >
                        </Grid>
                    </Grid>
                )}
        </Container>
    );
}

export default Details;
