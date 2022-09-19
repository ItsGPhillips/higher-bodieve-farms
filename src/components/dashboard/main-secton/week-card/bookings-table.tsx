import { css } from "styled-components";

const STYLES = css`
   padding: 0.5rem;
   display: block;
   td,
   th {
      border-bottom: solid #a0a0a0 1px;
      padding: 0.5rem;
      min-width: 120px;
   }
   font-size: 0.8rem;
   margin-left: auto;
   border-collapse: collapse;
   text-align: left;
`;

const BookingsTable: React.FC = () => {
   return (
      <table css={STYLES}>
         <tbody>
            <tr>
               <td>The Mill House</td>
               <td>Person 1</td>
            </tr>
            <tr>
               <td>Goose House</td>
               <td>Person 2</td>
            </tr>
            <tr>
               <td>The Granary</td>
               <td> -- </td>
            </tr>
            <tr>
               <td>Orchard Cottage</td>
               <td>Person 4</td>
            </tr>
         </tbody>
      </table>
   );
};

export default BookingsTable;
