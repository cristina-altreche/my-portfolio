import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/sb.jpg";
import project2 from "../images/weatherapp.jpg";
import project3 from "../images/ramheader.jpg";
import project4 from "../images/mern-stack.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#030303",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Story Book App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Full application where you can add your private or public
                    stories after logging in with your Google account. This app
                    is using Node.js, Express, MongoDB, Passport with a Google
                    OAuth strategy.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/node-app-oauth"
                  target="_blank"
                >
                  Code Source
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://story-book-ca.herokuapp.com/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Weather App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The Weather app is a Node and Express application. It uses
                    data from mapbox.com and weatherstock.com. Try to look up
                    your current locations weather!
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/weather-app-nodejs"
                  target="_blank"
                >
                  Code Source
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://altre-weather-app.herokuapp.com/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Rick and Morty Dead or Alive
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/rick-and-morty"
                  target="_blank"
                >
                  Code Source
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://rickandmorty-deadoralive.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Code Source
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
