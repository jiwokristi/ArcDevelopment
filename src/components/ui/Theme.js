import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGray = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      textTransform: "none", // to disable the all caps text styling of MUI Button that's being used under the Tab component
      fontFamily: "Raleway", // linked through index.html
      fontWeight: 700,
      fontSize: "1rem", // by using rem instead of pixels we make sure that the font is going to be relatively the same looking size across all different screen sizes, whereas using the pixel unit could cause screens of differing screen resolutions to display the text differently
    },
    estimate: {
      textTransform: "none",
      fontFamily: "Pacifico",
      fontSize: "1rem",
      color: "#FFFFFF",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: arcBlue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGray,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      borderRadius: 50,
      textTransform: "none",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
