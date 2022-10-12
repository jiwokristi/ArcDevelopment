import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, // to add a cushion underneath the AppBar component following the height of the Toolbar component
    marginBottom: "3em", // to add an extra space to push out content from underneath the AppBar, because after the Toolbar had been handled we added the Logo component
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  menu: {
    background: theme.palette.common.blue,
    color: "#FFFFFF",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      background: "transparent",
    },
  },
  drawerIcon: {
    width: "50px",
    height: "50px",
  },
  drawer: {
    background: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#FFFFFF",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    background: theme.palette.common.orange,
  },
  drawerItemSelected: {
    // this specifies that any list item text component within a selected list item component is going to have an opacity of 1 on its root class, which will get our opacity onto the text where we needed it
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
}));
