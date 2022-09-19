import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { StyledMain } from "../components/common-styles";

const StyledStockPage = styled(StyledMain)`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const StockPAge: NextPage = () => {
   return (
      <StyledStockPage>
         <Head>
            <title>Stock</title>
         </Head>
         <>Stock</>
      </StyledStockPage>
   );
};

export default StockPAge;
