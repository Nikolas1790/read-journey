import { useLocation } from 'react-router-dom';
import sprite from '../../img/sprite.svg';
import {  LogoLink, LogoName } from "./Logo.styled";

export default function Logo() {
  const location = useLocation();
  const page = location.pathname === '/register' || location.pathname === '/login';
 
  return (           
      <LogoLink  to="/recommended">
        <svg width={42} height={17}>
            <use href={`${sprite}#icon-Logo`} />
        </svg>
        <LogoName page={page ? "true" : ''}>READ JOURNEY</LogoName>
      </LogoLink > 
  );
};
