import {  BtnInfReading, BtnInfSvg, DiaryHeaderConteiner, DiarySvgConteiner, DiaryTitle} from './DiaryHeader.styled';
import sprite from '../../img/sprite.svg';

export default function DiaryHeader({diaryStat, setDiaryStat}) {

  const handleDiaryStatistic = (e) => {   
    if(e) setDiaryStat(false)
    if(!e) setDiaryStat(true)
  }

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  
  return (  
    <DiaryHeaderConteiner>
      <DiaryTitle>{diaryStat ? 'Statistic' : 'Diary' }</DiaryTitle>          
      <DiarySvgConteiner>
        <BtnInfReading onClick={() => handleDiaryStatistic(true)} >
          <BtnInfSvg diarystat={diaryStat ?  "true" : "" } >
            <use href={`${sprite}#icon-hourglass`} />
          </BtnInfSvg> 
        </BtnInfReading>
        <BtnInfReading onClick={() => handleDiaryStatistic(false)}>
          <BtnInfSvg diarystat={diaryStat  ? "" : "true" } >
            <use href={`${sprite}#icon-pie-chart`} />
          </BtnInfSvg>  
        </BtnInfReading>
      </DiarySvgConteiner>
    </DiaryHeaderConteiner>
  );
}  