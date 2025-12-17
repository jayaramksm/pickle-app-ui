"use client";
import { createContext, useContext } from "react";

export const CustomThemeContext = createContext<any>(null);

export const useTheme = () => useContext(CustomThemeContext);
