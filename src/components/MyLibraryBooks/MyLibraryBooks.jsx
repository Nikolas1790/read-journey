import sprite from '../../img/sprite.svg';
import { useEffect, useRef, useState } from "react";
import { Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg, HeaderAndPaginationBlock, MyLibraryBlock, MyLibraryTitle } from './MyLibraryBooks.styled';

const options = ["Unread", "In progress", "Done", "All books" ]

export default function MyLibraryBooks() {
  const [selectedBooks, setSelectedBooks] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const selecctRef = useRef(null);

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
    console.log("selectedBooks")
  };

  return (
      <MyLibraryBlock >
        <HeaderAndPaginationBlock>
          <MyLibraryTitle>My library</MyLibraryTitle>

          <Dropdown onClick={toggleDropdown} ref={selecctRef}>
            {!isOpen ? (<DropdownSvg width={16} height={16} >
              <use href={`${sprite}#icon-chevron-down`}  />
            </DropdownSvg>) : (
            <DropdownSvg width={16} height={16} >
              <use href={`${sprite}#icon-chevron-upp`}  />
            </DropdownSvg>)}
            <DropdownButton >{selectedBooks || "All books"}</DropdownButton>
            <DropdownList open={isOpen}>
              {options.map((book) => (
                <DropdownItem key={book} value={book} onClick={() => setSelectedBooks(book)}>
                  {book}
                </DropdownItem>
              ))}
            </DropdownList>                   
          </Dropdown>

        </HeaderAndPaginationBlock>
      </MyLibraryBlock>
  );
}
  