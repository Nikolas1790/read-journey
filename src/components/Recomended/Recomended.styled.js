import styled from 'styled-components'

export const HeaderAndPaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`
export const BooksTen = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;
`