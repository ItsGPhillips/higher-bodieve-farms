import styled from "styled-components";
import profilePic from "public/svgs/profile-pic.svg";
import Image from "next/future/image";
import { ThemeVariant } from "../themeProvider";

const ProfileImage = styled(Image)`
   margin: auto 10px;
   border-radius: 50%;
   width: 70px;
   height: 70px;

   box-shadow: ${(p) => {
      if (p.theme.__type === ThemeVariant.Light) {
         return "0px 2px 10px 0px #00000049;";
      } else {
         return "none";
      }
   }};
`;

const StyledProfileSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   margin: 3.5rem 0px;

   ${ProfileImage} {
      margin-bottom: 1rem;
   }

   color: ${(props) => props.theme.fg};
   background-color: ${(props) => props.theme.bg};
   gap: 0.8rem;

   h2 {
      font-size: 1.2rem;
      font-weight: normal;
   }

   span {
      user-select: none;
      font-size: 0.9rem;
      background-color: red;
      padding: 2px 8px;
      border-radius: 2rem;
      font-size: 0.8rem;
      color: white;
   }
`;

type Status = "Admin" | "User";

interface ProfileSectionProps {
   name: string;
   status: Status;
}

const ProfileSection: React.FC<ProfileSectionProps> = (props) => {
   return (
      <StyledProfileSection>
         <ProfileImage priority src={profilePic} alt="profile image" />
         <h2>{props.name}</h2>
         <span className="status-marker">{props.status}</span>
      </StyledProfileSection>
   );
};

export default ProfileSection;
