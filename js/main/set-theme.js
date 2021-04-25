"use strict";
{
  const theme = {
    "--background": "#1F1F1F",
    "--darken-1": "#262626",
    "--darken-2": "#323232",
    "--darken-3": "#4E4E4E",
    "--primary": "#0066FF",
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
