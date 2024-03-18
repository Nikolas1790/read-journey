import color from 'common/GlobalColers'
import { Circle } from 'rc-progress'
import styled from 'styled-components'

export const StatText = styled.p`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    color: ${color.gryeLight};
    margin-bottom: 20px; 
  }
`
export const StatBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 295px;
  height: 211px;
  background: ${color.gryeBlack};
  border-radius: 12px;
  padding: 20px;

  @media (min-width: 768px) {
    min-width: 321px;
    height: 252px;
    padding: 28px;
  }
  @media (min-width: 1440px) {
    min-width: 313px;
    height: 281px;    
    padding:   30px 20px 20px 20px; 
  }
`
export const StatPercentBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content:center;
  margin-bottom: 20px;
`

export const CircleStyle = styled(Circle)`
  width: 116px;   

  @media (min-width: 768px) {
    width: 138px; 
  }
  @media (min-width: 1440px) {
    width: 168px;         
  }
`

export const TextOneHundredPercent = styled.p`
  position: absolute;
  z-index: 1;
  font-size: 18px;
  font-weight: 700;

  @media (min-width: 768px){
    font-size: 20px;
  }
`
export const PagePercentBlock = styled.div`
  display: flex;
`

export const GreenBlock = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px; 
  background: ${color.green};
  margin-right: 15px;
`
export const PercentTitle = styled.h6`
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 8px;

  @media (min-width: 768px){
    font-size: 20px;
  }
`

export const PagesRead = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${color.gryeLight};

  @media (min-width: 768px){
    font-size: 12px;
  }
`