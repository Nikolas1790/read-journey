import color from 'common/GlobalColers'
import styled from 'styled-components'

export const StarPicture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${color.blackWhite};
  margin: 0 auto;
`

export const ProgressTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
`

export const ProgressText = styled.p`
  color: ${color.gryeLight};
  margin-bottom: 60px;
`


