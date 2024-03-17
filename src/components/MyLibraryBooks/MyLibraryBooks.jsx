import sprite from '../../img/sprite.svg';
import { useEffect, useRef, useState } from "react";
import { BooksTen, Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg, HeaderAndPaginationBlock } from './MyLibraryBooks.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ownBooks } from '../../redux/books/operations';
import { selectOwnBooks } from '../../redux/books/selector';
import CardBook from 'components/CardBook/CardBook';
import PortalModal from 'components/PortalModal/PortalModal';
import DetailedInformationBook from 'components/DetailedInformationBook/DetailedInformationBook';
import UnivesalMainConteainer from 'components/UniversalMainContainer/UniversalMainContainer';
import { MainBlockTitle } from 'components/UniversalMainContainer/UniversalMainContainer.styled';
import EmptyScreensaver from 'components/EmptyScreensaver/EmptyScreensaver';

const options = ["Unread", "In progress", "Done", "All books" ]

export default function MyLibraryBooks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ownLibrary = useSelector(selectOwnBooks);
  const [selectedBooks, setSelectedBooks] = useState("");
  const selecctRef = useRef(null);

  // console.log(ownLibrary)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(ownBooks())    
  }, [dispatch]);

  const openLoginModal = (book) => {
    setModalOpen(true);
    setBookData(book); // Передаем данные о книге
  };
  useEffect(() => {    
    const handleClickOutside = (event) => {
        if (selecctRef.current && !selecctRef.current.contains(event.target)) {
          setIsOpen(false);
        }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

          <Dropdown onClick={toggleDropdown} ref={selecctRef}>
            {!isOpen ? (
            <DropdownSvg width={16} height={16} >
              <use href={`${sprite}#icon-chevron-down`}  />
            </DropdownSvg>
            ) : (
            <DropdownSvg width={16} height={16} >
              <use href={`${sprite}#icon-chevron-upp`}  />
            </DropdownSvg>
            )}
            <DropdownButton >{selectedBooks || "All books"}</DropdownButton>
            <DropdownList open={isOpen}>
              {options.map((book) => (
                <DropdownItem key={book} value={book} onClick={() => handleSelectedBooks(book)}>
                  {book}
                </DropdownItem>
              ))}
            </DropdownList>                   
          </Dropdown>
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
  