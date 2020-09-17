import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/profphoto3.jpg";
import Typed from "react-typed";

// THIS IS MAIN CONTENT

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "#3ff2ec",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Cristina Altreche"
        ></Avatar>
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["Cristina Altreche"]} typeSpeed={50} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Full Stack", "Web Developer", "Web Design", "UI/UX"]}
          typeSpeed={50}
          backspeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
