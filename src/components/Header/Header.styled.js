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
  &:hover,
  &:focus {
    color: red;
  }

  &.active {
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
  }

  &:not(:last-child) {
    margin-right: 36px; 
  }

`
///////////////////////////////////////////////////

export const BlockMainInf = styled.div`
  display: flex;
  align-items: center;

  width: 1216px;
  height: 74px;
  background: ${color.blackLight};
  border-radius: 15px;
  
`

