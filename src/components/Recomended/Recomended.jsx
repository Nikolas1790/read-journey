import {  Arguments, BlackBlock, DashboardBlock, FilterTitle, Filters, FormField, FormFieldConteiner, FormFieldLabel, FormFields, LinkTextToLibrary, LinkToLibrary, Quote, QuoteBlock, QuoteSpan, RecomendedBlock, RecommendedBooksBlock, SeriaNumber, StartWorkoutBlock, StartWorkoutTitle, TextOne, TextSpan, TextTwo } from "./Recomended.styled"
import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import sprite from '../../img/sprite.svg';

const initialValues = {
  title: '',
  author: '',
};

const schema = Yup.object({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
});

export default function Recomended() {

  const handleSubmit = () => {
    
    console.log("submit")
      }

  return (
    <RecomendedBlock>
      <DashboardBlock>
        <Filters>
          <FilterTitle>Filters:</FilterTitle>
          <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

          {({ errors, touched }) => (
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
          <BlackBlock></BlackBlock>
          <Quote>"Books are <QuoteSpan>windows</QuoteSpan> to the world, and reading is a journey into the unknown."</Quote>
        </QuoteBlock>

      </DashboardBlock>








































      <RecommendedBooksBlock></RecommendedBooksBlock>

    </RecomendedBlock>
  );
}
  