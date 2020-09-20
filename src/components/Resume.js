import React from "react";
import {  Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Document, Page, pdfjs } from "react-pdf";
import PDF from "../images/CAResume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const url = "https://drive.google.com/file/d/1fcocrjtfH9QLApObHN8PMcyva-VBkAX4/view?usp=sharing"

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  btnContainer: {
    height: "5rem",
    marginTop: "1rem",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between"
  },
  btn: {
    border: "1px solid white",
    color: "white",
   
    '&:hover': {
      color: "#3ff2ec",
      border: "1px solid #3ff2ec ",
    },
  }


 
});
const Resume = () => {
  const classes = useStyles();
  return (
    <> 
    <Navbar />
    <div className={classes.container}>
      
      <div className={classes.btnContainer}>
        <Button href={url} target='blank' className={classes.btn}>DOWNLOAD</Button>
      </div>
      <div>

      </div>

      <Document file={PDF}>
        <Page width={900} scale={1.6} pageNumber={1} />
      </Document>
    </div>
    </>
  );
};

export default Resume;
