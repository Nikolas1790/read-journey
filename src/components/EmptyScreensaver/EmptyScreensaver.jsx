import imgBooksDesc from '../../img/stackBooksAndLike/books-desc.png';
import imgBooksDesc2x from '../../img/stackBooksAndLike/books-desc@2.png';
import imgBooksMob from '../../img/stackBooksAndLike/books-mob.png';
import imgBooksMob2x from '../../img/stackBooksAndLike/books-mob@2x.png';
import { EmptyScreensaverBlock, EmptyScreensaverPicture, EmptyScreensaverSpan, EmptyScreensaverText, Img } from './EmptyScreensaver.styled';

export default function EmptyScreensaver({purt}) {
  return (
    <EmptyScreensaverBlock>
      <EmptyScreensaverPicture>
        <source srcSet={`${imgBooksMob} 1x, ${imgBooksMob2x} 2x`} media="(max-width: 767px)" />
        <source srcSet={`${imgBooksDesc} 1x, ${imgBooksDesc2x} 2x`} media="(min-width: 766px)" />
        <Img src={imgBooksDesc} alt="stack books" />
      </EmptyScreensaverPicture> 

       {purt==="Recomended" && <EmptyScreensaverText>Oops <EmptyScreensaverSpan>unfortunately</EmptyScreensaverSpan> nothing was found</EmptyScreensaverText>}
      {purt === "MyLibraryBooks" && <EmptyScreensaverText>To start training, add <EmptyScreensaverSpan>some of your books</EmptyScreensaverSpan> or from the recommended ones</EmptyScreensaverText>}
    </EmptyScreensaverBlock>
  );
}