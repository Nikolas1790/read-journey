import color from 'common/GlobalColers'
import { ErrorMessage, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const DashboardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  width: 335px;
  height: 100%;
  border-radius: 30px;
  background: ${color.blackLight};
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    /* display: flex; */
    /* gap: 32px; */
    width: 704px;
    height: 336px;
    padding: 32px;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    /* display: block; */
    width: 353px;
    height: 651px;
    padding: 40px 20px 20px 20px;
  }
;`

export const FilterTitle = styled.h3`
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 14px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 295px;
  margin-bottom: 20px; 
  
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    width: 313px;
  }
`;

export const FormFieldConteiner = styled.div`
  position:relative;
`;

export const FormFieldLabel = styled.label`
  position:absolute;
  top: 14px;
  left: 14px;
  font-size: 12px;
  color: ${color.gryeLight};
  @media (min-width: 768px) {
    top: 16px;
    font-size: 14px;
  }
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 44px;
  font-size: 12px;
  border: none;
  border-radius: 12px;
  padding: 16px 14px 16px 65px;
  
  outline: none;
  color: ${color.whitePrimary};
  background: ${color.gryeBlack};
  padding-left: ${(props) => props.paddindleft || '86px'};
  border: 1px solid	${(props) => (props.error === "true" ? color.focusColor : "rgba(18, 20, 23, 0.1)")};
  @media (min-width: 768px) {
    height: 50px;
    font-size: 14px;
  }
  @media (min-width: 1440px) {
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: 10px;
  color: ${color.focusColor};
  padding: 4px 0px 0px 14px;
`;

///////////////////////////////////

export const LinkTo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.gryeLight}; 
  margin: auto 0;
  
  &:hover::after,
  &:focus::after {
    color:red; 
  }
`;

export const LinkTitlelTo = styled.p`
  position: relative; 
  font-size: 12px; 
  transition: color 0.3s linear; 

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px; 
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
  @media (min-width: 768px) {
    font-size: 14px; 
  }
`;

export const LinkToSvg = styled.svg`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;