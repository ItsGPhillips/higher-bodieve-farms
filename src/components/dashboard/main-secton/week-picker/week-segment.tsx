import classNames from "classnames";
import getWeek from "date-fns/getWeek";
import isBefore from "date-fns/isBefore";
import isSameWeek from "date-fns/isSameWeek";
import {
   MdOutlineRadioButtonChecked,
   MdRadioButtonUnchecked,
} from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { TiWarningOutline } from "react-icons/ti";
import styled, { keyframes } from "styled-components";
import { useActiveWeek } from "../../active-week-context";

const isSameWeekHelper = (first: Date, second: Date): boolean => {
   return isSameWeek(first, second, {
      weekStartsOn: 6,
   });
};

const StyledWeekSegmentLabel = styled.span`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 0.5rem;
   width: 100%;
   flex: 1;
   background-color: ${(p) => p.theme["bg-lighter"]};
   font-size: 0.8rem;

   &.active {
      background-color: ${(p) => p.theme["accent"]};
   }
   &.current {
      background-color: ${(p) => p.theme["current-week"]};
   }

   :hover {
      filter: brightness(120%);
   }
`;

const AlertIconKeyframes = keyframes`
   0% {
      transform: scale(100%);
   }
   50% {
      transform: scale(120%);
   }
   100% {
      transform: scale(100%);
   }
`;

const StyledWeekSegment = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1;

   border-left: solid #545454 1px;

   span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.4rem 0px;
      width: 100%;
      height: 2rem;
   }
   .animated-icon {
      animation: ${AlertIconKeyframes} 2s ease-in-out 0s infinite;
   }
`;

const getRandomInt = (min: number, max: number): number => {
   return Math.floor(Math.random() * (max - min + 1) + min);
};

interface WeekSegmentProps {
   week: Date;
}
// TODO: memoize this
const WeekSegment: React.FC<WeekSegmentProps> = (props) => {
   const { activeWeek, setActiveWeek } = useActiveWeek();
   const isCurrent = isSameWeekHelper(props.week, new Date());
   const classnames = classNames({
      current: isCurrent,
      active: isSameWeekHelper(props.week, activeWeek),
   });

   const iconClassNames = classNames({
      "animated-icon": isCurrent,
   });

   const getColor = (color: string): string => {
      if (isCurrent) {
         return color;
      } else if (isBefore(props.week, new Date())) {
         return "#898989";
      } else {
         return color;
      }
   };

   const getRandomIcon = () => {
      if (isCurrent) {
         return <MdOutlineRadioButtonChecked color={getColor("#4dc32c")} />;
      } else if (isBefore(props.week, new Date())) {
         return <MdOutlineRadioButtonChecked color={"#3c3c3c"} />;
      } else {
         switch (getRandomInt(1, 4)) {
            case 1:
               return <TiWarningOutline color={getColor("#dfc147")} />;
            case 2:
               return <MdRadioButtonUnchecked color={getColor("#898989")} />;
            case 3:
               return <RiErrorWarningLine color={getColor("#e92929")} />;
            default:
               return null;
         }
      }
   };

   return (
      <StyledWeekSegment>
         <StyledWeekSegmentLabel
            className={classnames}
            onClick={() => {
               setActiveWeek(props.week);
            }}
         >
            {getWeek(props.week)}
         </StyledWeekSegmentLabel>
         <span className={iconClassNames}>{getRandomIcon()}</span>
      </StyledWeekSegment>
   );
};

export default WeekSegment;
