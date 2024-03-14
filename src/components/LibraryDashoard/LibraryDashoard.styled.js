import color from 'common/GlobalColers'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MainBlockLibraryDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Filters = styled.div`
  margin-bottom: 20px;
`

export const StartWorkoutBlock = styled.div`
  width: 313px;
  height: 259px;
  border-radius: 12px;
  background: ${color.gryeBlack};

  padding: 20px;
`
export const StartWorkoutTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;
` 

export const Arguments = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`
export const CardRecomended = styled.li`
  width: 71px;
  height: 141px;  
`

export const CardImg = styled.img`
  width: 71px;
  height: 107px;
  border-radius: 8px;  
  margin-bottom: 8px;
`

export const CardTitle = styled.h4`
  font-size: 10px;
  font-weight: 700;

  margin-bottom: 2px;
  /* Ограничиваем текст одной строкой */
  white-space: nowrap;
  /* Если текст не помещается, обрезаем его и добавляем три точки в конце */
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardAutor = styled.p`
  font-size: 10px;
  color: ${color.gryeLight};

  /* Ограничиваем текст одной строкой */
  white-space: nowrap;
  /* Если текст не помещается, обрезаем его и добавляем три точки в конце */
  overflow: hidden;
  text-overflow: ellipsis;
`

export const LinkToHome = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.gryeLight}; 
  margin: auto 0;
  
  &:hover::after,
  &:focus::after {
    color:red; 
  }
`;

export const LinkTextToHome = styled.p`
  position: relative; 
  transition: color 0.3s linear; 

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px; 
    height: 1px; 
    background: ${color.gryeLight}; 
    transition: background 0.3s linear; 
  }

  &:hover,
  &:focus {
    color: ${color.whitePrimary};    
    &::after {
      background: ${color.whitePrimary};  
    }
  }
`;