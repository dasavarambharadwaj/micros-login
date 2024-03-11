import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
import Theme from "./helpers/Theme";
import LoginWrapper from "./pages/login/LoginWrapper";
function App() {
  const [theme, toggleTheme] = Theme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button data-testid="theme-switch" onClick={toggleTheme}>
        {theme.palette.mode === "light" ? (
          <LightModeIcon></LightModeIcon>
        ) : (
          <DarkModeIcon></DarkModeIcon>
        )}
      </Button>
      <LoginWrapper></LoginWrapper>
    </ThemeProvider>
  );
}

export default App;
