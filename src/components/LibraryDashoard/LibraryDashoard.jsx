import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import sprite from '../../img/sprite.svg';
import { Arguments, CardAutor, CardImg, CardRecomended, CardTitle, ErrorMessageStyled, Filters, FormField, FormFieldConteiner, FormFieldLabel, FormFields, LinkTextToHome, LinkToHome, MainBlockLibraryDashboard, StartWorkoutBlock, StartWorkoutTitle } from './LibraryDashoard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectBookData } from '../../redux/books/selector';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import { addNewBook } from '../../redux/books/operations';

const initialValues = {
  title: '',
  author: '',
  page: '',
};

const schema = Yup.object({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  page: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits')
  .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

export default function LibraryDashboard() {
  const results = useSelector(selectBookData);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {  
    const title= e.title
    const author= e.author
    const page= parseInt(e.page)


    if(page) dispatch(addNewBook({ title, author, totalPages:page}))  
    // console.log(e.title)
    // console.log(e.author)
    // console.log(e.page)

  }
  return (
    <Dashboard>
    <MainBlockLibraryDashboard>      
      <Filters>
        <FilterTitle>Create your library:</FilterTitle>
        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

          {({  errors,touched }) => (
            <Form>
              <FormFields>  
                <FormFieldConteiner>
                  <FormFieldLabel htmlFor="title">Book title:</FormFieldLabel>
                  <FormField id="title" name="title" type="title" placeholder="I See You Are..." error={errors.title && touched.title ? "true" : "false" } />     
                  <ErrorMessageStyled name="title" component='div' />           
                </FormFieldConteiner>                
                <FormFieldConteiner>
                  <FormFieldLabel htmlFor="author">The author:</FormFieldLabel>
                  <FormField id="author" name="author" type="author" placeholder="Hilarion Pavlyuk" paddindleft="95px"  error={errors.author && touched.author ? "true" : "false" } />    
                  <ErrorMessageStyled name="author" component='div' />            
                </FormFieldConteiner> 
                <FormFieldConteiner>
                  <FormFieldLabel htmlFor="page">Number of pages:</FormFieldLabel>
                  <FormField id="page" name="page" type="page" placeholder="664" paddindleft="135px" error={errors.page && touched.page ? "true" : "false" } />             
                  <ErrorMessageStyled name="page" component='div' />   
                </FormFieldConteiner>            
              </FormFields>       
              <CustomButton label="Add book" onClick={handleSubmit} width="131px" />             
            </Form>
          )}
        </Formik>
      </Filters>

      <StartWorkoutBlock>
        <StartWorkoutTitle>Recommended books</StartWorkoutTitle>



        <Arguments >
          {results?.slice(0, 3).map((book) => (
            <CardRecomended key={book._id}>
              <CardImg src={book.imageUrl} alt="book title"  />
              <CardTitle>{book.title}</CardTitle>
              <CardAutor>{book.author}</CardAutor>
            </CardRecomended>
          ))}     
        </Arguments>



        <LinkToHome to="/recommended">
          <LinkTextToHome>Home </LinkTextToHome>            
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>          
        </LinkToHome>
      </StartWorkoutBlock>


    </MainBlockLibraryDashboard>
    </Dashboard>
  );
}
  