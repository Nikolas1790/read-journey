import color from 'common/GlobalColers'
import styled from 'styled-components'

export const HeaderAndPaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
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

export const PaginationSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${(props) => (props.stoke === "true" ? color.whiteLightTranslucent : color.whitePrimary)};
`

///////////////////////////////////////////////////////////////////////////
export const BooksTen = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;
`