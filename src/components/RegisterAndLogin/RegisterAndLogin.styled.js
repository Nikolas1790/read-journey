import color from 'common/GlobalColers'
import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center ;
  padding: 32px;
`
export const FormBlock = styled.div`
  width:600px;
  height: 736px; 
  background: ${color.blackLight};
  border-radius: 30px;
  padding: 40px 64px;
`

///////////////////////////////////////////////////////////
export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 308px;
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
  border: 1px solid	${(props) => (props.error === "true" ? "red" : "rgba(18, 20, 23, 0.1)")};
  border-radius: 12px;
  margin-bottom: 14px;
  padding: 16px 14px 16px 65px;
  padding-left: ${(props) => (props.email ? '53px' : '65px')};
  outline: none;
  color: ${color.whitePrimary};
  background: ${color.gryeBlack};
`;

export const FormFieldPassvordConteiner = styled.div`
  position: relative;  
`;

export const FormFieldPassvord = styled(Field)`
  width: 100%;
  height: 50px;
  border: 1px solid	${(props) => (props.error === "true" ? "red" : "rgba(18, 20, 23, 0.1)")};
  border-radius: 12px;
  padding:  16px 14px 16px 86px;
  outline: none;
  color: ${color.whitePrimary};
  background: ${color.gryeBlack};
`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 17px;
  right: 17px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;
`;

//////////////////////////////////////////////////////////////////////
export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: -20px; 
  padding:  5px 10px 10px;
`;

export const ErrorMessagePassword = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: -5px; 
  padding:  5px 10px 10px;
`;

// export const EmailErrorMessage = styled.div`
//   color: red;
//   font-size: 14px;
//   margin-top: -20px  ; 
//   padding:  5px 10px 10px;
// `;