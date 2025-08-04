import { createMuiTheme } from "@material-ui/core/styles"

const green = "#99B898"
const darkGreen = "#708670"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const grey = "#747474"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem", // martial-ui is using 16px for 1rem
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: green,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "3rem",
      fontWeight: 500,
      color: "#fff",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 300,
      color: green,
    },

    h4: {
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontSize: "3rem",
      fontWeight: 700,
      color: "#fff",
    },

    h5: {
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#fff",
    },
    bod1: {
      fontFamily: "Montserrat ",
      fontSize: "1.5rem",
      color: grey,
    },
    body2: {
      fontFamily: "Montserrat ",
      fontSize: "1.5rem",
      color: "#fff",
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: darkGreen,
      },
      label: {
        fontFamily: "Montserrat",
        fontSize: "1.5rem",
        color: "#fff",
        fontWeight: 400,
      },
    },
  },
})

export default theme
