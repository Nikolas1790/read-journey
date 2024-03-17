import sprite from '../../img/sprite.svg';
import { ClosingSymbol, Conteiner, Img, Text, TextSpan, Title } from './ModalBooks.styled';
import like2x from '../../img/stackBooksAndLike/like-desc@2x.png';
import like from '../../img/stackBooksAndLike/like-desc.png';
import mobLike2x from '../../img/stackBooksAndLike/like-mob@2x.png';
import mobLike from '../../img/stackBooksAndLike/like-mob.png';

export default function ModalAddBookSuccessfully({ closeModals}) {
  return (
    <Conteiner>
      <ClosingSymbol onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>
      <picture>
        <source srcSet={`${mobLike} 1x, ${mobLike2x} 2x`} media="(max-width: 767px)" />
        <source srcSet={`${like} 1x, ${like2x} 2x`} media="(min-width: 766px)" />    
           
        <Img src={like} alt="add book" />
      </picture>  
      <Title>Good job</Title>
      <Text>Your book is now in <TextSpan>the library!</TextSpan> The joy knows no bounds and now you can start your training</Text>
    </Conteiner>
  );
}
  