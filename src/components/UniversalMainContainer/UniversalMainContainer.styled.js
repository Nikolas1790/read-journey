import color from 'common/GlobalColers'
import styled from 'styled-components'

export const MainBlock = styled.div`
  width: 335px;
  height: 100%;
  border-radius: 30px;
  background: ${color.blackLight};
  padding: 40px 20px;

  @media (min-width: 768px) {
    width: 704px;
    padding: 40px;
  }
  @media (min-width: 1440px) {
    width: 847px;
    height: 651px;
    padding: 40px 40px 28px 40px;
  }
`
export const MainBlockTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.14;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`