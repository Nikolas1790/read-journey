import sprite from '../../img/sprite.svg';
import { ClosingSymbol, Conteiner, Img, Text, TextSpan, Title } from './ModalBooks.styled';
import books2x from '../../img/stackBooksAndLike/books-desc@2.png';
import books from '../../img/stackBooksAndLike/books-desc.png';

export default function ModalBookIsRead({ closeModals}) {

  return (
    <Conteiner>
      <ClosingSymbol onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>
      <Img>
        <source srcSet={books2x} media="(min-resolution: 192dpi)" />
        <img src={books} alt='add book' />
      </Img>  
      <Title>The book is read</Title>
      <Text>It was an  <TextSpan>exciting journey</TextSpan>, where each page revealed new horizons, and the characters became inseparable friends.</Text>

    </Conteiner>
  );
}
  