import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useScrollTrigger,
} from "@material-ui/core";

import { ReactComponent as Logo } from "assets/logo.svg";

import { useStyles } from "./style";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, val) => {
    setValue(val); // MUI sends the value of each Tab from the Tabs component, the default of each Tab's value will be its index
  };

  const handleHover = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i);
    setValue(1);
    handleClose();
  };

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
    },
    {
      name: "Website Development",
      link: "/websites",
    },
  ];

  const tabOptions = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "The Revolution",
      link: "/revolution",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) setValue(0);
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) setValue(2);
        break;
      case "/about":
        if (value !== 3) setValue(3);
        break;
      case "/contact":
        if (value !== 4) setValue(4);
        break;
      case "/estimate":
        if (value !== 5) setValue(5);
        break;
      default:
        break;
    }
  }, [value]);

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
              component={Link}
              to="/"
              className={classes.logoContainer}
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
              {tabOptions.map((el, i) => (
                <Tab
                  key={i}
                  label={el.name}
                  component={Link}
                  to={el.link}
                  className={classes.tab}
                  aria-owns={anchorEl ? "simple-menu" : undefined} // if we have an anchorEl this Tab will own a Menu component with the id of "simple-menu", if the ternary falls into the false case we return undefined which is equivalent to not setting the prop at all, we don't want it to be an empty string because it could be misinterpreted as having been left out
                  aria-haspopup={anchorEl ? "true" : undefined}
                  onMouseOver={
                    el.name === "Services" ? (e) => handleHover(e) : undefined
                  } // it's like onClick but it handles a hover situation
                />
              ))}
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            {/* the Menu component is being put at the bottom of the same parent because it's a popup */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }} // this sets the onMouseLeave prop on the base MenuList component, so that we can properly track the right element
              classes={{ paper: classes.menu }} // * we can't directly give style to the Menu component, because the underlying component handling the Menu in the background here is the Paper component, so by using the "classes" prop we can give style to the rule name of the underlying component (look at the documentation: Component => Menu => scroll to the bottom => Menu API => scroll to the bottom to see the rule names)
              elevation={0} // this will change the MUI's default elevation and dropshadow to the zero preset in the theme, which is "none"
            >
              {menuOptions.map((el, i) => (
                <MenuItem
                  key={i}
                  component={Link}
                  to={el.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(e) => handleMenuItemClick(e, i)}
                  selected={i === selectedIndex && value === 1}
                >
                  {el.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
