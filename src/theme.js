import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#002855",
        },
        secondary: {
            main: "#1BB3C5",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h4: {
            color: "#002855",
        },
        h6: {
            color: "#1BB3C5",
        },
    },
});

export default theme;
