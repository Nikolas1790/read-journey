import color from 'common/GlobalColers'
// import { NavLink } from 'react-router-dom'
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

export const StartWorkoutBlock = styled.div`
  width: 295px;
  height: 244px;
  border-radius: 12px;

  background: ${color.gryeBlack};
  padding: 20px;

  @media (min-width: 768px) {
    width: 313px;
    height: 272px;
  }
  @media (min-width: 1440px) {
  margin-bottom: 20px;
  }
`
export const StartWorkoutTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
  }
`
export const ArgumentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 26px;
  }
`
export const Arguments = styled.div`
  display: flex;
  gap: 12px;
`
export const SeriaNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;  
  color: ${color.blackLight};
  background: ${color.whitePrimary};  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`
export const TextOne = styled.p`
  width: 190px;  
`
export const TextTwo = styled.p`
  width: 200px;  
`

export const TextSpan = styled.span`
 color: ${color.gryeLight};  
`

// export const LinkToLibrary = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: ${color.gryeLight};   
  
//   &:hover::after,
//   &:focus::after {
//     color:red; 
//   }
// `;
// export const LinkTextToLibrary = styled.p`
//   position: relative; 
//   transition: color 0.3s linear; 

//   &::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0px; 
//     height: 1px; 
//     background: ${color.gryeLight}; 
//     transition: background 0.3s linear; 
//   }
//   &:hover,
//   &:focus {
//     color: ${color.whitePrimary};
    
//     &::after {
//       background: ${color.whitePrimary};  
//     }
//   }
// `;

export const QuoteBlock = styled.div`
  display: none;

  @media (min-width: 768px) {  
  }
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 313px;
    height: 83px;
    border-radius: 12px;

    background: ${color.gryeBlack};
    padding: 14px 20PX;
  }
`
export const Quote = styled.p`
  width: 219px;
  color: ${color.gryeLight}; 
`

export const QuoteSpan = styled.span`  
  color: ${color.whitePrimary}; 
`