import sprite from '../../img/sprite.svg';
import { ClosingSymbol, Conteiner, Img, Text, TextSpan, Title } from './ModalBooks.styled';
import like2x from '../../img/stackBooksAndLike/like-desc@2x.png';
import like from '../../img/stackBooksAndLike/like-desc.png';

export default function ModalAddBookSuccessfully({ closeModals}) {

  return (
    <Conteiner>
      <ClosingSymbol onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>
      <Img>
        <source srcSet={like2x} media="(min-resolution: 192dpi)" />
        <img src={like} alt='add book' />
      </Img>  
      <Title>Good job</Title>
      <Text>Your book is now in <TextSpan>the library!</TextSpan> The joy knows no bounds and now you can start your training</Text>

    </Conteiner>
  );
}
  