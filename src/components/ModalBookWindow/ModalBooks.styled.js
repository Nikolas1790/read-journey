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
  padding: 49px ;
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
`;

export const Img = styled.picture`
  width: 68px;
  height: 70px; 
  margin-bottom: 32px;
`
export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
`
export const Text = styled.p`
  text-align: center;
  color: ${color.gryeLight};
`
export const TextSpan = styled.span`  
  color: ${color.whitePrimary};
`