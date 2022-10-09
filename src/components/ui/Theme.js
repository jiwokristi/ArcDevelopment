import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
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
  },
});
