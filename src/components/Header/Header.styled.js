import color from 'common/GlobalColers'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center ;
  align-items: center;
  /* flex-wrap: wrap; */
  padding-top: 32px; 
  /* margin: 0 auto;  */
  /* max-width: 1184px; */
`

export const BlockMainInf = styled.div`
  display: flex;
  align-items: center;

  width: 1216px;
  height: 74px;
  background: ${color.blackLight};
  border-radius: 15px;
  
`

export const PagesNav = styled(NavLink)`
  position: relative;
  padding: 20px 2px;
  font-size: 16px;
  line-height: 1.13;
  color: ${color.gryeLight};

  transition: color 0.2s linear;
  &:hover,
  &:focus {
    color: ${color.focusColor};
  }

  &.active {
    color: ${color.whitePrimary};
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px; 
      background-color: ${color.blue};
      border-radius: 2px;
      left: 50%; 
      transform: translateX(-50%);
      top: 79%; 
      
    }

    &:hover {
      color: ${color.focusColor};
    }
  }

  &:not(:last-child) {
    margin-right: 36px; 
  }

`
///////////////////////////////////////////////////

export const BlockLogout = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
 
  
`

export const Initials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(249, 249, 249, 0.2);
  background: ${color.gryeBlack};
 
  margin-right: 8px;
`

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;

  margin-right: 16px;
`

export const BtnLogOut = styled.button`
  width: 114px;
  height: 42px;
  font-size: 16px;
  font-weight: 700;

  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;

  background: transparent;
  margin-right: 16px;
`