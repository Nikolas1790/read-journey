import color from 'common/GlobalColers'
import { Field } from 'formik'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


export const RecomendedBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding:  16px 0;


`




export const DashboardBlock = styled.div`
  width: 353px;
height: 651px;
border-radius: 30px;

background: ${color.blackLight};
padding: 40px 20px 20px 20px;
;`

/////////////hhhhhhhhhhhhh////////////
export const Filters = styled.div`
  margin-bottom: 20px;
`

export const FilterTitle = styled.h3`
font-size: 14px;
font-weight: 500;
  margin-bottom: 8px;
  margin-left: 14px;
`

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 8px;
  margin-bottom: 20px;  
`;

export const FormFieldConteiner = styled.div`
  position:relative;
`;

export const FormFieldLabel = styled.label`
  position:absolute;
  top: 16px;
  left: 14px;
  color: ${color.gryeLight};
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 12px;
  padding: 16px 14px 16px 65px;
  padding-left: ${(props) => props.paddindleft || '86px'};
  outline: none;
  color: ${color.whitePrimary};
  background: ${color.gryeBlack};
`;















//////////////////////////////////////////////////

export const StartWorkoutBlock = styled.div`
  width: 313px;
  height: 272px;
  border-radius: 12px;

  background: ${color.gryeBlack};

  padding: 20px;
  margin-bottom: 20px;
`
export const StartWorkoutTitle = styled.p`
  font-size: 20px;
font-weight: 700;
line-height: 1;

margin-bottom: 40px;
`
export const Arguments = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: ${(props) => props.maginbottom || 'auto'};
`
export const SeriaNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 50%;
  color: ${color.blackLight};
  background: ${color.whitePrimary};
  
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

export const LinkToLibrary = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;  color: ${color.gryeLight}; 
  
  
  &:hover::after,
  &:focus::after {
    color:red; 
  }
`;
export const LinkTextToLibrary = styled.p`

  /* font-weight: 500; */

  position: relative; 

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px; 
    height: 1px; 
    background: ${color.gryeLight}; 
    transform: scaleX(1); 
    transition: transform 0.25s ease-in-out; 
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(0); 
  }
`;




///////////////////////////////////////////////

export const QuoteBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 313px;
  height: 83px;
  border-radius: 12px;

  background: ${color.gryeBlack};

  padding: 14px 20PX;
`
export const BlackBlock = styled.div`
  width: 40px;
  height: 40px;
  background: ${color.black};
`

export const Quote = styled.p`
  width: 219px;
  color: ${color.gryeLight};
 
`

export const QuoteSpan = styled.span`  
  color: ${color.whitePrimary}
 
`
















//////////////////////////////////////////
export const RecommendedBooksBlock = styled.div`
  width: 847px;
height: 651px;
border-radius: 30px;

  background: ${color.blackLight}
`