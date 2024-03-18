import { useEffect, useState } from "react";
import { BooksTen, HeaderAndPaginationBlock } from './MyLibraryBooks.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ownBooks } from '../../redux/books/operations';
import { selectOwnBooks } from '../../redux/books/selector';
import CardBook from 'components/CardBook/CardBook';
import PortalModal from 'components/PortalModal/PortalModal';
import DetailedInformationBook from 'components/DetailedInformationBook/DetailedInformationBook';
import UnivesalMainConteainer from 'components/UniversalMainContainer/UniversalMainContainer';
import { MainBlockTitle } from 'components/UniversalMainContainer/UniversalMainContainer.styled';
import EmptyScreensaver from 'components/EmptyScreensaver/EmptyScreensaver';
import DropdownComponent from 'components/DropdownComponent/DropdownComponent';

export default function MyLibraryBooks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ownLibrary = useSelector(selectOwnBooks);
  const [selectedBooks, setSelectedBooks] = useState("");

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(ownBooks())    
  }, [dispatch]);

  const openLoginModal = (book) => {
    setModalOpen(true);
    setBookData(book); 
  };

  const handleSelectedBooks = (e) => {
    setSelectedBooks(e);
    if(e === "Done") dispatch(ownBooks("done"))
    if(e === "In progress") dispatch(ownBooks("in-progress"))
    if(e === "All books") dispatch(ownBooks())
    if(e === "Unread") dispatch(ownBooks("unread"))
  };

  return (
    <UnivesalMainConteainer>
      <HeaderAndPaginationBlock>
        <MainBlockTitle>My library</MainBlockTitle>
        <DropdownComponent selectedBooks={selectedBooks} handleSelectedBooks={handleSelectedBooks} isOpen={isOpen} setIsOpen={setIsOpen} />
      </HeaderAndPaginationBlock>

      {ownLibrary.length === 0 ? ( 
        <EmptyScreensaver purt="MyLibraryBooks" />
      ) : (
        <BooksTen>
          {Array.isArray(ownLibrary) && ownLibrary.map((book) => (  
            <CardBook  key={book._id} book={book} openLoginModal={openLoginModal} currentPage="MyLibrary"  />
          ))}
        </BooksTen> 
      )}

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <DetailedInformationBook bookData={bookData} closeModals={() => setModalOpen()} btnLabel="Start reading" />
      </PortalModal>
    </UnivesalMainConteainer>
  );
}  