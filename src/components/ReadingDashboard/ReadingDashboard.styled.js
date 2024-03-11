import color from 'common/GlobalColers'
import styled from 'styled-components'


export const Forma = styled.div`
  margin-bottom: 40px;
`

// export const StarPicture = styled.picture`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   background: ${color.blackWhite};
//   margin: 0 auto;
// `

/////////////////////////////////////////////////////////


// export const ProgressTitle = styled.h4`
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 14px;
// `

// export const ProgressText = styled.p`
//   color: ${color.gryeLight};
//   margin-bottom: 60px;
// `

export const DiaryTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
`
////////////////////////////////////////////////////////////////////////////////////

export const DiaryHeaderConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const DiarySvgConteiner = styled.div`
  display: flex;
  gap: 8px;

`

export const BtnInfReading = styled.button`
  background: transparent;
  
` 

export const BtnInfSvg = styled.svg`
  /* background: transparent; */
  /* color: red !important; */
  /* background: yellow; */
  fill: red ;
  stroke: green ;
` 
export const Bt = styled.use`
  /* color: red !important; */
  /* background: yellow; */
  /* fill: red ; */
  /* stroke: green ; */
` 

////////////////////////////////////////////////////////////////////////
export const DiaryInfConteiner = styled.ul`
  width: 313px;
  height: 373px;  
  background: ${color.gryeBlack};
  border-radius: 12px;
  padding: 20px;

  /* height: 523px; */
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const DayHeaderConteiner = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 28px; 
`

export const SquareConteiner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;  
  background: ${color.whitePrimary};
  border-radius: 4px;
  margin-right: 10px;
`
export const SquareInteriorConteiner = styled.div`
  width: 12px;
  height: 12px;  
  background: ${color.blackBackground};
  border-radius: 2px;

`

// export const LineConteiner = styled.div`
//   position: absolute;
//   top: 20px;
//   width: 4px;
//   height: 100%;
//   background: ${color.green};
//   border-radius: 4px;
// `











export const DayHeaderData = styled.h5`
  font-size: 16px;
  font-weight: 700;
  margin-right: 86px;
`
export const DayTotalPages = styled.p`
  color: ${color.gryeLight};
`

export const ResultsBlock = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;

`

export const MinutesPercentBlock = styled.div`
  margin-left: 30px;
`
export const Percent = styled.p`
  font-size: 20px;
  line-height: 1;
  margin-bottom: 8px;
`
export const Text = styled.p`
  font-size: 12px;
  color: ${color.gryeLight};
`

export const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 7px;
`

export const DellBtn = styled.button`
 background: transparent;
 transition: color 0.3s ease; /* Добавляем плавный переход */

&:hover {
  fill: red;
  stroke: red;
  color: red; /* Цвет при наведении */
}

&:focus {
  outline: none; /* Убираем стандартную обводку фокуса */
  color: blue; /* Цвет при фокусе */
}
`

export const PageHour = styled.p`
  max-width: 59px;
  text-align: center;
  font-size: 12px;
  color: ${color.gryeLight};
`

