import UnivesalGeneralBlock from "components/UniversalGeneralBlock/UniversalGeneralBlock";
import UnivesalMainConteainer from "components/UniversalMainContainer/UniversalMainContainer";
import { MainBlockTitle } from "components/UniversalMainContainer/UniversalMainContainer.styled";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOwnBooks } from "../../redux/books/selector";
import { AuthorBook, BasicImg, BasicInfBook, SvgPlayStop, TitleBook } from "./Reading.styled";
import sprite from '../../img/sprite.svg';
import ReadingDashboard from "components/ReadingDashboard/ReadingDashboard";
import notFoundImgMobile2x from '../../img/notFoundImg/open-book@2x.jpg';
import notFoundImgMobile from '../../img/notFoundImg/open-book.jpg';
import notFoundImg2x from '../../img/notFoundImg/open-book-desct@2x.png';
import notFoundImg from '../../img/notFoundImg/open-book-desct.png';
import { useState } from "react";

export default function Reading() {
  const { bookId } = useParams();
  const books = useSelector(selectOwnBooks);
  const [read, setRead] = useState(false);
 
  const selectedBook = books.find(book => book._id === bookId);

  return (
    <UnivesalGeneralBlock >      
      <ReadingDashboard  selectedBook={selectedBook._id} onReadChange={(e) => setRead(!e)} />     

      <UnivesalMainConteainer>
        <MainBlockTitle>My reading</MainBlockTitle>
        <BasicInfBook>
          {selectedBook.imageUrl ? (
            <BasicImg src={selectedBook.imageUrl} alt="title" />
          ) : (
            <picture>
              <source srcSet={`${notFoundImgMobile} 1x, ${notFoundImgMobile2x} 2x`} media="(max-width: 767px)" />
              <source srcSet={`${notFoundImg} 1x, ${notFoundImg2x} 2x`} media="(min-width: 768px)" />
              <BasicImg src={notFoundImg} alt="title" />
            </picture>
          )}
          
          <TitleBook>{selectedBook.title}</TitleBook>
          <AuthorBook>{selectedBook.author}</AuthorBook>
          {read ?(
            <SvgPlayStop>
              <use href={`${sprite}#icon-block-start`} />
            </SvgPlayStop> 
          ) : (
          <SvgPlayStop>
            <use href={`${sprite}#icon-block-pause`} />
          </SvgPlayStop> 
          )}

        </BasicInfBook>
      </UnivesalMainConteainer>
    </UnivesalGeneralBlock>
  );
}  