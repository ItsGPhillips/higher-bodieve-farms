import { IsKnown } from "@tanstack/react-table";
import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import SidePanel from "../components/side-panel/side-panel";
import ThemeProvider from "../components/themeProvider";

const GlobalStyles = createGlobalStyle`
   :root {
      --side-panel-width: 300px;
   }

   * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-family: 'Rubik', sans-serif;
   }

   h2, div, span {
      font-weight: normal;
   }

   html {
      overflow: hidden;
   }
`;

const MainContent = styled.div`
   display: flex;
   flex: 0;
   height: 100vh;
   width: 100vw;
   overflow: hidden;
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
   return (
      <ThemeProvider>
         <MainContent>
            <GlobalStyles />
            <SidePanel />
            <Component {...pageProps} />
         </MainContent>
      </ThemeProvider>
   );
};

export default MyApp;
