import { BookCard, BookImg, BookTitle, BooksTen, HeaderAndPaginationBlock, PaginationBtn,RecomendedBlock, RecommendedBooksBlock, RecommendedTitle} from "./Recomended.styled"
import sprite from '../../img/sprite.svg';
import RecomendedDashboard from "components/RecomendedDashboard/RecomendedDashboard";
import Dashboard from "components/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/books/operations";
import { selectBookData } from "../../redux/books/selector";

export default function Recomended() {
  const dispatch = useDispatch();
  const {results} = useSelector(selectBookData)

  useEffect(()=> {
    dispatch(fetchBooks())
  }, [dispatch])
console.log(results  )
  return (
    <RecomendedBlock>
      <Dashboard>
        <RecomendedDashboard/>
      </Dashboard>

      <RecommendedBooksBlock>
        <HeaderAndPaginationBlock>
          <RecommendedTitle>Recommended</RecommendedTitle>
          <div>
            <PaginationBtn>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-chevron-left`} />
              </svg>
            </PaginationBtn>
            <PaginationBtn>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-chevron-right`} />
              </svg>
            </PaginationBtn>
          </div>
        </HeaderAndPaginationBlock>



        <BooksTen>
          {results?.map((book) => (
            <BookCard key={book._id}>
              <BookImg src={book.imageUrl} alt="book title" />
              <BookTitle>{book.title}</BookTitle>
              <p>{book.author}</p>
    
            {console.log(book)}

            </BookCard>
          ))}
        </BooksTen>

        
      </RecommendedBooksBlock>
    </RecomendedBlock>
  );
}
  