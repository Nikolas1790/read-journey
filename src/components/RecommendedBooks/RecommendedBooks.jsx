import sprite from '../../img/sprite.svg';
import { Arguments, CardAutor, CardImg, CardRecomended, CardTitle, StartWorkoutBlock, StartWorkoutTitle } from './RecommendedBooks.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectBookData } from '../../redux/books/selector';
import {  LinkTitlelTo, LinkTo, LinkToSvg } from 'components/Dashboard/Dashboard.styled';
import { fetchBooks } from '../../redux/books/operations';
import PortalModal from 'components/PortalModal/PortalModal';
import { useEffect, useState } from 'react';
import DetailedInformationBook from 'components/DetailedInformationBook/DetailedInformationBook';

export default function RecommendedBooks() {
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(false); 
  const results = useSelector(selectBookData);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchBooks({ page: 1, limit: 10  }))
  }, [dispatch]);

  const openLoginModal = (book) => {
    setOpenModal(true);
    setBookData(book); 
  };
  
  return (
    <div>
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
        <LinkTo to="/recommended">
          <LinkTitlelTo>Home </LinkTitlelTo>            
          <LinkToSvg>
            <use href={`${sprite}#icon-arrow-right`} />
          </LinkToSvg>          
        </LinkTo>
      </StartWorkoutBlock>

      <PortalModal active={openModal} setActive={setOpenModal}>
        <DetailedInformationBook bookData={bookData} closeModals={() => setOpenModal()} btnLabel="Add to library"/>
      </PortalModal>
    </div>
  );
}  