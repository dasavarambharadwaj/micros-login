import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

function Theme() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  function toggleTheme() {
    const dark = localStorage.getItem("theme") === "light"
    setTheme(dark ? darkTheme : lightTheme);
    setLocalStorage(dark)
    setClass(dark)
  }
  function setLocalStorage(darkMode) {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }
  function setClass(darkMode) {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const darkMode = localStorage.getItem("theme") === "dark"
      setTheme(
         darkMode ? darkTheme : lightTheme
      );
      setClass(darkMode)
    } else {
      const dark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(dark ? darkTheme : lightTheme);
      setClass(dark)
      setLocalStorage(dark)
    }
  }, []);
  return [theme, toggleTheme];
}
export default Theme;
