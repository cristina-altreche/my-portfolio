import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { MDCTextField } from "@material/textfield";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: ".5rem",
    color: "#3ff2ec",
    borderColor: "#3ff2ec",
  },
  social: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent",
    paddingTop: "1.5rem",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      fontSize: "1.8rem",
      "&:hover": {
        fill: "#3ff2ec",
        fontSize: "2rem",
      },
    },
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3ff2ec",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "#030303", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "#3ff2ec",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            contact
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <label class="mdc-text-field mdc-text-field--textarea" >
            <span class="mdc-text-field__resizer">
              <textarea
                class="mdc-text-field__input"
                aria-labelledby="my-label-id"
                rows="8"
                style={{ width: "100%", marginTop: ".5rem" }}
                cols="40"
                fullWidth="true"
              ></textarea>
            </span>
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__notch">
                <span class="mdc-floating-label" id="my-label-id">
                  Textarea Label
                </span>
              </span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
          </label>

          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
          <BottomNavigation component="div" className={classes.social}>
            <BottomNavigationAction
              className={classes.root}
              style={{ padding: 0 }}
              icon={<GitHubIcon />}
              href="https://github.com/cristina-altreche"
              target="blank"
            />
            <BottomNavigationAction
              className={classes.root}
              style={{ padding: 0 }}
              icon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/cristina-alt/"
              target="blank"
            />
            {/* <GitHubIcon className={classes.icons}/>
            <LinkedInIcon className={classes.icons}  href="https://www.linkedin.com/in/cristina-alt/" target="blank"/> */}
          </BottomNavigation>
        </Box>
      </Grid>
    </Box>
  );
};
export default Contacts;
