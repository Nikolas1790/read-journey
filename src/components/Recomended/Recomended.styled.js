import color from 'common/GlobalColers'
import styled from 'styled-components'

export const HeaderAndPaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`

export const PaginationBtn = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  background: transparent;
  border-radius: 50%; 
  border: 1px solid ${color.whiteLightTranslucent};

  &:last-child {
    margin-right: 0; 
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 1440px) {
 
  }
`

export const PaginationSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${(props) => (props.stoke === "true" ? color.whiteLightTranslucent : color.whitePrimary)};
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

///////////////////////////////////////////////////////////////////////////
export const BooksTen = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;
`