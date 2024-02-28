// import { Link } from "react-router-dom";
import sprite from '../../img/sprite.svg';
import { LogoLink } from "./Logo.styled";

export default function Logo() {
  return (
    <nav>            
      <LogoLink  to="/recommended">
        <svg width={42} height={17}>
            <use href={`${sprite}#icon-Logo`} />
        </svg>
        <p>READ JOURNEY</p>
      </LogoLink >
    </nav>   
  );
};
