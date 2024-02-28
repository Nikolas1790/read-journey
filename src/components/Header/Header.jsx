import Logo from "components/Logo/Logo";
import { BlockMainInf, HeaderContainer, PagesNav } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <BlockMainInf>
        <Logo />

        <nav>
            <PagesNav to="/recommended" >Home</PagesNav>
            <PagesNav to="/library" >My library</PagesNav>        
        </nav>

        <div>
          <div></div>
          <p></p>
          <button></button>
        </div>
      </BlockMainInf>
    </HeaderContainer>
  );
};
