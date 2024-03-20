import { BookAutor, BookCard, BookDataBlock, BookImg, BookTitle, DellBtn, TitleAutorBlock } from "./CardBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/operations";
import notFoundImg from '../../img/notFoundImg/open-book-desct.jpg';
import PictureWithFallback from "components/BackupImage/BackupImage";

export default function CardBook({book, openLoginModal, currentPage=false}) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteBook(book._id));
  };

  return (
    <BookCard>      
      {book.imageUrl ? (
        <BookImg src={book.imageUrl} alt="book title"  onClick={() => openLoginModal(book)} />
      ) : (
        <PictureWithFallback>
          <BookImg src={notFoundImg} alt="book title" onClick={() => openLoginModal(book)} /> 
        </PictureWithFallback>
      )}
      <BookDataBlock>        
        <TitleAutorBlock page={currentPage === "MyLibrary" ? 'true' : '' }>
          <BookTitle>{book.title}</BookTitle>
          <BookAutor>{book.author}</BookAutor>
        </TitleAutorBlock>
        
        {currentPage === "MyLibrary" && (
          <DellBtn onClick={handleDeleteClick} >        
            <svg width={28} height={28}>
              <use href={`${sprite}#icon-dell`} />
            </svg> 
          </DellBtn>
        )}
      </BookDataBlock>
    </BookCard>
  );
}  