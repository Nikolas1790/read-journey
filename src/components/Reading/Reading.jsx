import Dashboard from "components/Dashboard/Dashboard";
import UnivesalGeneralBlock from "components/UniversalGeneralBlock/UniversalGeneralBlock";
import UnivesalMainConteainer from "components/UniversalMainContainer/UniversalMainContainer";
import { MainBlockTitle } from "components/UniversalMainContainer/UniversalMainContainer.styled";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOwnBooks } from "../../redux/books/selector";
import { AuthorBook, BasicImg, BasicInfBook, TitleBook } from "./Reading.styled";
import sprite from '../../img/sprite.svg';
import ReadingDashboard from "components/ReadingDashboard/ReadingDashboard";


export default function Reading() {
  const { bookId } = useParams();
  const books = useSelector(selectOwnBooks);

  const selectedBook = books.find(book => book._id === bookId);

  console.log(selectedBook)
  return (
    <UnivesalGeneralBlock >

      <Dashboard>
        <ReadingDashboard />
      </Dashboard>


      <UnivesalMainConteainer>
        <MainBlockTitle>My reading</MainBlockTitle>
        <BasicInfBook>
          <BasicImg src={selectedBook.imageUrl} alt='title'/>
          <TitleBook>{selectedBook.title}</TitleBook>
          <AuthorBook>{selectedBook.author}</AuthorBook>

          <svg width={50} height={50}>
            <use href={`${sprite}#icon-block-pause`} />
          </svg> 

        </BasicInfBook>
      </UnivesalMainConteainer>

    </UnivesalGeneralBlock>
  );
}
  