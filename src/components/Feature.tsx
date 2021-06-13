import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = (width: number) =>
  makeStyles({
    container: {
      width,
      flex: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    text: { marginBottom: "auto" },
  })();

export default function Feature({
  width,
  text,
  image,
}: {
  width: number;
  text: string;
  image: string;
}) {
  const classes = useStyles(width);

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.text}>
        {text}
      </Typography>
      <img src={image} width={width}></img>
    </div>
  );
}
