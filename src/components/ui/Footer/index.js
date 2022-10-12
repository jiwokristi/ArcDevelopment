import React from "react";
import { Link } from "react-router-dom";

import { Grid, Hidden } from "@material-ui/core";

import { ReactComponent as FooterAdornment } from "assets/Footer Adornment.svg";
import { ReactComponent as Facebook } from "assets/facebook.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";
import { ReactComponent as Instagram } from "assets/instagram.svg";

import { useStyles } from "./style";

// * public/index.html --> style="margin: 0" to remove the margin around the footer

export default function Footer({ setValue, setSelectedIndex }) {
  const classes = useStyles();

  const serviceRoutes = [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const revolutionRoutes = [
    "The Revolution",
    "Vision",
    "Technology",
    "Process",
  ];

  const aboutRoutes = ["About Us", "History", "Team"];

  const socialRoutes = [
    {
      name: "FB",
      link: "https://www.facebook.com",
    },
    {
      name: "TWT",
      link: "https://www.twitter.com",
    },
    {
      name: "IG",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <footer className={classes.footerStyle}>
      {/* mdDown prop hides all the content inside of the Hidden component at the medium and below breakpoints*/}
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              {serviceRoutes.map((route) => (
                <Grid
                  item
                  key={`${route.name}${route.activeIndex}`}
                  component={Link}
                  to={route.link}
                  className={classes.link}
                  onClick={() => {
                    setValue(route.activeIndex);
                    setSelectedIndex(route.selectedIndex);
                  }}
                >
                  {route.name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              {revolutionRoutes.map((route) => (
                <Grid
                  item
                  key={route}
                  component={Link}
                  to="/revolution"
                  className={classes.link}
                  onClick={() => setValue(2)}
                >
                  {route}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              {aboutRoutes.map((route) => (
                <Grid
                  item
                  component={Link}
                  to="/about"
                  className={classes.link}
                  onClick={() => setValue(3)}
                >
                  {route}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <FooterAdornment className={classes.adornment} />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        {socialRoutes.map((route) => (
          <Grid
            item
            key={`${route.name}`}
            component={"a"}
            href={route.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {route.name === "FB" && <Facebook className={classes.icon} />}
            {route.name === "TWT" && <Twitter className={classes.icon} />}
            {route.name === "IG" && <Instagram className={classes.icon} />}
          </Grid>
        ))}
      </Grid>
    </footer>
  );
}
