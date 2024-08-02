import styled from "styled-components";

export const ListBorders = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ItemBorders = styled.li`
  background: ${(props) => props.theme.backgroundItem};
  width: auto;
  padding: 5px 10px 5px 10px;
  height: 35px;
  border: none;
  color: ${(props) => props.theme.text};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

export const TitleBorder = styled.h3``;

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
  gap: 20px;
`;
