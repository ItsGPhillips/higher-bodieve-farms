import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { useEffect, useMemo, useState } from "react";
import {
   createColumnHelper,
   flexRender,
   getCoreRowModel,
   useReactTable,
   TableOptions,
} from "@tanstack/react-table";

import { BsCheck } from "react-icons/bs";

const createMockBookingsData = (num: number): BookingProps[] =>
   Array(num)
      .fill(null)
      .map(() => {
         let [firstName, lastName] = [
            faker.name.firstName(),
            faker.name.lastName(),
         ];
         return {
            name: [firstName, lastName].join(" "),
            price: faker.finance.amount(800, 1500, 2, "£"),
            date: faker.date
               .soon()
               .toDateString()
               .split(" ")
               .slice(1)
               .join(" "),
            phone: faker.phone.number("+44 7#######"),
            email: faker.internet.email(firstName, lastName),
         };
      });

const StyledButton = styled.button<{ isSelected: boolean }>`
   width: 1.2rem;
   height: 1.2rem;
   border-radius: 25%;
   border: solid #a8a8a8 1px;
   cursor: pointer;
`;

const Selector: React.FC = () => {
   const [isSelected, setIsSelected] = useState(false);
   return (
      <StyledButton
         onClick={() => setIsSelected((s) => !s)}
         isSelected={isSelected}
      >
         {isSelected ? <BsCheck size="10x" /> : null}
      </StyledButton>
   );
};

interface BookingProps {
   name: string;
   date: string;
   price: string;
   phone: string;
   email: string;
   selected?: boolean;
}

const Booking: React.FC<BookingProps> = (props) => {
   return (
      <tr>
         <td>
            <Selector />
         </td>
         <td>{props.name}</td>
         <td>{props.date}</td>
         <td>{props.price}</td>
         <td>{props.phone}</td>
         <td>{props.email}</td>
      </tr>
   );
};

const StyledTable = styled.table`
   border-collapse: collapse;
   text-align: left;

   thead tr {
      background-color: #3e3081;
      color: #ededed;
      padding: 10px;
      font-weight: bold;
      font-size: 1.2rem;
   }
   tbody {
      overflow: scroll;
   }
   tbody tr {
      background-color: #e1e1e1;
      padding: 10px;
      border-bottom: solid #a8a8a8 1px;
      :last-child {
         border-bottom: solid #3e3081 3px;
      }
   }
   td,
   th {
      padding: 0.8rem 0.4rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      :first-child {
         padding-left: 1rem;
      }
   }

   td:nth-child(2) {
      max-width: 180px;
   }

   td button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 0px;
   }
`;

const columnHelper = createColumnHelper<BookingProps>();
const columns = [
   columnHelper.accessor("selected", {
      header: "",
      cell: (info) => <Selector />,
   }),
   columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor("price", {
      header: "Price",
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor("phone", {
      header: "Phone",
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
   }),
];

const BookingsTable: React.FC = () => {
   const bookings = useMemo(() => {
      return createMockBookingsData(20);
   }, []);

   const table = useReactTable({
      data: bookings,
      columns,
      getCoreRowModel: getCoreRowModel(),
   });

   return (
      <StyledTable>
         <thead>
            {table.getHeaderGroups().map((headerGroup) => (
               <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                     <th key={header.id}>
                        {header.isPlaceholder
                           ? null
                           : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                             )}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody>
            {table.getRowModel().rows.map((row) => (
               <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                     <td key={cell.id}>
                        {flexRender(
                           cell.column.columnDef.cell,
                           cell.getContext()
                        )}
                     </td>
                  ))}
               </tr>
            ))}
         </tbody>
      </StyledTable>
   );
};

export default BookingsTable;
