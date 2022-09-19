import { NextPage } from "next";
import Head from "next/head";
import { StyledMain } from "../components/common-styles";

const BookingsPage: NextPage = () => {
   return (
      <StyledMain>
         <Head>
            <title>Bookings</title>
         </Head>
         Bookings
         {/* <BookingsTable /> */}
      </StyledMain>
   );
};

export default BookingsPage;
