import addWeeks from "date-fns/addWeeks";
import subWeeks from "date-fns/subWeeks";

import styled from "styled-components";
import WeekSegment from "./week-segment";

const StyledWeekPicker = styled.div`
   display: flex;
   flex-direction: row;
   align-items: stretch;
   height: 12%;
   width: 100%;
   border: solid ${(p) => p.theme["bg-accent"]} 1px;
   border-radius: 0.5rem;
   overflow: hidden;
   user-select: none;
   :hover {
      cursor: pointer;
   }
`;

const WeekPicker: React.FC = () => {
   const range = 31;
   const listStartWeek = subWeeks(new Date(), range / 2);

   return (
      <StyledWeekPicker>
         {Array.from(Array(range).keys()).map((idx) => {
            return (
               <WeekSegment key={idx} week={addWeeks(listStartWeek, idx)} />
            );
         })}
      </StyledWeekPicker>
   );
};

export default WeekPicker;
