import { BookAutor, BookCard, BookDataBlock, BookImg, BookTitle, DellBtn, TitleAutorBlock } from "./CardBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/operations";
import notFoundImgMobile2x from '../../img/notFoundImg/open-book@2x.jpg';
import notFoundImgMobile from '../../img/notFoundImg/open-book.jpg';
import notFoundImg2x from '../../img/notFoundImg/open-book-desct@2x.png';
import notFoundImg from '../../img/notFoundImg/open-book-desct.png';

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
        <picture>
          <source srcSet={`${notFoundImgMobile} 1x, ${notFoundImgMobile2x} 2x`} media="(max-width: 767px)" />
          <source srcSet={`${notFoundImg} 1x, ${notFoundImg2x} 2x`} media="(min-width: 768px)" />
          <BookImg src={notFoundImg} alt="book title" onClick={() => openLoginModal(book)} /> 
        </picture>
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