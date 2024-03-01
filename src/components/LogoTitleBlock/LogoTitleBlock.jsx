import Logo from "components/Logo/Logo";
import { LogoConteiner, LogoTitleConteiner, Title, TitleSpan } from "./LogoTitleBlock.styled";

export default function LogoTitleBlock() {
  return (
    <LogoTitleConteiner>
      <LogoConteiner>
        <Logo />
      </LogoConteiner>
      <Title>Expand your mind, reading <TitleSpan>a book</TitleSpan></Title>
    </LogoTitleConteiner>
  );
};
