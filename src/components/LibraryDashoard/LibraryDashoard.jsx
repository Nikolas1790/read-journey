import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import sprite from '../../img/sprite.svg';
import { Arguments, CardAutor, CardImg, CardRecomended, CardTitle, ErrorMessageStyled, Filters, FormField, FormFieldConteiner, FormFieldLabel, FormFields, LinkTextToHome, LinkToHome, MainBlockLibraryDashboard, StartWorkoutBlock, StartWorkoutTitle } from './LibraryDashoard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectBookData, selectOwnBooks } from '../../redux/books/selector';
import Dashboard from 'components/Dashboard/Dashboard';
import { FilterTitle } from 'components/Dashboard/Dashboard.styled';
import { addNewBook, fetchBooks, ownBooks } from '../../redux/books/operations';
import PortalModal from 'components/PortalModal/PortalModal';
import ModalAddBookSuccessfully from 'components/ModalBookWindow/ModalAddBookSuccessfully';
import { useEffect, useState } from 'react';
import DetailedInformationBook from 'components/DetailedInformationBook/DetailedInformationBook';
import { toast } from 'react-toastify';

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
  const [openModal, setOpenModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(false); 
  const [bookExists, setBookExists] = useState(false);
  const results = useSelector(selectBookData);
  const ownLibrary = useSelector(selectOwnBooks);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(ownBooks())  
    dispatch(fetchBooks({ page: 1, limit: 10  }))
  }, [dispatch]);

  const handleSubmit = (e, { resetForm }) => {  
    const title= e.title
    const author= e.author
    const page= parseInt(e.page)

    if(page) {
      const bookExists = ownLibrary.find(item => item.title === title);

      // Если find возвращает undefined, значит, книга не найдена в библиотеке, и мы можем добавить ее
      if (bookExists === undefined) {
        dispatch(addNewBook({ title, author, totalPages: page }));
        setModalOpen(true);
        setBookExists(false);
        resetForm();
      } else {
        setBookExists(true);
        toast.error('Книга уже есть в библиотеке.')
      }
    }
    e.target.blur();
  }

  const openLoginModal = (book) => {
    setOpenModal(true);
    setBookData(book); // Передаем данные о книге
  };
  // console.log(results)
  return (
    <Dashboard>
    <MainBlockLibraryDashboard>      
      <Filters>
        <FilterTitle>Create your library:</FilterTitle>
        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

          {({  errors, touched, resetForm  }) => (
            <Form>
              <FormFields>  
                <FormFieldConteiner>
                  <FormFieldLabel htmlFor="title">Book title:</FormFieldLabel>
                  <FormField id="title" name="title" type="title" placeholder="I See You Are..." error={errors.title && touched.title ? "true" : "false"  }  style={bookExists ? { borderColor: 'red' } : {}} />     
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
              <CustomButton label="Add book" width="131px" />             
            </Form>
          )}
        </Formik>
      </Filters>

      <StartWorkoutBlock>
        <StartWorkoutTitle>Recommended books</StartWorkoutTitle>
        <Arguments >
          {results?.slice(3, 6).map((book) => (
            <CardRecomended key={book._id}>
              <CardImg src={book.imageUrl} alt="book title"  onClick={() => openLoginModal(book)} />
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

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <ModalAddBookSuccessfully  closeModals={() => setModalOpen()} />
      </PortalModal>
      <PortalModal active={openModal} setActive={setOpenModal}>
        <DetailedInformationBook bookData={bookData} closeModals={() => setOpenModal()} btnLabel="Add to library"/>
      </PortalModal>
    </MainBlockLibraryDashboard>
    </Dashboard>
  );
}
  