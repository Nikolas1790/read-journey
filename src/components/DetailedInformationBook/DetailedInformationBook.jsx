import CustomButton from "components/CustomButton/CustomButton";
import { AuthorBook, ClosingSymbol, Conteiner, CoverBook, PagesBook, TitleBook } from "./DetailedInformationBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch, useSelector } from "react-redux";
import { addBookById, ownBooks } from "../../redux/books/operations";
import { useNavigate } from 'react-router-dom';
import notFoundImg2x from '../../img/notFoundImg/open-book@2x.jpg';
import notFoundImg from '../../img/notFoundImg/open-book.jpg';
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

      // Если find возвращает undefined, значит, книга не найдена в библиотеке, и мы можем добавить ее
      if (bookExists === undefined) {
        toast.success("Книга не найдена в библиотеке. Добавляем...")
        dispatch(addBookById(bookData._id));
      } else {
        toast.error('Книга уже есть в библиотеке.')
      }
    };  

    if(btnLabel === "Start reading") navigate(`/reading/${bookData._id}`);

    closeModals();
  }; 
  const getImageUrl = () => {
    const img = new Image();
    img.src = notFoundImg;

    // Check if the device has a higher pixel density (retina display)
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
      return notFoundImg2x;
    } else {
      return notFoundImg;
    }
  };

  const imageUrl = bookData.imageUrl || getImageUrl();
  return (
    <Conteiner>
      <ClosingSymbol onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>

      <CoverBook src={imageUrl} alt="cover" />
      <TitleBook>{bookData.title}</TitleBook>
      <AuthorBook>{bookData.author}</AuthorBook>
      <PagesBook>{bookData.totalPages} pages</PagesBook>
      <CustomButton label={btnLabel} onClick={handleButtonClick} width="162px" height="46px" />
    </Conteiner>
  );
}
  