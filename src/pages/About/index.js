import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import image from "../../Utli/images/about.png";
import "./style.css";

function About() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        paddingTop="2em"
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia component="img" height="504" image={image} style={{marginBottom:"25px"}} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <article>
            <Typography variant="h2" className="about">About Us</Typography>
            <Typography className="taxt" variant="p">
            HouseHunting Woonbemiddeling was founded in 2005 and with over 20 branches, it is one of the largest and still growing estate agents in the Netherlands. The concept of “SERVICE” is a key priority in our broad and flexible range of services.Our operational management is characterised by the following words: reliable, engaged, driven, polished, open and professional. We distinguish ourselves from other estate agents through our commitment, reliability and by only making promises we can keep. Our vision;  We offer student accommodation,family homes and investment properties.
            </Typography>
          </article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;