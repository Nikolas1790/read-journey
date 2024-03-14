import color from 'common/GlobalColers';
import styled from 'styled-components'

export const BasicInfBook = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 44px;
`

export const BasicImg = styled.img`
  width: 224px;
  height: 340px;
  border-radius: 8px;
  margin-bottom: 25px;
`

export const TitleBook = styled.h2`
  font-size: 20px;
  margin-bottom: 4px;

`;

export const AuthorBook = styled.p`
  color: ${color.gryeLight};
  margin-bottom: 25px;
`;