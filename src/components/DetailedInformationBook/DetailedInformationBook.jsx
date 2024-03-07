import CustomButton from "components/CustomButton/CustomButton";
import { AuthorBook, ClosingSymbol, Conteiner, CoverBook, PagesBook, TitleBook } from "./DetailedInformationBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch } from "react-redux";
import { addBookById } from "../../redux/books/operations";

export default function DetailedInformationBook({ closeModals, bookData, btnLabel }) {
  const dispatch = useDispatch();

  const handleButtonClick = async () => {    
    console.log(bookData._id)
    dispatch(addBookById(bookData._id))
    // try {
    //   await dispatch(logOut()).unwrap();
    //   navigate('/register');
    // } catch (error) {
    //   toast.error("Log out failed. Something went wrong.");
    // }
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
  