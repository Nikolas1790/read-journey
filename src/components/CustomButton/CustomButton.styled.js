import styled from 'styled-components'


export const CustomBtn = styled.button`
   width: ${(props) => props.width || 'auto'};
  height: 42px;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 2%;

  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;

  background: transparent;

  /* padding: 12px 28px; */
`