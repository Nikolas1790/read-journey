import Logo from "components/Logo/Logo";
import { BlockLogout, BlockMainInf, BlockNav, BtnLogOut, HeaderContainer, Initials, PagesNav, UserName } from "./Header.styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <BlockMainInf>
        <Link to="/recommended">
          <Logo />
        </Link>
        

        <BlockNav>
            <PagesNav to="/recommended" >Home</PagesNav>
            <PagesNav to="/library" >My library</PagesNav>        
        </BlockNav>

        <BlockLogout>
          <Initials>V</Initials>
          <UserName>Nik</UserName>
          <BtnLogOut>Log out</BtnLogOut>
        </BlockLogout>

      </BlockMainInf>
    </HeaderContainer>
  );
};
