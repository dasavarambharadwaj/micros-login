import './App.css';
import Main from "./pages/main/Main";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from '@mui/material/Button';

import Theme from './helpers/Theme';
function App() {
  const [theme, toggleTheme] = Theme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={toggleTheme}>{theme.palette.mode === "light" ? (<LightModeIcon></LightModeIcon>) : (<DarkModeIcon></DarkModeIcon>)}</Button>
      <Main></Main>
    </ThemeProvider>
    
  );
}

export default App;
