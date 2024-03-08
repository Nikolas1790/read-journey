import { MainBlock } from "./UniversalMainContainer.styled";

export default function UnivesalMainConteainer({ children }) {
  return (
    <MainBlock>
      {children}
    </MainBlock>
  );
}