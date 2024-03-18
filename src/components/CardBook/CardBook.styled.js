import color from 'common/GlobalColers'
import styled from 'styled-components'

export const BookCard = styled.li`
  width: 137px;
  height: 248px;
  background: transparent;
  
  &:last-child {
    margin-right: 0; 
  }
`
export const BookImg = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px; 
  margin-bottom: 8px;
  background: ${color.gryeBlack};
`

export const BookDataBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TitleAutorBlock = styled.div`
  max-width: ${({ page }) => ( page === 'true' ? '89px' : '137px')};
`

export const BookTitle = styled.h3`
  font-size: 14px ;
  font-weight: 700;
  margin-bottom: 2px;

  /* Ограничиваем текст одной строкой */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const BookAutor = styled.p`
  font-size: 10px ;
  color: ${color.gryeLight};
  white-space: nowrap;

  /* Ограничиваем текст одной строкой */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const DellBtn = styled.button`
  background: transparent;
  transition: transform 0.25s linear; 

&:hover,
&:focus {
  transform: scale(1.1);
}
`