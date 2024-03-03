import { HeaderAndPaginationBlock, PaginationBtn,RecomendedBlock, RecommendedBooksBlock, RecommendedTitle} from "./Recomended.styled"
import sprite from '../../img/sprite.svg';
import RecomendedDashboard from "components/RecomendedDashboard/RecomendedDashboard";
import Dashboard from "components/Dashboard/Dashboard";

export default function Recomended() {
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
      </RecommendedBooksBlock>
    </RecomendedBlock>
  );
}
  