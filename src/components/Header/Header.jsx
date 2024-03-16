import Logo from "components/Logo/Logo";
import {BlockMainInf, BlockNav, BtnBurger, BtnLogOut, HeaderContainer, Initials, PagesNav, UserBar, UserName } from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operationsAuth";
import { toast } from "react-toastify";
import {  selectUser } from "../../redux/auth/selectorAuth";
import sprite from '../../img/ico-sprite.svg';
import { useState } from "react";
import PortalModal from "components/PortalModal/PortalModal";
import SidebarMenu from "components/SidebarMenu/SidebarMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {name} = useSelector(selectUser);  
  const firstLetterAvatar =  name?.slice(0, 1).toUpperCase();

  const handleButtonClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/register');
    } catch (error) {
      toast.error("Log out failed. Something went wrong.");
    }
  };  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Initials>{firstLetterAvatar}</Initials>
          <UserName>{name}</UserName>
          <BtnLogOut label="Log out" onClick={handleButtonClick} width="114px" />

          <BtnBurger onClick={toggleMenu}>
            <svg width={28} height={28}>
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </BtnBurger>
        </UserBar>

      </BlockMainInf>
      <PortalModal active={isMenuOpen} setActive={setIsMenuOpen}>
        <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </PortalModal>
    </HeaderContainer>
  );
};
