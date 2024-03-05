import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import sprite from '../../img/sprite.svg';
import { Arguments, FilterTitle, Filters, FormField, FormFieldConteiner, FormFieldLabel, FormFields, LinkTextToLibrary, LinkToLibrary, Quote, QuoteBlock, QuoteSpan, SeriaNumber, StartWorkoutBlock, StartWorkoutTitle, TextOne, TextSpan, TextTwo } from './RecomendedDashboard.styled';

import imgBooksDesc from '../../img/stackBooksAndLike/books-desc.png';
import imgBooksDesc2x from '../../img/stackBooksAndLike/books-desc@2.png';

const initialValues = {
  title: '',
  author: '',
};

const schema = Yup.object({
  title: Yup.string(),
  author: Yup.string(),
});

export default function RecomendedDashboard() {
  const handleSubmit = () => {    
    console.log("submit")
  }
  return (
    <>
      
      <Filters>
        <FilterTitle>Filters:</FilterTitle>
        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

          {({ touched }) => (
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
              <CustomButton label="To apply" onClick={handleSubmit} width="122px" />             
            </Form>
          )}
        </Formik>
      </Filters>

      <StartWorkoutBlock>
        <StartWorkoutTitle>Start your workout</StartWorkoutTitle>
        <Arguments maginbottom="20px" >
          <SeriaNumber>1</SeriaNumber>
          <TextOne>Create a personal library: <TextSpan>add the books you intend to read to it.</TextSpan></TextOne>
        </Arguments>
        <Arguments maginbottom="26px">
          <SeriaNumber>2</SeriaNumber>
          <TextTwo>Create your first workout: <TextSpan>define a goal, choose a period, start training.</TextSpan></TextTwo>
        </Arguments>

        <LinkToLibrary to="/library">
          <LinkTextToLibrary>My library </LinkTextToLibrary>
            
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>          
        </LinkToLibrary>
      </StartWorkoutBlock>

      <QuoteBlock>
        
      <picture>
        <source srcSet={imgBooksDesc2x} media="(min-resolution: 192dpi)" />        
        <img src={imgBooksDesc} alt="stack books" width={40} />
      </picture>  
        
        <Quote>"Books are <QuoteSpan>windows</QuoteSpan> to the world, and reading is a journey into the unknown."</Quote>
      </QuoteBlock>

    </>
  );
}
  