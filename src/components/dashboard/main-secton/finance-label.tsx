import { PropsWithChildren } from "react";
import styled from "styled-components";

const FinanceLabelBase = styled.div`
   span {
      display: block;
   }
`;

const LargeFinanceLabel = styled(FinanceLabelBase)`
   .value {
      font-size: 3rem;
      color: ${(p) => p.theme["fg"]};
   }
   .label {
      font-size: 1rem;
      color: ${(p) => p.theme["fg-darker"]};
   }
`;

const SmallFinanceLabel = styled(FinanceLabelBase)`
   .value {
      font-size: 2rem;
      color: ${(p) => p.theme["bg"]};
   }
   .label {
      font-size: 0.8rem;
      color: ${(p) => p.theme["bg-lighter"]};
   }
`;

type FinanceLabelVariant = "large" | "small";

const getFinanceLabelFromVariant = (variant: FinanceLabelVariant) => {
   switch (variant) {
      case "large":
         return (props: PropsWithChildren) => (
            <LargeFinanceLabel>{props.children}</LargeFinanceLabel>
         );
      case "small":
         return (props: PropsWithChildren) => (
            <SmallFinanceLabel>{props.children}</SmallFinanceLabel>
         );
   }
};

const FinanceLabel: React.FC<{
   value: string;
   label: "Income" | "Expenses";
   variant: FinanceLabelVariant;
}> = (props) => {
   const Label = getFinanceLabelFromVariant(props.variant);
   return (
      <Label>
         <span className="value">{props.value}</span>
         <span className="label">{props.label}</span>
      </Label>
   );
};

export default FinanceLabel;
