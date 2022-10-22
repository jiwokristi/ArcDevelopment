import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  animation: {
    minWidth: "50em",
    maxWidth: "21em",
    marginTop: "2em", // what makes "em" responsive is the number of pixels that make up the gap is going to be different on each device & will make it proportional based on the screen size, but then it generates the fixed proportional value
    marginLeft: "10%", // with percentages if we look at the spacing between the animation and the Typography Grid item, as we resize the page the amount of spacing increases because 10% of the screen size when you resize the page bigger is different than when you resize the screen smaller
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    background: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em", // to make sure that our hero Typography never gets too small to make the buttons overlap each other, we need minWidth so it will never drop below this value
    marginLeft: "1em", // this margin should give enough push so that when we are at the broken break point where the buttons overlap each other, the container should be squished enough for the container to be resized
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5, // this padding makes the button not as long because the length came from some padding, but it gives just enough padding on the vertical axis
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    }, // so that when they're stacked on top of one another they have enough vertical space
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em", // keep in mind whenever we add spacing like this, when we resize the page and it gets down to the break point where they're being stacked on top of one another, that 2em to the left of the icon will still push the little space on the left, and when they're stacked on top of one another we definitely don't want that so that is why we need the style below
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    }, // we use this padding to prevent the Typography from touching the edges of the page before it jumps into the extra small break point's style
  },
}));
