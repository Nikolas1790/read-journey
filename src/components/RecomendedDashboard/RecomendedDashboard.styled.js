import styled from 'styled-components'

export const Filters = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`

export const FilterTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 14px;
`
export const ButtonConteiner = styled.div`
  display: flex;
  justify-content: space-between;
`;