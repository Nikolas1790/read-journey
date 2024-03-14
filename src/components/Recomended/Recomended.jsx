import { BooksTen, HeaderAndPaginationBlock, PaginationBtn,PaginationSvg} from "./Recomended.styled"
import sprite from '../../img/sprite.svg';
import RecomendedDashboard from "components/RecomendedDashboard/RecomendedDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBooks } from "../../redux/books/operations";
import { selectBookData, selectTotalPage } from "../../redux/books/selector";
import PortalModal from "components/PortalModal/PortalModal";
import DetailedInformationBook from "components/DetailedInformationBook/DetailedInformationBook";
import CardBook from "components/CardBook/CardBook";
import UnivesalMainConteainer from "components/UniversalMainContainer/UniversalMainContainer";
import UnivesalGeneralBlock from "components/UniversalGeneralBlock/UniversalGeneralBlock";
import { MainBlockTitle } from "components/UniversalMainContainer/UniversalMainContainer.styled";

export default function Recomended() {
  const dispatch = useDispatch();
  const results = useSelector(selectBookData)
  const totalPages = useSelector(selectTotalPage);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(false); 
  const [page, setPage] = useState(1);

  useEffect(()=> {
    dispatch(fetchBooks({ page, limit: 10  }))
  }, [dispatch, page]);

  const handlePageChange = (newPage) => { 
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  
  const openLoginModal = (book) => {
    setModalOpen(true);
    setBookData(book); // Передаем данные о книге
  };
  return (
    <UnivesalGeneralBlock >      
      <RecomendedDashboard />      

      <UnivesalMainConteainer >
        <HeaderAndPaginationBlock>
          <MainBlockTitle>Recommended</MainBlockTitle>
          <div>
            <PaginationBtn onClick={() => handlePageChange(page - 1)} >
              <PaginationSvg stoke={page === 1 ? "true" : ''}>
                <use href={`${sprite}#icon-chevron-left`} />
              </PaginationSvg>
            </PaginationBtn>
            <PaginationBtn onClick={() => handlePageChange(page + 1)}>
              <PaginationSvg stoke={page === totalPages ? "true" : ''} >
                <use href={`${sprite}#icon-chevron-right`} />
              </PaginationSvg>
            </PaginationBtn>
          </div>
        </HeaderAndPaginationBlock>

        <BooksTen>
          {results?.map((book) => (
            <CardBook  key={book._id} book={book} openLoginModal={openLoginModal} />
          ))}
        </BooksTen>  
      </UnivesalMainConteainer>

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <DetailedInformationBook bookData={bookData} closeModals={() => setModalOpen()} btnLabel="Add to library"/>
      </PortalModal>
    </UnivesalGeneralBlock>
  );
}
  