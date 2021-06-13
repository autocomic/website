import * as React from "react";
import {
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: "Noto Sans TC",
      fontWeight: "300",
    },
  })
);

export default function IndexLayout({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
