import Logo from "components/Logo/Logo";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <Logo />

        <nav>
            <NavLink to="/recommended" >Home</NavLink>
            <NavLink to="/library" >My library</NavLink>
        
        </nav>
    </div>
  );
};
