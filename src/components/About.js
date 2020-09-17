import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import aboutme from "../images/profphoto3.jpg";

const useStyles = makeStyles({
  mainContainer: {
    height: "100vh",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 145,
  },
  cardContainer: {
    maxWidth: 450,
    margin: "0 1rem",
    color: "white",
  },
  hr: {
    border: "1px solid #3ff2ec",
  },
 
 cardImage: {
     borderRadius: "50%",
     padding: "2rem"
 }
});

const About = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.cardContainer}>
        <CardActionArea className={classes.cardImageContainer}>
            <CardMedia
              component="img"
              alt="Me"
              height="400px"
              image={aboutme}
              className={classes.cardImage}
            />
         </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6} className={classes.cardContainer}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h4">About Me</Typography>
              <hr className={classes.hr} />
              <Typography>
                I'm a Full Stack Developer from the east coast actively looking
                for work.
                <br />
                <br /> As a person who is extremely detailed and empathetic, I
                take the users experience into careful consideration througout
                the development cycle for both front-end and back-end. Along
                with clean semantic code and being resourceful, I believe
                communication is what drives any web application to successful
                completion.
                <br />
                <br />
                Outside of continous learning each day I love hanging out with
                my family, fishing, and going to the gym.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
