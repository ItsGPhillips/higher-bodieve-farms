import startOfWeek from "date-fns/startOfWeek";
import {
   createContext,
   PropsWithChildren,
   useCallback,
   useContext,
   useState,
} from "react";

interface ActiveWeekState {
   activeWeek: Date;
   setActiveWeek: React.Dispatch<Date>;
}

const ACTIVE_WEEK_CONTEXT = createContext<ActiveWeekState | null>(null);

export const useActiveWeek = (): ActiveWeekState => {
   const ctx = useContext(ACTIVE_WEEK_CONTEXT);
   if (ctx === null) {
      throw "ACTIVE_WEEK_CONTEXT was null";
   }
   return ctx;
};

const ActiveWeekProvider: React.FC<PropsWithChildren> = (props) => {
   const [activeWeek, setActiveWeek] = useState(
      startOfWeek(new Date(), {
         weekStartsOn: 6,
      })
   );

   return (
      <ACTIVE_WEEK_CONTEXT.Provider value={{ activeWeek, setActiveWeek }}>
         {props.children}
      </ACTIVE_WEEK_CONTEXT.Provider>
   );
};

export default ActiveWeekProvider;
