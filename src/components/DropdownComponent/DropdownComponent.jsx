import { useEffect, useRef } from 'react';
import sprite from '../../img/sprite.svg';
import { Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg } from './DropdownComponent.styled';

const options = ["Unread", "In progress", "Done", "All books" ]

export default function DropdownComponent({ selectedBooks, handleSelectedBooks, isOpen, setIsOpen }) {
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
  }, [setIsOpen]);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Dropdown onClick={toggleDropdown} ref={selecctRef}>
      <DropdownSvg width={16} height={16}>
        <use href={`${sprite}#icon-chevron-${isOpen ? 'upp' : 'down'}`} />
      </DropdownSvg>
      <DropdownButton >{selectedBooks || "All books"}</DropdownButton>
      <DropdownList open={isOpen}>
        {options.map((book) => (
          <DropdownItem key={book} value={book} onClick={() => handleSelectedBooks(book)}>
            {book}
          </DropdownItem>
        ))}
      </DropdownList>                   
    </Dropdown>       
  );
}  