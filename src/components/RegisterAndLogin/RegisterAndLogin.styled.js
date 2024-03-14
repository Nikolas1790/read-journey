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
export const FormConteiner = styled.div`
  display:flex;
  flex-direction: column;
  gap: 14px;
`;

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
  padding: 16px 14px 16px 65px;
  padding-left: ${(props) => props.paddingleft || '65px'};
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
  font-size: 10px;
  color: red;
  padding: 4px 0px 0px 14px;
`;
export const SecureMessage = styled.p`
  font-size: 10px;
  color: ${color.green};
  padding: 4px 0px 0px 14px;
`;