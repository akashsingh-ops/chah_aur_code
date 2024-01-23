import { createContext, useContext } from "react";
export const ThemeContext = createContext({
  // these are defualt para for avoiding error
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;
export default function useTheme() {
  return useContext(ThemeContext);
}
