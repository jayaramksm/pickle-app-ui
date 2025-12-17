"use client";

import { useState } from "react";
import { Grommet, ThemeContext } from "grommet";
import { CustomThemeContext } from "./pages/context/ThemeContext";
import AppProviders from "./store/providers/ReduxProvider";

const lightTheme = {
  global: {
    colors: {
      background: "white",
      text: "black",
      brand: "#7C3AED",
    },
  },
};

const darkTheme = {
  global: {
    colors: {
      background: "#1A1A1A",
      text: "white",
      brand: "#7C3AED",
    },
  },
};

export default function RootLayout({ children }:any) {
  const [themeMode, setThemeMode]:any = useState("light");

  return (
    <html lang="en">
      <body>
        <AppProviders>
        <CustomThemeContext.Provider
          value={{
            themeMode,
            setThemeMode,
          }}
        >
          <Grommet
            full
            theme={themeMode === "light" ? lightTheme : darkTheme}
            themeMode={themeMode}
          >
            {children}
          </Grommet>
        </CustomThemeContext.Provider>
        </AppProviders>
      </body>
    </html>
  );
}
