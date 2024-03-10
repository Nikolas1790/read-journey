import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ErrorMessageStyled, FormField, FormFieldConteiner, FormFieldLabel, FormFields} from '../LibraryDashoard/LibraryDashoard.styled';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import { DiaryHeaderConteiner, DiaryInfConteiner, DiarySvgConteiner, DiaryTitle, Forma } from './ReadingDashboard.styled';
import sprite from '../../img/sprite.svg';
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
  const InfoAboutBook =useSelector(selectInfoCurrentBook)

  const ReadBook =useSelector(selectReadBook)

  console.log(InfoAboutBook)
    useEffect(() =>{
      if(selectedBook.selectedBook) dispatch(bookReadingInf(selectedBook.selectedBook))
    }, [ selectedBook.selectedBook, read, dispatch, ReadBook])

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
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-hourglass`} />
          </svg>  
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-pie-chart`} />
          </svg>  
        </DiarySvgConteiner>
        </DiaryHeaderConteiner>
        <DiaryInfConteiner>
          
        </DiaryInfConteiner>
      </div>

      </div>
    </Dashboard> 
  );
}
  