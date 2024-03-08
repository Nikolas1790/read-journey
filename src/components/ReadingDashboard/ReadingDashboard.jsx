import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ErrorMessageStyled, FormField, FormFieldConteiner, FormFieldLabel, FormFields} from '../LibraryDashoard/LibraryDashoard.styled';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import { Forma, ProgressText, ProgressTitle, StarPicture } from './ReadingDashboard.styled';

import star from '../../img/star/star.png';
import star2x from '../../img/star/srar@2x.png';
import { useDispatch } from 'react-redux';
import { readingStart } from '../../redux/books/operations';
import { useState } from 'react';


const initialValues = {
  page: '',
};

const schema = Yup.object({
  page: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits')
  .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

export default function ReadingDashboard(selectedBook) {
  
  const dispatch = useDispatch();
  const [pageValue, setPageValue] = useState('');

  const handleSubmit = () => {   
    if (pageValue !== '') {
      const requestData = {
        id: selectedBook.selectedBook,
        page: pageValue
      }; 
      dispatch(readingStart(requestData));
    } else {
      console.error('Page value is empty');
    }
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
                  <FormField id="page" name="page" type="page" placeholder="0" paddindleft="111px" error={errors.page && touched.page ? "true" : "false" } 
                    value={pageValue} onChange={(e) => setPageValue(e.target.value)}/>             
                  <ErrorMessageStyled name="page" component='div' />   
                </FormFieldConteiner>            
              </FormFields>       
              <CustomButton label="To start" onClick={handleSubmit} width="114px" />             
            </Form>
          )}
        </Formik>
      </Forma>

      <div>
        <ProgressTitle>Progress</ProgressTitle>
        <ProgressText>Here you will see when and how much you read. To record, click on the red button above.</ProgressText>
        <div>
          <StarPicture>
            <source srcSet={star2x} media="(min-resolution: 192dpi)" />        
            <img src={star} alt="stack books" width={50} />
          </StarPicture> 
        </div>
      </div>
    </Dashboard> 
  );
}
  