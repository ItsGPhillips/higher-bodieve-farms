import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/future/image";

import { StaticImageData } from "next/image";
import tmhKitchen from "public/images/the-mill-house/kitchen.jpg";
import ocLounge from "public/images/orchard-cottage/lounge.jpg";
import tgLounge from "public/images/the-granary/lounge.jpg";
import tghBedroom from "public/images/goose-house/bedroom.jpg";

const StyledBarnCard = styled.div`
   --card-width: 400px;
   --card-height: 300px;

   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
   width: var(--card-width);
   height: var(--card-height);
   margin: 2rem;
   border-radius: 10px;
   box-shadow: 0px 2px 10px 5px #0000003a;
   overflow: hidden;
   transition: all 80ms;
   background-color: white;

   img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 80ms;
   }

   h2 {
      z-index: 10;
      opacity: 0;
      color: white;
      font-size: 30px;
      -webkit-text-stroke: 1px black;
      background: #0000006c;
      padding: 1rem;

      transition: all 80ms;
   }

   :hover {
      transform: scale(1.02);
      box-shadow: 0px 5px 20px 2px #0000003a;
      cursor: pointer;
      h2 {
         opacity: 100%;
      }
      img {
         filter: blur(6px) saturate(30%);
      }
   }
`;

interface BarnCardProps {
   name: string;
   image: StaticImageData;
}

const BarnCard: React.FC<BarnCardProps> = (props) => {
   return (
      <StyledBarnCard>
         <h2>{props.name}</h2>
         <Image src={props.image} alt="barn image" draggable={false} />
      </StyledBarnCard>
   );
};

const CardSection = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-content: flex-start;
   flex-flow: row wrap;
`;

const StyledBarnsPage = styled.div`
   background-color: ${(p) => p.theme.bg};
   overflow-y: auto;
   overflow-x: auto;
`;

const RoomCardsPanel: React.FC = () => {
   return (
      <StyledBarnsPage>
         <Head>
            <title>Barns</title>
            <meta name="barns" content="barns page" />
         </Head>
         <CardSection draggable={false}>
            <BarnCard name="The Mill House" image={tmhKitchen} />
            <BarnCard name="The Goose House" image={tghBedroom} />
            <BarnCard name="Orchard Cottage" image={ocLounge} />
            <BarnCard name="The Granary" image={tgLounge} />
         </CardSection>
      </StyledBarnsPage>
   );
};

export default RoomCardsPanel;
