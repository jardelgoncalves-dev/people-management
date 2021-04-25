"use strict";
{
  const theme = {
    "--background": "#1F1F1F",
    "--darken-1": "#262626",
    "--darken-2": "#323232",
    "--darken-3": "#4E4E4E",
    "--darken-4": "#6E6E6E",
    "--primary": "#0066FF",
    "--primary-opacity-4": "rgba(0, 102, 255, 0.4)",
    "--text": "#FAFAFA",
  };
  function setTheme() {
    const keys = Object.keys(theme);
    keys.forEach((key) => {
      document.body.style.setProperty(key, theme[key]);
    });
  }

  setTheme();
}
