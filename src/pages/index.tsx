import type { NextPage } from "next";
import Head from "next/head";
import { StyledMain } from "../components/common-styles";
import Dashboard from "../components/dashboard";

const HomePage: NextPage = () => (
   <StyledMain>
      <Head>
         <title>Dashboard</title>
      </Head>
      <Dashboard />
   </StyledMain>
);

export default HomePage;
