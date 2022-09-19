import styled from "styled-components";
import { ThemeVariant, useSetTheme as useTheme } from "../themeProvider";

const Styles = styled.div`
   width: inherit;
   height: inherit;

   .settings-row {
      margin: 0.5rem;
      height: 2rem;
      padding-left: 1rem;

      background-color: ${(p) => p.theme["bg-lighter"]};

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 3rem;
   }

   button {
      height: 60%;
      width: 2rem;
   }
`;

const SettingsPage: React.FC = () => {
   const { theme, setTheme } = useTheme();

   const getLabel = () => {
      switch (theme) {
         case ThemeVariant.Dark:
            return "Off";
         case ThemeVariant.Light:
            return "On";
      }
   };

   const swapTheme = (theme: ThemeVariant): ThemeVariant => {
      switch (theme) {
         case ThemeVariant.Dark:
            return ThemeVariant.Light;
         case ThemeVariant.Light:
            return ThemeVariant.Dark;
      }
   };

   return (
      <Styles>
         <div className="settings-row">
            <span>Use Dark Theme</span>
            <button onClick={() => setTheme(swapTheme(theme))}>
               {getLabel()}
            </button>
         </div>
      </Styles>
   );
};

export default SettingsPage;
