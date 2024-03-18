import color from 'common/GlobalColers'
import styled from 'styled-components'

export const Filters = styled.div`  
`

export const StartWorkoutBlock = styled.div`
  width: 100%;
  max-width: 295px;
  height: 244px;
  border-radius: 12px;
  background: ${color.gryeBlack};
  padding: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    max-width: 313px;
    height: 272px;
    padding: 26px 20px;
    margin-top: 0px;
  }
  @media (min-width: 1440px) {
    height: 259px;
    padding: 20px;
    
  }
`
export const StartWorkoutTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
` 

export const Arguments = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 385px) {
    gap: 4px; 
  }
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
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardAutor = styled.p`
  font-size: 10px;
  color: ${color.gryeLight};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`