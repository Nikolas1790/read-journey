import { BooksTen, HeaderAndPaginationBlock } from "./Recomended.styled"
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
import EmptyScreensaver from "components/EmptyScreensaver/EmptyScreensaver";
import Pagination from "components/Pagination/Pagination";

const calculateLimit = (width) => {
  if (width < 768) {
    return 2;
  } else if (width >= 768 && width < 1440) {
    return 8;
  } else {
    return 10;
  }
};

export default function Recomended() {
  const dispatch = useDispatch();
  const results = useSelector(selectBookData)
  const totalPages = useSelector(selectTotalPage);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(false); 
  const [page, setPage] = useState(1);  
  const [limit, setLimit] = useState(calculateLimit(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newLimit = calculateLimit(newWidth);
      setLimit(newLimit); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(fetchBooks({ page, limit }));
  }, [dispatch, page, limit]);
  
  const handlePageChange = (newPage) => { 
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  
  const openLoginModal = (book) => {
    setModalOpen(true);
    setBookData(book);
  };
  
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  
  return (
    <UnivesalGeneralBlock >      
      <RecomendedDashboard />      

      <UnivesalMainConteainer >
        <HeaderAndPaginationBlock>
          <MainBlockTitle>Recommended</MainBlockTitle>
          <Pagination  totalPages={totalPages} handlePageChange={handlePageChange} page={page} />
        </HeaderAndPaginationBlock>

        <BooksTen>
          {results?.map((book) => (
            <CardBook  key={book._id} book={book} openLoginModal={openLoginModal} />
          ))}
        </BooksTen>  
        { !results.length && <EmptyScreensaver purt="Recomended" />}
      </UnivesalMainConteainer>

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <DetailedInformationBook bookData={bookData} closeModals={() => setModalOpen()} btnLabel="Add to library"/>
      </PortalModal>
    </UnivesalGeneralBlock>
  );
}  