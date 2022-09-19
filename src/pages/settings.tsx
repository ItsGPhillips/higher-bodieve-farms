import type { NextPage } from "next";
import Head from "next/head";
import { StyledMain } from "../components/common-styles";
import SettingsPage from "../components/settings-page";

const StockPAge: NextPage = () => {
   return (
      <StyledMain>
         <Head>
            <title>Settings</title>
         </Head>
         <SettingsPage />
      </StyledMain>
   );
};

export default StockPAge;
