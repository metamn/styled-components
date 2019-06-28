import React from "react";

const Theme = {
  colors: {
    default: {
      color: "black",
      backgroundColor: "white"
    },
    highlight: {
      backgroundColor: "yellow"
    }
  },
  textStyles: {
    default: {
      fontSize: "100%",
      lineHeight: "1.25",
      lem: "1.25em"
    },
    large: {
      fontSize: "1.25em"
    }
  }
};

const ThemeContext = React.createContext(Theme);

export default ThemeContext;
