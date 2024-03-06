import CustomButton from "components/CustomButton/CustomButton";
import { AuthorBook, ClosingSymbol, Conteiner, CoverBook, PagesBook, TitleBook } from "./DetailedInformationBook.styled";
import sprite from '../../img/sprite.svg';

export default function DetailedInformationBook({ closeModals, bookData }) {
  const handleButtonClick = async () => {
    console.log(bookData)
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
      <CustomButton label="Add to library" onClick={handleButtonClick} width="162px" height="46px" />
    </Conteiner>
  );
}
  