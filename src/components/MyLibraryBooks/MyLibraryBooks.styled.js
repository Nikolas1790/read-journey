import color from 'common/GlobalColers'
import styled from 'styled-components'

export const MyLibraryBlock = styled.div`
  width: 847px;
  height: 651px;
  border-radius: 30px;

  background: ${color.blackLight};
   padding: 40px 40px 28px 40px;
 `
export const HeaderAndPaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const MyLibraryTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
`

///////////////////////////////////////////////////////////////

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownSvg = styled.svg`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const DropdownButton = styled.button`
  display: flex;

  width: 153px;
  height: 46px;
  border-radius: 12px; 
  border: 1px solid ${color.charcoalGray};
  outline: none;
  cursor: pointer;
  background: transparent;
  padding: 14px;

`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 120%; 
  left: 0;
  color: ${color.gryeLight};
  background-color: ${color.gryeBlack};
  border-top: none;
  display: none;

  list-style: none;
  padding: 14px;
  margin: 0;

  width: 100%;
  border-radius: 12px;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  cursor: pointer;  

  &:not(:last-child) {
    margin-bottom: 7px;
  }
  &:hover {
    color: ${color.whitePrimary};
  }

`;


export const BooksTen = styled.ul`

  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;
`