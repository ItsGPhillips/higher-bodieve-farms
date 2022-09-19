import getWeek from "date-fns/getWeek";
import startOfWeek from "date-fns/startOfWeek";
import styled, { css } from "styled-components";
import BookingsTable from "./bookings-table";
import FinanceLabel from "../finance-label";
import { useActiveWeek } from "../../active-week-context";
import classNames from "classnames";
import addWeeks from "date-fns/addWeeks";
import isSameWeek from "date-fns/isSameWeek";

const Header: React.FC<{
   date: Date;
   isCurrentWeek?: boolean;
   showNextWeek?: boolean;
}> = (props) => {
   const classnames = classNames("title", {
      "current-week": props.isCurrentWeek,
   });

   let displayWeek: number;
   if (props.showNextWeek) {
      displayWeek = getWeek(addWeeks(props.date, 1));
   } else {
      displayWeek = getWeek(props.date);
   }

   return (
      <div className={classnames}>
         <span>Week {displayWeek}</span>
         <span>{props.date.toDateString()}</span>
      </div>
   );
};

const BodyStyles = css`
   color: black;
   background-color: ${(p) => p.theme["bg-alt"]};
   height: calc(100% - var(--title-height));
   padding: 1rem;
   display: flex;
   flex-direction: row;
   align-items: flex-start;

   .labels {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.5rem;
      margin-left: 0.5rem;
   }
`;

const Body: React.FC = () => {
   return (
      <div className="body" css={BodyStyles}>
         <div className="labels">
            <FinanceLabel value="£2300" label="Income" variant="small" />
            <FinanceLabel value="£220" label="Expenses" variant="small" />
         </div>
         <BookingsTable />
      </div>
   );
};

const WeekCardStyles = styled.div`
   --title-height: 3rem;

   width: 500px;
   height: 300px;
   border-radius: 0.5rem;
   box-shadow: 0px 0px 12px -5px #00000087;
   overflow: hidden;

   .title {
      background-color: ${(p) => p.theme["accent"]};
      height: var(--title-height);
      color: white;

      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: solid ${(p) => p.theme["fg-darker"]} 2px;

      span:nth-child(1) {
         margin-left: 2rem;
         font-size: 1.2rem;
      }
      span:nth-child(2) {
         margin-left: auto;
         margin-right: 2rem;
         color: #cbcbcb;
      }
   }
   .current-week {
      background-color: ${(p) => p.theme["current-week"]};
   }
`;

const WeekCard: React.FC<{
   isCurrentWeek?: boolean;
}> = (props) => {
   const { activeWeek } = useActiveWeek();
   const chosenWeek = props.isCurrentWeek ? new Date() : activeWeek;
   const weekStart = startOfWeek(chosenWeek, {
      weekStartsOn: 6,
   });
   let showNextWeek = false;
   if (!props.isCurrentWeek && isSameWeek(activeWeek, new Date())) {
      showNextWeek = true;
   }
   return (
      <WeekCardStyles>
         <Header
            date={weekStart}
            isCurrentWeek={props.isCurrentWeek}
            showNextWeek={showNextWeek}
         />
         <Body />
      </WeekCardStyles>
   );
};

export default WeekCard;
