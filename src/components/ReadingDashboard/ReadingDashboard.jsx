import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ErrorMessageStyled, FormField, FormFieldConteiner, FormFieldLabel, FormFields} from '../LibraryDashoard/LibraryDashoard.styled';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import {  BtnInfReading, BtnInfSvg, DayHeaderConteiner, DayHeaderData, DayTotalPages, DellBtn, DiaryHeaderConteiner, DiaryInfConteiner, DiarySvgConteiner, DiaryTitle, Forma, GreenBlock, IconsBlock, MinutesPercentBlock, PageHour, PagePercentBlock, PagesRead, Percent, PercentTitle, ResultsBlock, SquareConteiner, SquareInteriorConteiner, StatBlock, StatText, Text } from './ReadingDashboard.styled';
import sprite from '../../img/ico-sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { bookReadingInf, readingDell, readingStart, readingStop } from '../../redux/books/operations';
import { useEffect, useState } from 'react';
import DashboardProgress from 'components/DashboardProgress/DashboardProgress';
import { selectInfoCurrentBook, selectReadBook } from '../../redux/books/selector';
import Loader from 'components/Loader/Loader';
import {CircleProgress} from 'react-gradient-progress';

const initialValues = {
  page: '',
};

const schema = Yup.object({
  page: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits')
  .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

export default function ReadingDashboard(selectedBook) {
  const dailyReadings = {};
  let totalReadInBook = 0;

  const [read, setRead] = useState(false);
  const dispatch = useDispatch();
  const InfoAboutBook =useSelector(selectInfoCurrentBook);
  const [diaryStat, setDiaryStat] = useState(false);

  const ReadBook =useSelector(selectReadBook);  
    useEffect(() =>{
      if(selectedBook.selectedBook) dispatch(bookReadingInf(selectedBook.selectedBook))
    }, [ selectedBook.selectedBook, read, dispatch, ReadBook]);


  // Переберите массив прогресса и распределите данные по датам
  if(InfoAboutBook?.progress?.length > 0 ){
    InfoAboutBook?.progress.forEach(entry => {
      const date = new Date(entry.finishReading).toLocaleDateString();
  
      if (!dailyReadings[date]) {
        dailyReadings[date] = [];
      }  
      const startReadingTime = new Date(entry.startReading).getTime();
      const finishReadingTime = new Date(entry.finishReading).getTime();
      const readingDurationMinutes = (finishReadingTime - startReadingTime) / (1000 * 60);

       dailyReadings[date].push({
        id: entry._id,
        startPage: entry.startPage,
        finishPage: entry.finishPage,
        totalPage: InfoAboutBook.totalPages,
        readingDuration: Math.round(readingDurationMinutes),
        totalRead: entry.finishPage-entry.startPage,
        percent: parseFloat(((100 * (entry.finishPage - entry.startPage)) / InfoAboutBook.totalPages).toFixed(1)),
      });
      totalReadInBook += entry.finishPage - entry.startPage;
    });
  }
// console.log(InfoAboutBook)

// console.log(totalReadInBook)

  const handleSubmit = (e) => {   
    // console.log(e)
    const requestData = {
      id: selectedBook.selectedBook,
      page: e.page 
    }; 

    if (e.page) {
      if(!read){
        dispatch(readingStart(requestData))
        setRead(true)
      }
      if(read){
        dispatch(readingStop(requestData))
        setRead(false)
      }
    };
  }

  const handleDellTrash = (e) => {   
    const res = {
      bookId: InfoAboutBook._id,
      readingId: e,
    }
    // console.log(e)
    dispatch(readingDell(res))
  }

  const handleDiaryStatistic = (e) => {   
    if(e) setDiaryStat(false)
    if(!e) setDiaryStat(true)

    // console.log("true")
    // setDiaryStat(true)
  }

  const roundToTwoDecimalPlaces = () => Math.min((Math.round(totalReadInBook * 100) / InfoAboutBook.totalPages).toFixed(2), 100);
console.log(roundToTwoDecimalPlaces())
  return (  
    <Dashboard> 
      <Forma>
        <FilterTitle>Start page:</FilterTitle>
        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

          {({  errors,touched }) => (
            <Form>
              <FormFields>  
                 <FormFieldConteiner>
                  <FormFieldLabel htmlFor="page">Pages number:</FormFieldLabel>
                  <FormField id="page" name="page" type="page" placeholder="0" paddindleft="111px" error={errors.page && touched.page ? "true" : "false" } />  
                    {/* {console.log(errors)}            */}
                  <ErrorMessageStyled name="page" component='div' />   

                </FormFieldConteiner>            
              </FormFields>       
              <CustomButton label={read ? "To stop" : "To start"} onClick={handleSubmit} width="114px" />             
            </Form>
          )}
        </Formik>
      </Forma>
      <div>
      { !read && InfoAboutBook?.progress?.length === 0 && <DashboardProgress />}

      { InfoAboutBook?.progress?.length > 0 &&  <div>
          <DiaryHeaderConteiner>
            <DiaryTitle>{diaryStat ? 'Statistic' : 'Diary' }</DiaryTitle>
          
            <DiarySvgConteiner>
              <BtnInfReading onClick={() => handleDiaryStatistic(true)} >
                <BtnInfSvg width={20} height={20}  >
                  <use href={`${sprite}#icon-hourglass`} />
                </BtnInfSvg> 
              </BtnInfReading>
              <BtnInfReading onClick={() => handleDiaryStatistic(false)}>
                <svg width={20} height={20}>
                  <use href={`${sprite}#icon-pie-chart`} />
                </svg>  
              </BtnInfReading>
            </DiarySvgConteiner>
          </DiaryHeaderConteiner>




          
          { diaryStat ? (

            <>
              <StatText>Each page, each chapter is a new round of knowledge, a new step towards understanding. By rewriting statistics, we create our own reading history.</StatText>
              <StatBlock>
              <CircleProgress percentage={roundToTwoDecimalPlaces() || 0} strokeWidth={12} width={189} secondaryColor={"#1F1F1F"} primaryColor={['#30B94D', '#30B94D']} fontSize={'20'}  />
                {/* <StatPercentBlock >
                  <div>
                    <p>100%</p>
                  </div>
                </StatPercentBlock> */}
                <PagePercentBlock>
                  <GreenBlock />
                  <div>
                    <PercentTitle>{roundToTwoDecimalPlaces() || 0} %</PercentTitle>
                    <PagesRead>{totalReadInBook} pages read</PagesRead>
                  </div>
                </PagePercentBlock>


  




              </StatBlock>

            </>
          ) : ( 
          <DiaryInfConteiner>
            {Object.entries(dailyReadings).map(([date, dailyReadingArray]) => {
              // Проверка, что date не равно 'Invalid Date'
              
              if (date !== 'Invalid Date') {
                // Вычисляем общее количество прочитанных страниц за день
                const totalReadForDay = dailyReadingArray.reduce((total, dailyReading) => total + dailyReading.totalRead, 0);
                // console.log(totalReadForDay)
                return (
                  <li key={date}>
                    <DayHeaderConteiner>
                      <SquareConteiner>
                        <SquareInteriorConteiner />
                        {/* <LineConteiner /> */}
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
                              <svg width={59} height={25}>
                                <use href={`${sprite}#icon-block`} />
                              </svg> 
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
                // Вернуть null или что-то другое, если 'Invalid Date'
                return <Loader  key="1"/>;
              }
            })}
          </DiaryInfConteiner>)
          }

        


        </div>
}
      </div>
    </Dashboard> 
  );
}
  