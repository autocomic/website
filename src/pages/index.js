import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import useWindowSize from "../utils/useWindowSize";
// import EmailInput from "../components/EmailInput";
import Feature from "../components/Feature";
import detection from "../images/detection.png";
import final from "../images/final.png";
import translations from "../images/translations.png";

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
    // TODO: Figure out the best way to handle UHD displays. Setting maxWidth and maxHeight doesn't look great.
    // maxWidth: 1920,
    // maxHeight: 1080,
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
  bottomContainer: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  featuresContainer: {
    "@media (max-width: 1119px)": {
      marginTop: "auto",
      marginBottom: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    "@media (min-width: 1120px)": {
      marginTop: "auto",
      marginBottom: "auto",
      display: "flex",
      justifyContent: "center",
      gap: 60,
    },
  },
});

const IndexPage = () => {
  const classes = useStyles();
  const { width: documentWidth, height: documentHeight } = useWindowSize();
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
            The fastest and smartest scanlation tool
          </Typography>
          <div>
            <iframe
              width={videoWidth}
              height={videoHeight}
              src="https://www.youtube.com/embed/uvrhdd0AzqY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
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
              {/* <EmailInput variant="outlined" size="small" label="Email" /> */}
              <Button
                variant="outlined"
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel,
                }}
                href="https://form.asana.com/?k=2pHK2JeI9o-ZqdwEFJAaNQ&d=1146732345931777"
                target="_blank"
              >
                Join
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.featuresContainer}>
          <Feature width={300} image={detection} text="Detects bubbles" />
          <Feature
            width={380}
            image={translations}
            text="Generates translations"
          />
          <Feature
            width={300}
            image={final}
            text="Cleans bubbles and replaces text"
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
