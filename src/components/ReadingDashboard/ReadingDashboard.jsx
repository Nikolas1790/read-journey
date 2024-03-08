import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ErrorMessageStyled, FilterTitle, Filters, FormField, FormFieldConteiner, FormFieldLabel, FormFields} from '../LibraryDashoard/LibraryDashoard.styled';


const initialValues = {
  page: '',
};

const schema = Yup.object({
  page: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits')
  .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

export default function ReadingDashboard() {

  const handleSubmit = () => {    
    console.log("submitsssssssssss")
  }
  return (    
      <Filters>
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
              <CustomButton label="To start" onClick={handleSubmit} width="114px" />             
            </Form>
          )}
        </Formik>
      </Filters>


  );
}
  