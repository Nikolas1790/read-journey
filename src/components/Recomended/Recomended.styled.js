import color from 'common/GlobalColers'
import styled from 'styled-components'

// export const RecomendedBlock = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;

//   padding:  16px 0;
// `

//////////////////////////////////////////


// export const RecommendedBooksBlock = styled.div`
//   width: 847px;
//   height: 651px;
//   border-radius: 30px;

//   background: ${color.blackLight};
//   padding: 40px 40px 28px 40px;
// `

export const HeaderAndPaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

// export const RecommendedTitle = styled.h1`
//   font-size: 28px;
//   font-weight: 700;
//   line-height: 1.14;
// `
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
  /* width: 137px;
  height: 248px; */
  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;
`

// export const BookCard = styled.li`
//   width: 137px;
//   height: 248px;
//   /* margin-righ+t: 8px; */

//   background: transparent;
//   /* border-radius: 50%;  */
//   /* border: 1px solid ${color.whiteLightTranslucent}; */

//   &:last-child {
//     margin-right: 0; 
//   }
// `
// export const BookImg = styled.img`
//   width: 137px;
//   height: 208px;

//   border-radius: 8px; 
//   margin-bottom: 8px;
// `

// export const BookTitle = styled.h3`
//   font-size: 14px ;
//   font-weight: 700;
//   margin-bottom: 2px;

//    /* Ограничиваем текст одной строкой */
//    white-space: nowrap;

//      /* Если текст не помещается, обрезаем его и добавляем три точки в конце */
//   overflow: hidden;
//   text-overflow: ellipsis;
// `

// export const BookAutor = styled.p`
//   font-size: 10px ;
//   color: ${color.gryeLight};
// `