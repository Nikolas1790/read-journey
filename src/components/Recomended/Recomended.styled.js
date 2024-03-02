import color from 'common/GlobalColers'
import styled from 'styled-components'

export const RecomendedBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding:  16px 0;
`

//////////////////////////////////////////
export const RecommendedBooksBlock = styled.div`
  width: 847px;
  height: 651px;
  border-radius: 30px;

  background: ${color.blackLight};
  padding: 40px 40px 28px 40px;
`

export const HeaderAndPaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const RecommendedTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
`
export const PaginationBtn = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 8px;

  background: transparent;
  border-radius: 50%; 
  border: 1px solid ${color.whiteLightTranslucent};

  &:last-child {
    margin-right: 0; 
  }
`