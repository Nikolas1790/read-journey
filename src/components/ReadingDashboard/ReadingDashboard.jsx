import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ErrorMessageStyled, FormField, FormFieldConteiner, FormFieldLabel, FormFields} from '../Dashboard/Dashboard.styled';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import { Forma } from './ReadingDashboard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { bookReadingInf, readingStart, readingStop } from '../../redux/books/operations';
import { useEffect, useState } from 'react';
import DashboardProgress from 'components/DashboardProgress/DashboardProgress';
import { selectInfoCurrentBook, selectReadBook } from '../../redux/books/selector';
import PortalModal from 'components/PortalModal/PortalModal';
import ModalBookIsRead from 'components/ModalBookWindow/ModalBookIsRead';
import ReadingDiary from 'components/ReadingDiary/ReadingDiary';
import ReadingStatistics from 'components/ReadingStatistics/ReadingStatistics';
import DiaryHeader from 'components/DiaryHeader/DiaryHeader';

const initialValues = {
  page: '',
};

const schema = Yup.object({
  page: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits')
  .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

export default function ReadingDashboard({selectedBook, onReadChange}) {
  const dailyReadings = {};
  let totalReadPages = 0;
  const [isRendered, setIsRendered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [read, setRead] = useState(false);
  const [diaryStat, setDiaryStat] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

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
    const timer = setTimeout(() => {
      if(activeModal) {
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
      }    
    }, 200);
    return () => clearTimeout(timer); 
  }, [InfoAboutBook?.progress, InfoAboutBook?.totalPages, activeModal]);
    
  
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
        totalReadPages += totalRead;
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
        setActiveModal(false)
        dispatch(readingStart(requestData))
        setRead(true)
        onReadChange(read)
      }
      if(read){
        setActiveModal(true)
        dispatch(readingStop(requestData))
        setRead(false)
        onReadChange(read)
      }
    };
    e.target.blur();
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
                  <ErrorMessageStyled name="page" component='div' />   

                </FormFieldConteiner>            
              </FormFields>       
              <CustomButton label={read ? "To stop" : "To start"} onClick={handleSubmit} />             
            </Form>
          )}
        </Formik>
      </Forma>

      <div>
        { !read && InfoAboutBook?.progress?.length === 0 && <DashboardProgress />}
        { InfoAboutBook?.progress?.length > 0 &&  (
          <>
            <DiaryHeader diaryStat={diaryStat} setDiaryStat={setDiaryStat} />
            { diaryStat ? <ReadingStatistics totalReadPages={totalReadPages}/> : <ReadingDiary dailyReadings={dailyReadings}/>}
          </>
        )}
      </div>

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <ModalBookIsRead  closeModals={() => setModalOpen()} />
      </PortalModal>
    </Dashboard> 
  );
}  