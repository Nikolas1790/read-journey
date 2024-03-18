import color from 'common/GlobalColers'
import styled from 'styled-components'

export const LogoTitleConteiner = styled.div`
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
` 
export const LogoConteiner = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 108px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;  
  line-height: 1;

  @media (min-width: 768px) {
    width: 444px;
    font-size: 64px;
    line-height: 0.94;
  }
`;

export const TitleSpan = styled.span`
  color: ${color.whiteTranslucent};
`;