import React from "react";
import Lottie from "react-lottie";

import {
  useTheme,
  useMediaQuery,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

import ButtonArrow from "components/ui/ButtonArrow";

import animationData from "animations/landinganimation/data";

import { ReactComponent as CustomSoftwareIcon } from "assets/Custom Software Icon.svg";
import { ReactComponent as MobileIcon } from "assets/mobileIcon.svg";
import { ReactComponent as WebsiteIcon } from "assets/websiteIcon.svg";

import { useStyles } from "./style";

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  //* instructor's notes:
  // for styling, use className with breakpoints, but for prop values, useMediaQuery. So if I need to change the 'direction' prop on a Grid component from 'row' to 'column' at the 'sm' breakpoint, then I'd use useMediaQuery to pass that into the 'direction' prop.

  // However, if I want to just change a fontSize from '2rem' to '1rem' at the 'sm' breakpoint, then I'd want to stick to the breakpoint in our class. I'm not sure if there's a real performance benefit there, but to me, it makes for more readable code.

  const defaultOptions = {
    loop: true, // defaults to false
    autoplay: true, // defaults to false
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*-----Hero Block-----*/}
      <Grid item>
        <Grid container justifyContent="flex-end" alignItems="center">
          {/* by specifying the small break point with the "sm" property we ensure that only at the extra small break point will the animation Grid item & the Typography Grid item snap to being stacked vertically*/}
          {/* if we don't assign the sm property with a number it will automatically set to "auto" */}
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </Grid>
        </Grid>
      </Grid>

      {/* -----Custom Software Development Block----- */}
      <Grid item>
        <Grid
          container
          justifyContent={matchesSm ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : "5em",
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <CustomSoftwareIcon className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      {/* -----iOS/Android App Block----- */}
      <Grid item>
        <Grid
          container
          justifyContent={matchesSm ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid item style={{ textAlign: matchesSm ? "center" : undefined }}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSm ? null : <br />}with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSm ? 0 : "5em" }}>
            <MobileIcon className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      {/* -----Website Development Block----- */}
      <Grid item>
        <Grid
          container
          justifyContent={matchesSm ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : "5em",
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <WebsiteIcon className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      {/* -----The Revolution Block----- */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/* -----Information Block----- */}
      <Grid item>
        <Grid container alignItems="center" style={{ height: "80em" }}>
          <Grid
            item
            container
            style={{
              position: "absolute",
              textAlign: matchesXs ? "center" : "inherit",
            }}
            direction={matchesXs ? "column" : "row"}
            spacing={matchesXs ? 10 : 0}
          >
            <Grid
              item
              style={{ marginLeft: matchesXs ? 0 : matchesSm ? "2em" : "5em" }}
              sm
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              style={{
                marginRight: matchesXs ? 0 : matchesSm ? "2em" : "5em",
                textAlign: matchesXs ? "center" : "right",
              }}
              sm
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!{" "}
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.informationBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
}
