import color from 'common/GlobalColers';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: ${color.gryeBlack};
  transform: translateX(${props => props.open ? '0%' : '100%'});
  transition: transform 0.25s ease;
  padding: 280px 4px 40px 4px;
  
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 34px;
  right: 40px;
  
  background: transparent;
`
export const NavBurgerMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  max-width: 70px;
`;