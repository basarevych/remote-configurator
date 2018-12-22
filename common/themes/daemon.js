"use strict";

const {
  darken,
  lighten,
  fade
} = require("@material-ui/core/styles/colorManipulator");
const { red, blueGrey } = require("@material-ui/core/colors");

const primary = "#4c5066";
const secondary = "#b33711";

const paperGradient = "linear-gradient(to right bottom, #3d3f4d, #222326)";
const bgPage = "#000000";
const bgNormal = "#3a3c48";

const textNormal = "rgba(255, 255, 255, 0.87)";
const textDark = "rgba(255, 255, 255, 0.54)";
const textDisabled = "rgba(255, 255, 255, 0.38)";
const textContrast = "#ffffff";
const textError = red[500];
const textInfo = blueGrey[500];

const fontSize = 14;

module.exports = {
  name: "daemon",
  wallpaper: "/static/img/bg.jpg?v=3",
  palette: {
    primary: {
      main: primary,
      contrastText: textContrast
    },
    secondary: {
      main: secondary,
      contrastText: textContrast
    },
    background: {
      default: bgPage,
      paper: lighten(bgNormal, 0.1)
    },
    text: {
      primary: textNormal,
      secondary: textDark,
      disabled: textDisabled,
      hint: textDisabled
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 20,
    background: "rgba(0, 0, 0, 0.5)",
    color: textNormal,
    backgroundHover: fade(primary, 0.05),
    colorHover: textContrast,
    backgroundSelected: fade(primary, 0.1),
    colorSelected: textContrast,
    backgroundSelectedHover: fade(primary, 0.15),
    colorSelectedHover: textContrast
  },
  main: {
    wallpaper: "/static/img/bg.jpg",
    background: paperGradient,
    spacing: 24,
    error: {
      background: fade(textError, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: fade(textInfo, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        background: paperGradient,
        border: `1px solid ${bgNormal}`
      }
    },
    MuiTableRow: {
      root: {
        height: ["100%", "!important"]
      }
    },
    MuiTableBody: {
      root: {
        "& tr:last-child th, & tr:last-child td": {
          borderBottom: "none"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${textDisabled}`
      },
      head: {
        fontSize: fontSize,
        color: textContrast
      },
      body: {
        fontSize: fontSize
      }
    },
    MuiButton: {
      root: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: [bgNormal, "!important"],
          color: [textNormal, "!important"]
        },
        "&$disabled": {
          boxShadow: [
            "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
            "!important"
          ],
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [darken(bgNormal, 0.1), "!important"],
            color: [textDark, "!important"]
          },
          "&$containedPrimary": {
            background: [darken(primary, 0.5), "!important"],
            color: [darken(textContrast, 0.2), "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondary, 0.5), "!important"],
            color: [darken(textContrast, 0.2), "!important"]
          }
        }
      }
    },
    MuiIconButton: {
      root: {
        "&$disabled": {
          "&:not($colorPrimary):not($colorSecondary)": {
            color: [textDisabled, "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: `2px solid ${textDark}`
          },
          "&:after": {
            borderBottom: `2px solid ${textContrast}`
          }
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgNormal, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgNormal, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgNormal, 0.2), "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: ["none", "!important"]
          },
          "&:after": {
            borderBottom: ["none", "!important"]
          }
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100,
        "&$focused": {
          color: [textContrast, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textDark, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: textNormal
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    },
    MuiCheckbox: {
      root: {
        "&$checked": {
          color: [lighten(secondary, 0.1), "!important"]
        }
      }
    }
  }
};
