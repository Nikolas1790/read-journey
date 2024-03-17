import color from "common/GlobalColers";
import styled from "styled-components";

export const Conteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 342px;
  height: 290px;
  background: ${color.blackLight};
  border-radius: 12px;
  padding: 60px 46px;
  
  @media (min-width: 768px) {
    padding: 49px ;
  }
  @media (min-width: 1440px) {
  }
`;

export const ClosingSymbol = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.blackPrimary};
  background: transparent;
  @media (min-width: 768px) {
    right: 16px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px; 
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 68px;
    height: 70px; 
    margin-bottom: 32px;
  }
  /* @media (min-width: 1440px) {
    margin: 0 auto 163px auto;
  } */
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 14px;
  }
  @media (min-width: 1440px) {
  }
`
export const Text = styled.p`
  text-align: center;
  color: ${color.gryeLight};
`
export const TextSpan = styled.span`  
  color: ${color.whitePrimary};
`