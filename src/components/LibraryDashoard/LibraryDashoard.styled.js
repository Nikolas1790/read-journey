import color from 'common/GlobalColers'
import { ErrorMessage, Field } from 'formik'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MainBlockLibraryDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

`

export const Filters = styled.div`
  margin-bottom: 20px;
`

export const FilterTitle = styled.h3`
font-size: 14px;
font-weight: 500;
  margin-bottom: 8px;
  margin-left: 14px;
`

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 8px;
  margin-bottom: 20px;  
`;

export const FormFieldConteiner = styled.div`
  position:relative;
`;

export const FormFieldLabel = styled.label`
  position:absolute;
  top: 16px;
  left: 14px;
  color: ${color.gryeLight};
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 12px;
  padding: 16px 14px 16px 65px;
  
  outline: none;
  color: ${color.whitePrimary};
  background: ${color.gryeBlack};
  padding-left: ${(props) => props.paddindleft || '86px'};
  border: 1px solid	${(props) => (props.error === "true" ? "red" : "rgba(18, 20, 23, 0.1)")};
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: -5px; 
  padding:  5px 10px 10px;
`;

//////////////////////////////////////////////

export const StartWorkoutBlock = styled.div`
  width: 313px;
  height: 259px;
  border-radius: 12px;

  background: ${color.gryeBlack};

  padding: 20px;
`
export const StartWorkoutTitle = styled.h2`
  font-size: 20px;
font-weight: 700;
line-height: 1;

margin-bottom: 20px;
`


export const Arguments = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`
export const SeriaNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 700;  
  color: ${color.blackLight};
  background: ${color.whitePrimary};
  
`




export const LinkToHome = styled(NavLink)`
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


export const LinkTextToHome = styled.p`
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



