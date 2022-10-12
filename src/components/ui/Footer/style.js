import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footerStyle: {
    background: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom", // use this property with images to change where on the image it's anchored to the screen
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#FFFFFF",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "0.75rem",
    textDecoration: "none", // to remove the line on anchor tags
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
      height: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em", // to determine how far from the right an element should be
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));
