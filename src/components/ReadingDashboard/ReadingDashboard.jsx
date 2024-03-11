import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ErrorMessageStyled, FormField, FormFieldConteiner, FormFieldLabel, FormFields} from '../LibraryDashoard/LibraryDashoard.styled';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import {  BtnInfReading, BtnInfSvg, DayHeaderConteiner, DayHeaderData, DayTotalPages, DiaryHeaderConteiner, DiaryInfConteiner, DiarySvgConteiner, DiaryTitle, Forma, IconsBlock, MinutesPercentBlock, PageHour, Percent, ResultsBlock, SquareConteiner, SquareInteriorConteiner, Text } from './ReadingDashboard.styled';
import sprite from '../../img/ico-sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { bookReadingInf, readingStart, readingStop } from '../../redux/books/operations';
import { useEffect, useState } from 'react';
import DashboardProgress from 'components/DashboardProgress/DashboardProgress';
import { selectInfoCurrentBook, selectReadBook } from '../../redux/books/selector';

const initialValues = {
  page: '',
};

const schema = Yup.object({
  page: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits')
  .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

export default function ReadingDashboard(selectedBook) {
  const [read, setRead] = useState(false);
  const dispatch = useDispatch();
  const InfoAboutBook =useSelector(selectInfoCurrentBook);

  const ReadBook =useSelector(selectReadBook);  
    useEffect(() =>{
      if(selectedBook.selectedBook) dispatch(bookReadingInf(selectedBook.selectedBook))
    }, [ selectedBook.selectedBook, read, dispatch, ReadBook]);

  // Создайте объект для хранения прогресса по датам
  const dailyReadings = {};

  // Переберите массив прогресса и распределите данные по датам
  if(InfoAboutBook && InfoAboutBook.progress && InfoAboutBook.progress.length > 0 ){
    InfoAboutBook?.progress.forEach(entry => {
      const date = new Date(entry.finishReading).toLocaleDateString();
  
      if (!dailyReadings[date]) {
        dailyReadings[date] = [];
      }  
      const startReadingTime = new Date(entry.startReading).getTime();
      const finishReadingTime = new Date(entry.finishReading).getTime();
      const readingDurationMinutes = (finishReadingTime - startReadingTime) / (1000 * 60);

       dailyReadings[date].push({
        startPage: entry.startPage,
        finishPage: entry.finishPage,
        totalPage: InfoAboutBook.totalPages,
        readingDuration: Math.round(readingDurationMinutes),
        totalRead: entry.finishPage-entry.startPage,
        percent: parseFloat(((100 * (entry.finishPage - entry.startPage)) / InfoAboutBook.totalPages).toFixed(1)),
      });
    });
  }
// console.log(InfoAboutBook)

console.log(dailyReadings)

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
      { read && <DashboardProgress />}

        <div>
          <DiaryHeaderConteiner>
            <DiaryTitle>Diary</DiaryTitle>
          
            <DiarySvgConteiner>
              <BtnInfReading >
                <BtnInfSvg width={20} height={20}  >
                  <use href={`${sprite}#icon-hourglass`} />
                </BtnInfSvg> 
              </BtnInfReading>
              <BtnInfReading>
                <svg width={20} height={20}>
                  <use href={`${sprite}#icon-pie-chart`} />
                </svg>  
              </BtnInfReading>
            </DiarySvgConteiner>
          </DiaryHeaderConteiner>






















          
          <DiaryInfConteiner>
            {Object.entries(dailyReadings).map(([date, dailyReadingArray]) => {
              // Вычисляем общее количество прочитанных страниц за день
              const totalReadForDay = dailyReadingArray.reduce((total, dailyReading) => total + dailyReading.totalRead, 0);
            
              return (
                <li key={date}>
                  <DayHeaderConteiner>
                    <SquareConteiner>
                      <SquareInteriorConteiner></SquareInteriorConteiner>
                    </SquareConteiner>
                    <DayHeaderData>{date}</DayHeaderData>
                    <DayTotalPages>{totalReadForDay} pages</DayTotalPages>
                  </DayHeaderConteiner>
                  <ul>
                    {dailyReadingArray.map((dailyReading, index) => (
                      <li key={index}>

                        <ResultsBlock>
                          <MinutesPercentBlock>
                            <Percent>{dailyReading.percent}%</Percent>
                            <Text>{dailyReading.readingDuration} minutes</Text>
                          </MinutesPercentBlock>

                          <div>
                            <IconsBlock>
                              <svg width={59} height={25}>
                                <use href={`${sprite}#icon-block`} />
                              </svg> 
                              <svg width={14} height={14}>
                                <use href={`${sprite}#icon-trash`} />
                              </svg> 
                            </IconsBlock>
                            <PageHour>{dailyReading.totalRead} pages per hour</PageHour>
                          </div>
                          
                        </ResultsBlock>
                        
                        
                        
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </DiaryInfConteiner>



        </div>

      </div>
    </Dashboard> 
  );
}
  