import Logo from "components/Logo/Logo";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
        <Logo />

        <nav>
            <NavLink to="/recommended" >Home</NavLink>
            <NavLink to="/library" >My library</NavLink>
        
        </nav>
    </HeaderContainer>
  );
};
