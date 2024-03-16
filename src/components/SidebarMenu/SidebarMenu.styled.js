import color from 'common/GlobalColers';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: ${color.gryeBlack};
  transform: translateX(${props => props.open ? '0%' : '100%'});
  transition: transform 0.25s ease;
`;