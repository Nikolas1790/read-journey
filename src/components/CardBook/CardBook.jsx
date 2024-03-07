import { BookAutor, BookCard, BookDataBlock, BookImg, BookTitle, DellBtn, TitleAutorBlock } from "./CardBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/operations";


export default function CardBook({book, openLoginModal, currentPage=false}) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // console.log(book._id)
    dispatch(deleteBook(book._id));
  };
  return (
    <BookCard>
      <BookImg src={book.imageUrl} alt="book title"  onClick={() => openLoginModal(book)} />
      <BookDataBlock>
        <TitleAutorBlock page={currentPage === " MyLibrary" ? 'true' : 'false' }>
          <BookTitle>{book.title}</BookTitle>
          <BookAutor>{book.author}</BookAutor>
        </TitleAutorBlock>
        
        {currentPage === " MyLibrary" && (
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
  