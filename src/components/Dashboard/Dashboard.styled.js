import color from 'common/GlobalColers'
import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components'

export const DashboardBlock = styled.div`
  width: 353px;
  height: 651px;
  border-radius: 30px;
  background: ${color.blackLight};
  padding: 40px 20px 20px 20px;
;`

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
  border: 1px solid	${(props) => (props.error === "true" ? color.focusColor : "rgba(18, 20, 23, 0.1)")};
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: 10px;
  color: ${color.focusColor};
  padding: 4px 0px 0px 14px;
`;