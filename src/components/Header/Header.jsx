import Logo from "components/Logo/Logo";
import { BlockLogout, BlockMainInf, BtnLogOut, HeaderContainer, Initials, PagesNav, UserName } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <BlockMainInf>
        <Logo />

        <nav>
            <PagesNav to="/recommended" >Home</PagesNav>
            <PagesNav to="/library" >My library</PagesNav>        
        </nav>

        <BlockLogout>
          <Initials>V</Initials>
          <UserName>Nik</UserName>
          <BtnLogOut>Log out</BtnLogOut>
        </BlockLogout>

      </BlockMainInf>
    </HeaderContainer>
  );
};
