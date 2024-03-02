import color from 'common/GlobalColers'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const SubmitBlock = styled.div`
  /* margin-top: auto; */
`;

export const FormBtn = styled.button`
  border-radius: 30px;
  background: ${color.darkGgeen};
  color: ${color.blackLight};
  font-size: 20px;
  font-weight: 700;
  line-height: 1;

  margin-right: 20px;
  padding: 16px 54px;
  transition: background 0.25s linear;
  &:hover,
  &:focus {    
    background: ${color.whitePrimary}; 
  }
`;

export const LinkTo = styled(NavLink)`
  color: ${color.gryeLight}; 
  font-weight: 500;

  position: relative; 

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px; 
    height: 1px; 
    background: ${color.gryeLight}; 
    transform: scaleX(1); 
    transition: transform 0.25s ease-in-out; 
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(0); 
  }
  
`;
