import { BookAutor, BookCard, BookDataBlock, BookImg, BookTitle, DellBtn, TitleAutorBlock } from "./CardBook.styled";
import sprite from '../../img/sprite.svg';
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/operations";
import notFoundImg2x from '../../img/notFoundImg/open-book@2x.jpg';
import notFoundImg from '../../img/notFoundImg/open-book.jpg';

export default function CardBook({book, openLoginModal, currentPage=false}) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // console.log(book._id)
    dispatch(deleteBook(book._id));
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
  const imageUrl = book.imageUrl || getImageUrl();
  return (
    <BookCard>
      <BookImg src={imageUrl} alt="book title"  onClick={() => openLoginModal(book)} />
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
  