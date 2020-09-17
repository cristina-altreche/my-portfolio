import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },

              polygon:{"nb_sides":5}
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
