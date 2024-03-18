import imgBooksDesc from '../../img/stackBooksAndLike/books-desc.png';
import imgBooksDesc2x from '../../img/stackBooksAndLike/books-desc@2.png';
import { QuoteBlock, QuoteSpan, QuoteText } from './Quote.styled';

export default function Quote() {
  return (
    <QuoteBlock>        
      <picture>
        <source srcSet={imgBooksDesc2x} media="(min-resolution: 192dpi)" />        
        <img src={imgBooksDesc} alt="stack books" width={40} />
      </picture>          
      <QuoteText>"Books are <QuoteSpan>windows</QuoteSpan> to the world, and reading is a journey into the unknown."</QuoteText>
    </QuoteBlock>
  );
}  