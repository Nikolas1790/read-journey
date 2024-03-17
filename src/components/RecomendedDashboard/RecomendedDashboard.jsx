import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import sprite from '../../img/sprite.svg';
import { Arguments, ArgumentsBlock, ButtonConteiner, Filters, Quote, QuoteBlock, QuoteSpan, SeriaNumber, StartWorkoutBlock, StartWorkoutTitle, TextOne, TextSpan, TextTwo } from './RecomendedDashboard.styled';
import imgBooksDesc from '../../img/stackBooksAndLike/books-desc.png';
import imgBooksDesc2x from '../../img/stackBooksAndLike/books-desc@2.png';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle, FormField, FormFieldConteiner, FormFieldLabel, FormFields, LinkTitlelTo, LinkTo, LinkToSvg } from 'components/Dashboard/Dashboard.styled';
import { fetchBooks } from '../../redux/books/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';

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

      <StartWorkoutBlock>
        <StartWorkoutTitle>Start your workout</StartWorkoutTitle>
        <ArgumentsBlock>
        <Arguments>
          <SeriaNumber>1</SeriaNumber>
          <TextOne>Create a personal library: <TextSpan>add the books you intend to read to it.</TextSpan></TextOne>
        </Arguments>
        <Arguments>
          <SeriaNumber>2</SeriaNumber>
          <TextTwo>Create your first workout: <TextSpan>define a goal, choose a period, start training.</TextSpan></TextTwo>
        </Arguments>
        </ArgumentsBlock>

        <LinkTo to="/library">
          <LinkTitlelTo>My library </LinkTitlelTo>            
          <LinkToSvg>
            <use href={`${sprite}#icon-arrow-right`} />
          </LinkToSvg>          
        </LinkTo>
      </StartWorkoutBlock>

      <QuoteBlock>        
      <picture>
        <source srcSet={imgBooksDesc2x} media="(min-resolution: 192dpi)" />        
        <img src={imgBooksDesc} alt="stack books" width={40} />
      </picture>          
        <Quote>"Books are <QuoteSpan>windows</QuoteSpan> to the world, and reading is a journey into the unknown."</Quote>
      </QuoteBlock>
    </Dashboard>
  );
}  