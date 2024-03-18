// import color from 'common/GlobalColers'
import styled from 'styled-components'

export const HeaderAndPaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const BooksTen = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;

  height: 260px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {    
    height: 523px;
  }
`