import color from 'common/GlobalColers'
import styled from 'styled-components'

export const CustomBtn = styled.button`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '42px'};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 2%;

  border: 1px solid ${color.whiteLightTranslucent};
  border-radius: 30px;
  background: transparent;

  transition: color 0.3s linear, background 0.3s linear; /* добавленный transition для плавных изменений */

  &:hover,
  &:focus {
    color: ${color.blackLight};
    background: ${color.whitePrimary};  
  }
`