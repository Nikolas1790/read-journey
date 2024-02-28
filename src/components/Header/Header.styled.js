import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import color from 'common/GlobalColers';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px; 
  margin: 0 auto; 
  max-width: 1184px;
`
export const HeaderNav = styled.nav`
    @media (min-width: 900px) {
    margin-left: 20px;
  };
  @media (max-width: 730px) {
    display: none;
  };
`

export const StyledNavigation = styled(NavLink)` 
  position: relative;
  padding: 14px;
  font-size: 16px;
  line-height: 1.25;

  &.active {
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px; 
      border-radius: 50%; 
      background-color: ${color.darkGgeen};
      left: 50%; 
      transform: translateX(-50%);
      top: 75%; 
      
    }
  }

  &:first-of-type.active {
    &::after {
      display: none;
    }
  }

  &:hover{
    background:  ${color.lightGreene};  
    color: ${color.blackPrimary}; 
    transform: scale(1.1);
    border-radius: 12px;
  }
`
