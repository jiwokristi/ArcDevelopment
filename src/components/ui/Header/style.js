import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, // to add a cushion underneath the AppBar component following the height of the Toolbar component
    marginBottom: "3em", // to add an extra space to push out content from underneath the AppBar, because after the Toolbar had been handled we added the Logo component
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto", // sends child elements to the most right of the parent container
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10, // because we don't want our tabs to have too much spacing from each other
    marginLeft: "25px", // we use the pixel unit here to maintain a constant spacing between each tab, regardless if the browser is on a 27 inch iMac or a 13 inch MacBook. If we use a responsive unit here, then the spacing would be different for each screen size, which isn't exactly the look you'd want for tabs
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));
