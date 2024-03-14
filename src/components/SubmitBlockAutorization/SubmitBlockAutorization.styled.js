import color from 'common/GlobalColers'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const SubmitBlock = styled.div`
  /* margin-top: auto; */
`;

export const FormBtn = styled.button`
  border-radius: 30px;
  color: ${color.blackLight};
  background: ${color.darkGgeen};
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  margin-right: 20px;
  padding: 16px 54px;

  transition: color 0.3s linear, background 0.3s linear; 

  &:hover,
  &:focus {
    color: ${color.whitePrimary};
    background: ${color.blackLight};
    box-shadow: 0 0 0 2px ${color.whiteLightTranslucent};
  }
`;

export const LinkTo = styled(NavLink)`
  position: relative;
  color: ${color.gryeLight}; 
  font-weight: 500;
  transition: color 0.3s linear; 

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px; 
    height: 1px; 
    background: ${color.gryeLight}; 
    transition: background 0.3s linear; 
  }
  &:hover,
  &:focus {
    color: ${color.whitePrimary};
    
    &::after {
      background: ${color.whitePrimary};  
    }
  }  
`;