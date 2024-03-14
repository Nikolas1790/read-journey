import color from "common/GlobalColers";
import styled from "styled-components";

export const Conteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 483px;
  background: ${color.blackLight};
  border-radius: 12px;
  padding: 50px ;
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

export const CoverBook = styled.img`
  width: 153px;
  height: 233px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const TitleBook = styled.h2`
  max-width: 400px;
  font-size: 20px;
  margin-bottom: 2px;

  /* Ограничиваем текст одной строкой */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AuthorBook = styled.p`
  max-width: 400px;
  color: ${color.gryeLight};
  margin-bottom: 4px;

  /* Ограничиваем текст одной строкой */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PagesBook = styled.p`
  font-size: 10px;
  margin-bottom: 32px;
`;