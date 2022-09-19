import styled from "styled-components";
import ActiveWeekProvider from "./active-week-context";
import FinanceLabel from "./main-secton/finance-label";
import WeekCard from "./main-secton/week-card/week-card";
import WeekPicker from "./main-secton/week-picker/week-picker";
import NotificationPanel from "./notification-section/panel";

const Styles = styled.div`
   display: inline-flex;
   flex-direction: row;
   justify-content: stretch;
   align-items: flex-start;
   width: inherit;
   height: inherit;

   section {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 2rem;
      flex: 1;
      height: inherit;
   }

   section:nth-child(1) {
      padding: 2rem;
      padding-left: 5%;
      .year-labels {
         display: flex;
         align-items: flex-start;
         font-size: 2rem;
         gap: 4rem;
      }
      .week-cards {
         display: flex;
         gap: 2rem;
      }
   }
`;

const Dashboard: React.FC = () => {
   let date = new Date();
   return (
      <Styles>
         <section>
            <div className="year-labels">
               <FinanceLabel value="£65,000" label="Income" variant="large" />
               <FinanceLabel value="£3000" label="Expenses" variant="large" />
            </div>
            <ActiveWeekProvider>
               <WeekPicker />
               <div className="week-cards">
                  <WeekCard isCurrentWeek></WeekCard>
                  <WeekCard></WeekCard>
               </div>
            </ActiveWeekProvider>
         </section>
         <section>
            <NotificationPanel />
         </section>
      </Styles>
   );
};

export default Dashboard;
