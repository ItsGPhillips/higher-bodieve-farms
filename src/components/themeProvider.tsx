import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const SET_THEME_CONTEXT = createContext<{
   theme: ThemeVariant;
   setTheme: React.Dispatch<ThemeVariant>;
} | null>(null);

export const useSetTheme = () => {
   const ctx = useContext(SET_THEME_CONTEXT);
   if (ctx === null) {
      throw "set theme context was null";
   }
   return ctx;
};

export enum ThemeVariant {
   Dark = "Dark",
   Light = "Light",
}

export interface Theme {
   type: ThemeVariant;
   bg: string;
   fg: string;
   accent: string;
   ["current-week"]: string;
   ["bg-accent"]: string;

   ["fg-lighter"]: string;
   ["bg-lighter"]: string;
   ["fg-darker"]: string;
   ["bg-darker"]: string;
   ["bg-alt"]: string;
}
const THEMES: Record<ThemeVariant, Theme> = {
   [ThemeVariant.Dark]: {
      type: ThemeVariant.Dark,
      bg: "#1c1c1c",
      fg: "#efefef",

      accent: "#3447af",
      ["current-week"]: "#468f22",
      ["bg-accent"]: "#616161",

      ["fg-lighter"]: "#ffffff",
      ["bg-lighter"]: "#353535",
      ["fg-darker"]: "#b8b8b8",
      ["bg-darker"]: "#0f0f0f",
      ["bg-alt"]: "#e5e5e5",
   },
   [ThemeVariant.Light]: {
      type: ThemeVariant.Light,
      bg: "#efefef",
      fg: "#090909",

      accent: "#a645d6",
      ["current-week"]: "#49ac22",
      ["bg-accent"]: "#616161",

      ["fg-lighter"]: "#3b3b3b",
      ["bg-lighter"]: "#ffffff",
      ["fg-darker"]: "#000000",
      ["bg-darker"]: "#b4b4b4",
      ["bg-alt"]: "#1f1f1f",
   },
};

const ThemeProvider: React.FC<PropsWithChildren> = (props) => {
   const [theme, setTheme] = useState(ThemeVariant.Dark);
   return (
      <StyledComponentsThemeProvider theme={THEMES[theme]}>
         <SET_THEME_CONTEXT.Provider value={{ theme, setTheme }}>
            {props.children}
         </SET_THEME_CONTEXT.Provider>
      </StyledComponentsThemeProvider>
   );
};

export default ThemeProvider;
