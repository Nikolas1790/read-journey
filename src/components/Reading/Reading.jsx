import UnivesalGeneralBlock from "components/UniversalGeneralBlock/UniversalGeneralBlock";
import UnivesalMainConteainer from "components/UniversalMainContainer/UniversalMainContainer";
import { MainBlockTitle } from "components/UniversalMainContainer/UniversalMainContainer.styled";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOwnBooks } from "../../redux/books/selector";
import { AuthorBook, BasicImg, BasicInfBook, SvgPlayStop, TitleBook } from "./Reading.styled";
import sprite from '../../img/sprite.svg';
import ReadingDashboard from "components/ReadingDashboard/ReadingDashboard";
import notFoundImg2x from '../../img/notFoundImg/open-book@2x.jpg';
import notFoundImg from '../../img/notFoundImg/open-book.jpg';
import { useState } from "react";

export default function Reading() {
  const { bookId } = useParams();
  const books = useSelector(selectOwnBooks);
  const [read, setRead] = useState(false);
 
  const selectedBook = books.find(book => book._id === bookId);

  const getImageUrl = () => {
    const img = new Image();
    img.src = notFoundImg;

    // Check if the device has a higher pixel density (retina display)
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
      return notFoundImg2x;
    } else {
      return notFoundImg;
    }
  };
  const imageUrl = selectedBook.imageUrl || getImageUrl();

  return (
    <UnivesalGeneralBlock >      
      <ReadingDashboard  selectedBook={selectedBook._id} onReadChange={(e) => setRead(!e)} />     

      <UnivesalMainConteainer>
        <MainBlockTitle>My reading</MainBlockTitle>
        <BasicInfBook>
          <BasicImg src={imageUrl} alt='title'/>
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
  