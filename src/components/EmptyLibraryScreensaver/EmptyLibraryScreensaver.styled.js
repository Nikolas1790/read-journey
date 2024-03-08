import color from 'common/GlobalColers'
import styled from 'styled-components'


export const EmptyLibraryBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* width: 247px; */
  margin-top: 147px;
`
export const EmptyLibraryPicture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: ${color.blackWhite};
  margin-bottom: 20px;
`

export const EmptyLibraryText = styled.p`
  text-align: center;
  width: 274px;
`

export const EmptyLibrarySpan = styled.span`
  color: ${color.gryeLight};
`