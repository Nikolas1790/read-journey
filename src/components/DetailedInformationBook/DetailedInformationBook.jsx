import CustomButton from "components/CustomButton/CustomButton";
import { AuthorBook, ClosingSymbol, Conteiner, CoverBook, PagesBook, TitleBook } from "./DetailedInformationBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch, useSelector } from "react-redux";
import { addBookById, ownBooks } from "../../redux/books/operations";
import { useNavigate } from 'react-router-dom';
import notFoundImgMobile2x from '../../img/notFoundImg/open-book@2x.jpg';
import notFoundImgMobile from '../../img/notFoundImg/open-book.jpg';
import notFoundImg2x from '../../img/notFoundImg/open-book-desct@2x.jpg';
import notFoundImg from '../../img/notFoundImg/open-book-desct.jpg';
import { useEffect } from "react";
import { selectOwnBooks } from "../../redux/books/selector";
import { toast } from "react-toastify";

export default function DetailedInformationBook({ closeModals, bookData, btnLabel }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ownLibrary = useSelector(selectOwnBooks);
  
  useEffect(()=> {
    dispatch(ownBooks())    
  }, [dispatch]);
  
  const handleButtonClick =  () => {  
    if(btnLabel === "Add to library") {
      const bookExists = ownLibrary.find(item => item.title === bookData.title);

      if (bookExists === undefined) {
        toast.success("The book was added successfully")
        dispatch(addBookById(bookData._id));
      } else {
        toast.error('The book is already in the library.')
      }
    };  

    if(btnLabel === "Start reading") navigate(`/reading/${bookData._id}`);

    closeModals();
  }; 

  return (
    <Conteiner>
      <ClosingSymbol onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>

      {bookData.imageUrl ? (
        <CoverBook src={bookData.imageUrl} alt="cover" />
      ) : (
        <picture>
          <source srcSet={`${notFoundImgMobile} 1x, ${notFoundImgMobile2x} 2x`} media="(max-width: 767px)" />
          <source srcSet={`${notFoundImg} 1x, ${notFoundImg2x} 2x`} media="(min-width: 768px)" />
          <CoverBook src={notFoundImg} alt="cover fallback" />
        </picture>
      )}
      <TitleBook>{bookData.title}</TitleBook>
      <AuthorBook>{bookData.author}</AuthorBook>
      <PagesBook>{bookData.totalPages} pages</PagesBook>
      <CustomButton label={btnLabel} onClick={handleButtonClick} prop="true"/>
    </Conteiner>
  );
}  