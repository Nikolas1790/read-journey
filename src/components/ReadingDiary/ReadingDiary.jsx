import { DayHeaderConteiner, DayHeaderData, DayTotalPages, DellBtn, DiaryConteiner, DiaryInfConteiner, IconsBlock, MinutesPercentBlock, PageHour, Percent, ResultsBlock, SquareConteiner, SquareInteriorConteiner, SvgSchedule, Text } from './ReadingDiary.styled';
import sprite from '../../img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { readingDell } from '../../redux/books/operations';
import { selectInfoCurrentBook } from '../../redux/books/selector';
import Loader from 'components/Loader/Loader';

export default function ReadingDiary({dailyReadings}) {
  const dispatch = useDispatch();
  const InfoAboutBook =useSelector(selectInfoCurrentBook);

  const handleDellTrash = (e) => {   
    const res = {
      bookId: InfoAboutBook._id,
      readingId: e,
    }
    dispatch(readingDell(res))
  }

  return (  
    <DiaryConteiner>
      <DiaryInfConteiner>
        {Object.entries(dailyReadings)
          .sort(([dateA], [dateB]) => {
            // Converting date strings to a format that can be compared
            const [dayA, monthA, yearA] = dateA.split(".");
            const [dayB, monthB, yearB] = dateB.split(".");
            const dateObjA = new Date(`${yearA}-${monthA}-${dayA}`);
            const dateObjB = new Date(`${yearB}-${monthB}-${dayB}`);
            return dateObjB - dateObjA;
          })
          .map(([date, dailyReadingArray], index) => {
            if (date !== 'Invalid Date') {
            // Calculate the total number of pages read per day
            const totalReadForDay = dailyReadingArray.reduce((total, dailyReading) => total + dailyReading.totalRead, 0);
            return (
              <li key={date}>
                <DayHeaderConteiner>
                  <SquareConteiner first={index === 0 ? "true" : "false"} >
                    <SquareInteriorConteiner first={index === 0 ? "true" : "false"} />
                  </SquareConteiner>
                  <DayHeaderData>{date}</DayHeaderData>
                  <DayTotalPages>{totalReadForDay} pages</DayTotalPages>
                </DayHeaderConteiner>
                <ul>
                  {dailyReadingArray.map(dailyReading => (
                    <ResultsBlock key={dailyReading.id}>
                      <MinutesPercentBlock>
                        <Percent>{dailyReading.percent}%</Percent>
                        <Text>{dailyReading.readingDuration} minutes</Text>
                      </MinutesPercentBlock>
                  
                      <div>
                        <IconsBlock>
                          <SvgSchedule >
                            <use href={`${sprite}#icon-block`} />
                          </SvgSchedule> 
                          <DellBtn onClick={() =>handleDellTrash(dailyReading.id)}>
                            <svg width={14} height={14}>
                              <use href={`${sprite}#icon-trash`} />
                            </svg> 
                          </DellBtn>
                        </IconsBlock>
                        <PageHour>{dailyReading.totalRead} pages per hour</PageHour>
                      </div>
                    </ResultsBlock>
                  ))}
                </ul>
              </li>
            );
          } else {
            return <Loader  key="1"/>;
          }
        })}
      </DiaryInfConteiner>
    </DiaryConteiner>
  )
}  