import color from "common/GlobalColers";
import styled from "styled-components";

export const Conteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 100%;
  background: ${color.blackLight};
  border-radius: 12px;
  padding: 40px ;

  @media (min-width: 768px) {
    width: 500px;
    height: 483px;
    padding: 50px ;
  }
`;

export const ClosingSymbol = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.blackPrimary};
  background: transparent;
  transition: transform 0.25s linear; 
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CoverBook = styled.img`
  width: 140px;
  height: 213px;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 153px;
   height: 233px;
  }
`;

export const TitleBook = styled.h2`
  text-align: center;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 400px;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AuthorBook = styled.p`
  font-size: 12px;
  color: ${color.gryeLight};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 400px;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PagesBook = styled.p`
  font-size: 10px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;