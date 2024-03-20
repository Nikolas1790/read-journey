import UnivesalGeneralBlock from "components/UniversalGeneralBlock/UniversalGeneralBlock";
import UnivesalMainConteainer from "components/UniversalMainContainer/UniversalMainContainer";
import { MainBlockTitle } from "components/UniversalMainContainer/UniversalMainContainer.styled";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOwnBooks } from "../../redux/books/selector";
import { AuthorBook, BasicImg, BasicInfBook, SvgPlayStop, TitleBook } from "./Reading.styled";
import sprite from '../../img/sprite.svg';
import ReadingDashboard from "components/ReadingDashboard/ReadingDashboard";
import notFoundImg from '../../img/notFoundImg/open-book-desct.jpg';
import { useState } from "react";
import PictureWithFallback from "components/BackupImage/BackupImage";

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
            <PictureWithFallback>
              <BasicImg src={notFoundImg} alt="title" />
            </PictureWithFallback>
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