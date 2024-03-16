import color from 'common/GlobalColers'
import { Circle } from 'rc-progress'
import styled from 'styled-components'

// export const DashboardConteiner = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
// `

export const Forma = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`

////////////////////////////////////////////////////////////////////////////////////
export const DiaryHeaderConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const DiaryTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const DiarySvgConteiner = styled.div`
  display: flex;
  gap: 8px;
`

export const BtnInfReading = styled.button`
  background: transparent;  
` 

export const BtnInfSvg = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${props => (props.diarystat ? color.gryeLight : color.whitePrimary)};
  stroke: ${props => (props.diarystat ? color.gryeLight : color.whitePrimary)};

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
` 
export const Bt = styled.use`
  /* color: red !important; */
` 
////////////////////////////////////////////////////////////////////
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
  width: 295px;
  height: 211px;
  background: ${color.gryeBlack};
  border-radius: 12px;
  padding: 20px;

  @media (min-width: 768px) {
    width: 321px;
    height: 252px;
    padding: 28px;
  }
  @media (min-width: 1440px) {
    width: 313px;
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

////////////////////////////////////////////////////////////////////////
export const DiaryInfConteiner = styled.ul`
  width: 295px;
  height: 211px;  
  background: ${color.gryeBlack};
  border-radius: 12px;
  padding: 20px;
  /* position: relative;  */

  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: 321px;
    height: 252px;  
  }
  @media (min-width: 1440px) {
    width: 313px;
    height: 373px;  
  }
`


export const DiaryConteiner = styled.div`
  position: relative; 

  &::before {
  content: "";
  position: absolute;
  top: 20px; 
  left: 27px;
  width: 2px; 
  height: calc(100% - 20px); 
  background: linear-gradient(
    to bottom ,
    transparent,
    ${color.blackLight} 15px 
  );
  @media (min-width: 768px) {
    left: 29px;
  }
  @media (min-width: 1440px) {
    left: 30px;
    height: calc(100% - 40px); 
  }
}
`

export const DayHeaderConteiner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px; 
  @media (min-width: 1440px) {
    margin-bottom: 28px; 
  }
`

export const SquareConteiner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;  
  background: ${({ first }) => first === "true" ?  color.whitePrimary : color.gryeLight};
  border-radius: 4px;
  margin-right: 9px;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px; 
    margin-right: 10px;
  }
`
export const SquareInteriorConteiner = styled.div`
  width: 8px;
  height: 8px;  
  background: ${({ first }) => first === "true" ?  color.blackBackground : color.blackLight};
  border-radius: 2px;
  @media (min-width: 768px) {
    width: 12px;
    height: 12px; 
  }
`

export const DayHeaderData = styled.h5`
  font-size: 12px;
  font-weight: 700;
  margin-right: 107px;
  /* letter-spacing: 0.24px; */
  @media (min-width: 768px) {
    font-size: 16px;
    margin-right: 94px;
  }
  @media (min-width: 1440px) {
    margin-right: 86px;
  }
`
export const DayTotalPages = styled.p`
  font-size: 12px;  
  color: ${color.gryeLight};
  letter-spacing: -0.28;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const ResultsBlock = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
  @media (min-width: 768px) {
    margin-bottom: 14px; 
  }
  @media (min-width: 1440px) {
    margin-bottom: 22px; 
  }
`

export const MinutesPercentBlock = styled.div`
  margin-left: 25px;
  @media (min-width: 768px) {
    margin-left: 30px;
  }
  @media (min-width: 1440px) {
  }
`
export const Percent = styled.p`
  font-size: 14px;
  line-height: 1;
  margin-bottom: 4px;
  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
  @media (min-width: 1440px) {
  }
`
export const Text = styled.p`
  font-size: 10px;
  color: ${color.gryeLight};
  @media (min-width: 768px) {
    font-size: 12px;
  }
`

export const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 7px;
  @media (min-width: 768px) {
    gap: 8px;
  }
`

export const SvgSchedule = styled.svg`
  width: 43px;
  height: 17px;
  @media (min-width: 768px) {
    width: 59px;
    height: 25px;
  }
  @media (min-width: 1440px) {
  }
`




export const DellBtn = styled.button`
  background: transparent;
  stroke:  ${color.gryeLight};
  transition: stroke 0.3s ease; /* Добавляем плавный переход */

  &:hover {
    stroke: ${color.focusColor};
  }
  &:focus {
    outline: none; /* Убираем стандартную обводку фокуса */
  }
`

export const PageHour = styled.p`
  max-width: 43px;
  text-align: center;
  font-size: 10px;
  color: ${color.gryeLight};

  @media (min-width: 768px) {
    font-size: 12px;
    max-width: 59px;
  }
`