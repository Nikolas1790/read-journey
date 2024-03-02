import Logo from "components/Logo/Logo";
import {BlockMainInf, BlockNav, HeaderContainer, Initials, PagesNav, UserBar, UserName } from "./Header.styled";
import { Link } from "react-router-dom";
import CustomButton from "components/CustomButton/CustomButton";

export default function Header() {
  const handleButtonClick = () => {
    console.log('Button 1 clicked');
  };
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

        <UserBar>
          <Initials>V</Initials>
          <UserName>Nik</UserName>
          <CustomButton label="Log out" onClick={handleButtonClick} width="114px" />
        </UserBar>

      </BlockMainInf>
    </HeaderContainer>
  );
};
