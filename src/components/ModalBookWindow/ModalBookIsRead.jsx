import sprite from '../../img/sprite.svg';
import { ClosingSymbol, Conteiner, Img, Text, TextSpan, Title } from './ModalBooks.styled';
import books2x from '../../img/stackBooksAndLike/books-desc@2.png';
import books from '../../img/stackBooksAndLike/books-desc.png';
import mobBooks2x from '../../img/stackBooksAndLike/books-mob@2x.png';
import mobBooks from '../../img/stackBooksAndLike/books-mob.png';

export default function ModalBookIsRead({ closeModals}) {
  return (
    <Conteiner>
      <ClosingSymbol onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>
      <picture>
        <source srcSet={`${mobBooks} 1x, ${mobBooks2x} 2x`} media="(max-width: 767px)" />
        <source srcSet={`${books} 1x, ${books2x} 2x`} media="(min-width: 766px)" />    
           
        <Img src={books} alt="stack books" />
      </picture>  
      <Title>The book is read</Title>
      <Text>It was an  <TextSpan>exciting journey</TextSpan>, where each page revealed new horizons, and the characters became inseparable friends.</Text>
    </Conteiner>
  );
}
  