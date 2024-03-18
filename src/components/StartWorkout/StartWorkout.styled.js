import color from 'common/GlobalColers'
import styled from 'styled-components'

export const StartWorkoutBlock = styled.div`
  width: 100%;
  max-width: 295px;
  min-height: 244px;
  border-radius: 12px;

  background: ${color.gryeBlack};
  padding: 20px;

  @media (min-width: 768px) {
    max-width: 313px;
    height: 272px;
  }
  @media (min-width: 1440px) {
  margin-bottom: 20px;
  }
`
export const StartWorkoutTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`
export const ArgumentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 26px;
  }
`
export const Arguments = styled.div`
  display: flex;
  gap: 12px;
`
export const SeriaNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;  
  color: ${color.blackLight};
  background: ${color.whitePrimary};  

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`
export const TextOne = styled.p`
  width: 190px;  
`
export const TextTwo = styled.p`
  width: 200px;  
`
export const TextSpan = styled.span`
 color: ${color.gryeLight};  
`