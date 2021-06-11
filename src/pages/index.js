import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import useDocumentSize from "../utils/useDocumentSize";

const useStyles = makeStyles({
  background: {
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(125deg, rgba(0, 0, 0, .85), rgba(52, 152, 200, 0.9))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    maxWidth: 1920,
    maxHeight: 1080,
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "Quicksand",
    fontSize: 26,
    margin: "10px 0 0 12px",
    alignSelf: "start",
  },
  textContainer: {
    marginBottom: 42,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    margin: "12px 0 12px 0",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    margin: "12px 0 12px 0",
    textAlign: "center",
  },
  buttonRoot: {
    height: "100%",
    color: "white",
    borderColor: "white",
  },
  buttonLabel: {
    textTransform: "none",
    fontWeight: 300,
  },
  emailInputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

const EmailInput = withStyles({
  root: {
    "& label": {
      fontSize: 14,
      fontWeight: 300,
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: 14,
      fontWeight: 300,
      color: "white",
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

const IndexPage = () => {
  const classes = useStyles();
  const { width: documentWidth, height: documentHeight } = useDocumentSize();
  let videoHeight = 0;
  let videoWidth = 0;
  if (documentWidth >= 480) {
    videoHeight = (documentHeight * 3) / 5;
    videoWidth = Math.min(documentWidth, (videoHeight * 16) / 9);
  } else {
    videoWidth = documentWidth;
    videoHeight = Math.min(documentHeight, (videoWidth * 9) / 16);
  }
  return (
    <>
      <div className={classes.background}>
        <div className={classes.container}>
          <h1 className={classes.logo}>Autocomic</h1>
          <Typography variant="h5" className={classes.title}>
            A very cool and pog scanlation assistant
          </Typography>
          <div>
            <iframe
              width={videoWidth}
              height={videoHeight}
              src="https://www.youtube.com/embed/uvrhdd0AzqY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={classes.textContainer}>
            <Typography variant="h6" className={classes.text}>
              Autocomic will be available to the public soon!
            </Typography>
            <Typography variant="h6" className={classes.text}>
              If you're a scanlator and you'd like to help us test the product,
              please sign up below.
            </Typography>
            <form className={classes.emailInputContainer}>
              <EmailInput variant="outlined" size="small" label="Email" />
              <Button
                variant="outlined"
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel,
                }}
              >
                Join
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* <div>Detects and cleans bubbles and gives translation suggestions.</div> */}
    </>
  );
};

export default IndexPage;
