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
import project4 from "../images/todo.jpg";
import project5 from "../images/potluck.jpg";
import project6 from "../images/playful.jpg";
import project7 from "../images/bkstore.jpg";


const useStyles = makeStyles({
  mainContainer: {
    background: "#030303",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  tech: {
    color: "#555",
  },
  button: {
    border: "1px solid black",
    color: "black",
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
          <Grid item xs={12} md={6} lg={4}>
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
                    stories after logging in with your Google account. Login is
                    set up with Passport's Google OAuth strategy.
                  </Typography>
                  <hr />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.tech}
                  >
                    Node.js, MongoDB, Express
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/node-app-oauth"
                  target="_blank"
                  className={classes.button}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://story-book-ca.herokuapp.com/"
                  target="_blank"
                  className={classes.button}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} md={6} lg={4}>
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
                  <hr />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.tech}
                  >
                    Node.js, Express
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/weather-app-nodejs"
                  target="_blank"
                  className={classes.button}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://altre-weather-app.herokuapp.com/"
                  target="_blank"
                  className={classes.button}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} md={6} lg={4}>
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
                    Dead or Alive
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This React application fetches data from the Rick and Morty
                    API. I made use of Function components, component state, and
                    side effects. A combinaton of Reactstrap and CSS were used
                    for styling.
                  </Typography>
                  <hr />
                  <Typography
                    variant="body2"
                    className={classes.tech}
                    component="p"
                  >
                    React, Reactstrap, CSS
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/rick-and-morty"
                  target="_blank"
                  className={classes.button}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://rickandmorty-deadoralive.netlify.app/"
                  target="_blank"
                  className={classes.button}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 4 */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Todo App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    For the React Todo project I was able to explore the reducer
                    pattern. I gained an understanding of what immutability is,
                    reducers, actions, dispatch, and how to use the reducer
                    hook.
                  </Typography>
                  <hr />
                  <Typography
                    variant="body2"
                    className={classes.tech}
                    component="p"
                  >
                    React, CSS
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/todo-app/tree/master"
                  target="_blank"
                  className={classes.button}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://todoappca.netlify.app"
                  target="_blank"
                  className={classes.button}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 5 */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project5}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Potluck Planner
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    My very first team build at Lambda where I was in charge of
                    UI/UX. This site was created using strictly HTML and CSS.
                    Complete with a Landing, About, and Contact section.
                  </Typography>
                  <hr />
                  <Typography
                    variant="body2"
                    className={classes.tech}
                    component="p"
                  >
                    HTML, CSS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Potluck-Planner-2/marketing/tree/master"
                  target="_blank"
                  className={classes.button}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://potluckplannersite.netlify.app/"
                  target="_blank"
                  className={classes.button}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 6 */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project6}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Playful Portfolio
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Single page portfolio created using HTML & LESS. I learned
                    the importance of CSS preprocessors with this project. They
                    make the code much more readable and organized.
                  </Typography>
                  <hr />
                  <Typography
                    variant="body2"
                    className={classes.tech}
                    component="p"
                  >
                    HTML, LESS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/Preprocessing-I"
                  target="_blank"
                  className={classes.button}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://playfulportfolio.netlify.app/"
                  target="_blank"
                  className={classes.button}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
           {/* Project 7 */}
           <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 7"
                  height="140"
                  image={project7}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Book Store React
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    E-commerce store using React's Context API state management. You have the ability to add and remove items to your cart as well as see the total cost of all your products.
                  </Typography>
                  <hr />
                  <Typography
                    variant="body2"
                    className={classes.tech}
                    component="p"
                  >
                    React, SASS, Material-UI
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/cristina-altreche/react-shopping-cart"
                  target="_blank"
                  className={classes.button}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://ca-bookstore.netlify.app/"
                  target="_blank"
                  className={classes.button}
                >
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
