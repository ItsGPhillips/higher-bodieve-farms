import { memo } from "react";
import styled from "styled-components";
import NotificationList from "./notifcation-list";

const Styles = styled.div`
   border-left: solid #2f2f2f 1px;
   height: inherit;
   width: 100%;
`;

const NotificationPanel: React.FC = memo(() => {
   return (
      <Styles>
         <h2>Notifications</h2>
         <NotificationList />
      </Styles>
   );
});

export default NotificationPanel;
