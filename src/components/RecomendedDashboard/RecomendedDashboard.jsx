import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { ButtonConteiner, Filters } from './RecomendedDashboard.styled';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle, FormField, FormFieldConteiner, FormFieldLabel, FormFields  } from 'components/Dashboard/Dashboard.styled';
import { fetchBooks } from '../../redux/books/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import StartWorkout from 'components/StartWorkout/StartWorkout';
import Quote from 'components/Quote/Quote';

const initialValues = {
  title: '',
  author: '',
};

const schema = Yup.object({
  title: Yup.string(),
  author: Yup.string(),
});

export default function RecomendedDashboard() {
  const [isRestButtonVisible, setIsRestButtonVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {  
    const { title, author } = e;
    if(title === undefined) return;
    if(title) {
      setIsRestButtonVisible(true);
      dispatch(fetchBooks({ title, author  }))
    } else{
      toast.warn('Please fill out the form')
    } 
    e.target.blur();
  }

  const handleReset = (resetForm) => {
    setIsRestButtonVisible(false);
    resetForm();
    dispatch(fetchBooks({ page: 1, limit: 10  }))
  };

  return (
    <Dashboard>      
      <Filters>
        <FilterTitle>Filters:</FilterTitle>
        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >
          {({ resetForm }) => (
            <Form>
              <FormFields>  
                <FormFieldConteiner>
                  <FormFieldLabel htmlFor="title">Book title:</FormFieldLabel>
                  <FormField id="title" name="title" type="title" placeholder="Enter text" />                
                </FormFieldConteiner>                
                <FormFieldConteiner>
                  <FormFieldLabel htmlFor="author">The author:</FormFieldLabel>
                  <FormField id="author" name="author" type="author" placeholder="Enter text" paddindleft="95px" />                
                </FormFieldConteiner>            
              </FormFields>  
              <ButtonConteiner>
                <CustomButton label="To apply" onClick={handleSubmit} />
                {isRestButtonVisible && (
                  <CustomButton label="Rest" onClick={() => handleReset(resetForm)}/>
                )}
              </ButtonConteiner>                             
            </Form>
          )}
        </Formik>
      </Filters>

      <StartWorkout />
      <Quote />
    </Dashboard>
  );
}  