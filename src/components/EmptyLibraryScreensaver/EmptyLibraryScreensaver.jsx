import imgBooksDesc from '../../img/stackBooksAndLike/books-desc.png';
import imgBooksDesc2x from '../../img/stackBooksAndLike/books-desc@2.png';
import { EmptyLibraryBlock, EmptyLibraryPicture, EmptyLibrarySpan, EmptyLibraryText } from './EmptyLibraryScreensaver.styled';

export default function EmptyLibraryScreensaver() {
  return (
    <EmptyLibraryBlock>
      <EmptyLibraryPicture>
        <source srcSet={imgBooksDesc2x} media="(min-resolution: 192dpi)" />        
        <img src={imgBooksDesc} alt="stack books" width={70} />
      </EmptyLibraryPicture> 
      <EmptyLibraryText>To start training, add <EmptyLibrarySpan>some of your books</EmptyLibrarySpan> or from the recommended ones</EmptyLibraryText>
    </EmptyLibraryBlock>
  );
}