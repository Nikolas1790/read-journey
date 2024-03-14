import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ErrorMessageStyled, FormField, FormFieldConteiner, FormFieldLabel, FormFields} from '../LibraryDashoard/LibraryDashoard.styled';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import {  BtnInfReading, BtnInfSvg, DashboardConteiner, DayHeaderConteiner, DayHeaderData, DayTotalPages, DellBtn, DiaryHeaderConteiner, DiaryInfConteiner, DiarySvgConteiner, DiaryTitle, Forma, GreenBlock, IconsBlock, MinutesPercentBlock, PageHour, PagePercentBlock, PagesRead, Percent, PercentTitle, ResultsBlock, SquareConteiner, SquareInteriorConteiner, StatBlock, StatPercentBlock, StatText, Text, TextOneHundredPercent } from './ReadingDashboard.styled';
import sprite from '../../img/ico-sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { bookReadingInf, readingDell, readingStart, readingStop } from '../../redux/books/operations';
import { useEffect, useState } from 'react';
import DashboardProgress from 'components/DashboardProgress/DashboardProgress';
import { selectInfoCurrentBook, selectReadBook } from '../../redux/books/selector';
import Loader from 'components/Loader/Loader';
import { Circle } from 'rc-progress';
import PortalModal from 'components/PortalModal/PortalModal';
import ModalBookIsRead from 'components/ModalBookWindow/ModalBookIsRead';

const initialValues = {
  page: '',
};

const schema = Yup.object({
  page: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits')
  .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

export default function ReadingDashboard({selectedBook, onReadChange}) {
  const dailyReadings = {};
  let totalReadInBook = 0;
  const [isRendered, setIsRendered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [read, setRead] = useState(false);
  const [diaryStat, setDiaryStat] = useState(false);

  const dispatch = useDispatch();
  const InfoAboutBook =useSelector(selectInfoCurrentBook);
  const ReadBook =useSelector(selectReadBook);  

  useEffect(() => {
    setIsRendered(true);
  }, [isRendered]);

    useEffect(() =>{
      if(selectedBook) dispatch(bookReadingInf(selectedBook))
    }, [ selectedBook, dispatch, ReadBook]);

    useEffect(() => {
      // Подсчет после каждого обновления progress
      const timer = setTimeout(() => {
      const totalReadPages = InfoAboutBook?.progress?.reduce((total, entry) => {
        const startPage = Number(entry.startPage);
        const finishPage = Number(entry.finishPage);
        if (!isNaN(startPage) && !isNaN(finishPage)) {
          return total + (finishPage - startPage);
        }
        return total;
      }, 0);
    
      if (totalReadPages >= InfoAboutBook?.totalPages) {
        setModalOpen(true);
      }
    
      
    }, 250);
    return () => clearTimeout(timer); 
    }, [InfoAboutBook?.progress, InfoAboutBook?.totalPages]);
    
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

      const totalRead = entry.finishPage - entry.startPage;

      // Проверка, является ли totalRead числом
      if (!isNaN(totalRead)) {
        dailyReadings[date].push({
          id: entry._id,
          startPage: entry.startPage,
          finishPage: entry.finishPage,
          totalPage: InfoAboutBook.totalPages,
          readingDuration: Math.round(readingDurationMinutes),
          totalRead: totalRead,
          percent: parseFloat(((100 * totalRead) / InfoAboutBook.totalPages).toFixed(1)),
        });
        totalReadInBook += totalRead;
      }
    });
  }
  
  const handleSubmit = (e) => { 
    const requestData = {
      id: selectedBook,
      page: e.page 
    }; 
    if (e.page) {
      if(!read){
        dispatch(readingStart(requestData))
        setRead(true)
        onReadChange(read)
      }
      if(read){
        dispatch(readingStop(requestData))
        setRead(false)
        onReadChange(read)
      }
    };
    e.target.blur();
  }

  const handleDellTrash = (e) => {   
    const res = {
      bookId: InfoAboutBook._id,
      readingId: e,
    }
    dispatch(readingDell(res))
  }

  const handleDiaryStatistic = (e) => {   
    if(e) setDiaryStat(false)
    if(!e) setDiaryStat(true)
  }

  const roundToTwoDecimalPlaces = () => {
    const percentage = Math.min((Math.round(totalReadInBook * 100) / InfoAboutBook.totalPages).toFixed(2), 100);
    return percentage;
  };
  return (  
    <Dashboard> 
      <DashboardConteiner>
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
                <BtnInfSvg width={20} height={20} diarystat={diaryStat ?  "true" : "" } >
                  <use href={`${sprite}#icon-hourglass`} />
                </BtnInfSvg> 
              </BtnInfReading>
              <BtnInfReading onClick={() => handleDiaryStatistic(false)}>
                <BtnInfSvg width={20} height={20} diarystat={diaryStat  ? "" : "true" } >
                  <use href={`${sprite}#icon-pie-chart`} />
                </BtnInfSvg>  
              </BtnInfReading>
            </DiarySvgConteiner>
          </DiaryHeaderConteiner>

          { diaryStat ? (
              <>
                <StatText>Each page, each chapter is a new round of knowledge, a new step towards understanding. By rewriting statistics, we create our own reading history.</StatText>
                <StatBlock>
                <StatPercentBlock>
                  <Circle percent={roundToTwoDecimalPlaces() || 0} strokeWidth={9} width={168} strokeColor={'#30B94D'} trailWidth={9} trailColor={"#1F1F1F"} />
                  <TextOneHundredPercent>100 %</TextOneHundredPercent>
                </StatPercentBlock>
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
            {Object.entries(dailyReadings)
              .sort(([dateA], [dateB]) => {
                // Преобразование строк дат в формат, который можно сравнивать
                const [dayA, monthA, yearA] = dateA.split(".");
                const [dayB, monthB, yearB] = dateB.split(".");
                const dateObjA = new Date(`${yearA}-${monthA}-${dayA}`);
                const dateObjB = new Date(`${yearB}-${monthB}-${dayB}`);
                return dateObjB - dateObjA; // Сортировка по убыванию
              })
              .map(([date, dailyReadingArray], index) => {

              // Проверка, что date не равно 'Invalid Date'
              if (date !== 'Invalid Date') {
                // Вычисляем общее количество прочитанных страниц за день
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
                return <Loader  key="1"/>;
              }
            })}
          </DiaryInfConteiner>)
          }
        </div>
      }
      </div>

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <ModalBookIsRead  closeModals={() => setModalOpen()} />
      </PortalModal>
      </DashboardConteiner>
    </Dashboard> 
  );
}
  