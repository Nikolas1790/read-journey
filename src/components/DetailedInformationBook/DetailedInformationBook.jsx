import CustomButton from "components/CustomButton/CustomButton";
import { AuthorBook, ClosingSymbol, Conteiner, CoverBook, PagesBook, TitleBook } from "./DetailedInformationBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch } from "react-redux";
import { addBookById } from "../../redux/books/operations";
// import { selectOwnBooks } from "../../redux/books/selector";
import { useNavigate } from 'react-router-dom';

export default function DetailedInformationBook({ closeModals, bookData, btnLabel }) {
  // const ownLibrary = useSelector(selectOwnBooks); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(ownLibrary)

  const handleButtonClick =  () => {   
    if(btnLabel === "Add to library") dispatch(addBookById(bookData._id));  
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

      <CoverBook src={bookData.imageUrl} alt="cover" />
      <TitleBook>{bookData.title}</TitleBook>
      <AuthorBook>{bookData.author}</AuthorBook>
      <PagesBook>{bookData.totalPages} pages</PagesBook>
      <CustomButton label={btnLabel} onClick={handleButtonClick} width="162px" height="46px" />
    </Conteiner>
  );
}
  