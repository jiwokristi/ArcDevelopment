import React, { Fragment, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

// ? the style is ruined
import { ReactComponent as Logo } from "assets/logo.svg";
// import logo from "assets/logo.svg";

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

export default function Header({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue); // MUI sends the value of each Tab from the Tabs component, the default of each Tab's value will be its index
  };

  const handleHover = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i);
    setValue(1);
    handleClose();
  };

  const menuOptions = useMemo(
    () => [
      {
        name: "Services",
        link: "/services",
        activeIndex: 1,
        selectedIndex: 0,
      },
      {
        name: "Custom Software Development",
        link: "/customsoftware",

        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: "iOS/Android App Development",
        link: "/mobileapps",

        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Website Development",
        link: "/websites",

        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const tabOptions = useMemo(
    () => [
      {
        name: "Home",
        link: "/",
        activeIndex: 0,
      },
      {
        name: "Services",
        link: "/services",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaHasPopup: anchorEl ? "true" : undefined,
        onMouseOver: (e) => handleHover(e),
      },
      {
        name: "The Revolution",
        link: "/revolution",
        activeIndex: 2,
      },
      {
        name: "About Us",
        link: "/about",
        activeIndex: 3,
      },
      {
        name: "Contact Us",
        link: "/contact",
        activeIndex: 4,
      },
    ],
    [anchorEl]
  );

  useEffect(() => {
    [...menuOptions, ...tabOptions].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);

            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;

        default:
          break;
      }
    });
  }, [
    value,
    setValue,
    menuOptions,
    tabOptions,
    selectedIndex,
    setSelectedIndex,
  ]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary" // this prop is to change the color of the animation line beneath the text of the Tab button, in this case we're trying to hide it by changing the color into primary, which we also use for the background of our AppBar
      >
        {/* "to" prop belongs to the Link component, all props that aren't used by the Tab component are being passed to the Link component, thanks to this component composition from MUI */}
        {tabOptions.map((el, i) => (
          <Tab
            key={`${el}${i}`}
            label={el.name}
            component={Link}
            to={el.link}
            className={classes.tab}
            aria-owns={el.ariaOwns} // if we have an anchorEl this Tab will own a Menu component with the id of "simple-menu", if the ternary falls into the false case we return undefined which is equivalent to not setting the prop at all, we don't want it to be an empty string because it could be misinterpreted as having been left out
            aria-haspopup={el.ariaHasPopup}
            onMouseOver={el.onMouseOver} // it's like onClick but it handles a hover situation
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      {/* the Menu component is being put at the bottom of the same parent because it's a popup */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }} // this sets the onMouseLeave prop on the base MenuList component, so that we can properly track the right element
        style={{ zIndex: 1302 }}
        classes={{ paper: classes.menu }} // * we can't directly give style to the Menu component, because the underlying component handling the Menu in the background here is the Paper component, so by using the "classes" prop we can give style to the rule name of the underlying component (look at the documentation: Component => Menu => scroll to the bottom => Menu API => scroll to the bottom to see the rule names)
        elevation={0} // this will change the MUI's default elevation and dropshadow to the zero preset in the theme, which is "none"
        keepMounted // this will make sure that all of the menu items are always mounted on the DOM regardless of whether or not they're visibile on the screen, which will make this better for SEO which will always be able to find which tabs we are on on our website
      >
        {menuOptions.map((el, i) => (
          <MenuItem
            key={`${el}${i}`}
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
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {/* disableTypography prop disables the rendering of a Typography component, getting rid of all the default styles */}
          {tabOptions.map((el) => (
            <ListItem
              key={`${el}${el.activeIndex}`}
              component={Link}
              to={el.link}
              selected={value === el.activeIndex}
              classes={{ selected: classes.drawerItemSelected }} // by using the selected classes property, we don't need to check to see if whether or not our value is selected, because this class is only going to be applied to a selected list item
              onClick={() => {
                setOpenDrawer(false);
                setValue(el.activeIndex);
              }}
              divider
              button
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {el.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            component={Link}
            to="/estimate"
            selected={value === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      {/* we use IconButton to apply the styling of a button to an icon */}
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        {/* position is defaulted to fixed & color is defaulted to primary */}
        {/* position fixed lets the AppBar component float on the page, meaning it doesn't actually take space, causing elements to be hidden underneath it following its height */}
        {/* that's why we need the self-closing div to provide a cushion exactly the height of the AppBar component to push down elements underneath it */}
        <AppBar position="fixed" color="primary" className={classes.appBar}>
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
              {/* <img src={logo} alt="company logo" className={classes.logo} /> */}
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
