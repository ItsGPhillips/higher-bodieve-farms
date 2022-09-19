import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLink = styled.div<{ isSelected: boolean }>`
   position: relative;
   display: flex;
   align-items: center;

   width: 100%;
   height: 2.8rem;

   user-select: none;
   color: ${(p) => p.theme.fg};
   background-color: ${(p) => {
      if (p.isSelected) {
         return p.theme["bg-lighter"];
      } else {
         return p.theme.bg;
      }
   }};

   .icon {
      margin: 0px 15% 0px 20%;
   }

   ::before {
      position: absolute;
      top: 0px;
      height: 100%;
      content: "";
      background-color: ${(p) => {
         return p.isSelected ? p.theme.accent : "transparent";
      }};
      width: 8px;
   }

   :hover {
      cursor: pointer;
      color: ${(p) => p.theme["fg-lighter"]};
      ::before {
         ${(p) => {
            if (!p.isSelected) {
               return `background-color: ${p.theme["bg-lighter"]}`;
            }
         }}
      }
   }
`;

interface LinkSelectorProps {
   label: string;
   icon: React.ReactElement;
   path: string;
}
const LinkSelector: React.FC<LinkSelectorProps> = (props) => {
   const router = useRouter();
   return (
      <Link href={props.path}>
         <StyledLink isSelected={router.route === props.path}>
            <span className="icon">{props.icon}</span>
            <span className="label">{props.label}</span>
         </StyledLink>
      </Link>
   );
};

export default LinkSelector;
