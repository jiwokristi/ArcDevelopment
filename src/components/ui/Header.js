import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme) => ({
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

export default function Header(props) {
  const classes = useStyles();
  const { pathname } = useLocation();

  const [value, setValue] = useState("/");

  const handleChange = (e, val) => {
    setValue(val); // MUI sends the index of each Tab from the Tabs component
  };

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  return (
    <Fragment>
      <ElevationScroll>
        {/* position is defaulted to fixed & color is defaulted to primary */}
        {/* position fixed lets the AppBar component float on the page, meaning it doesn't actually take space, causing elements to be hidden underneath it following its height */}
        {/* that's why we need the self-closing div to provide a cushion exactly the height of the AppBar component to push down elements underneath it */}
        <AppBar position="fixed" color="primary">
          {/* disableGutters prop is used to disable MUI's default padding for the Toolbar component */}
          <Toolbar disableGutters>
            <Button
              disableRipple // to disable ripple effect
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              <Logo className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary" // this prop is to change the color of the animation line beneath the text of the Tab button, in this case we're trying to hide it by changing the color into primary, which we also use for the background of our AppBar
            >
              {/* "to" prop belongs to the Link component, all props that aren't used by the Tab component are being passed to the Link component, thanks to this component composition from MUI */}
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                value="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                value="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                value="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                value="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                value="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
