import styled from "styled-components";

export const StyledMain = styled.main`
   width: 100%;
   height: 100%;
   background-color: ${(p) => p.theme["bg-darker"]};
   color: ${(p) => p.theme.fg};

   display: flex;
   justify-content: center;
   align-items: center;
`;
