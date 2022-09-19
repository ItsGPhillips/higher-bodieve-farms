import styled from "styled-components";
import { BsFillHouseFill } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { RiBook3Line } from "react-icons/ri";
import { RiSettings4Fill } from "react-icons/ri";
import ProfileSection from "./profile-section";
import LinkSelector from "./link-selector";

const StyledSidePanel = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: stretch;

   width: var(--side-panel-width);
   flex-shrink: 0;
   border-right: ${(p) => {
      return `solid ${p.theme["bg-lighter"]} 1px`;
   }};
   background-color: ${(p) => p.theme.bg};

   nav {
      border-top: ${(p) => {
         return `solid ${p.theme["bg-lighter"]} 1px`;
      }};

      ul li {
         margin: 0.5rem 0px;
      }
   }

   .last-item {
      margin-top: auto;
      margin-bottom: 5rem;
   }
`;

const SidePanel: React.FC = () => {
   const size = "20px";
   return (
      <StyledSidePanel>
         <ProfileSection name="Nicholas Phillips" status="Admin" />
         <nav>
            <ul>
               <li>
                  <LinkSelector
                     label="Dashboard"
                     icon={<BsFillHouseFill size={size} />}
                     path="/"
                  />
               </li>
               <li>
                  <LinkSelector
                     label="Bookings"
                     icon={<RiBook3Line size={size} />}
                     path="/bookings"
                  />
               </li>
               <li>
                  <LinkSelector
                     label="Stock"
                     icon={<FiBox size={size} />}
                     path="/stock"
                  />
               </li>
            </ul>
         </nav>
         <div className="last-item">
            <LinkSelector
               label="Settings"
               icon={<RiSettings4Fill size={size} />}
               path="/settings"
            />
         </div>
      </StyledSidePanel>
   );
};

export default SidePanel;
