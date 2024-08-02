import styled from "styled-components";

export const MainSection = styled.section`
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 450px;
  @media screen and (max-width: 768px) {
    height: 650px;
  }
`;

export const TitleName = styled.h1`
  font-size: 35px;
  font-weight: 800;
  margin-top: -40px;
`;

export const ListInformation = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5px;
  font-size: 18px;
  margin-top: -40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export const ItemInformation = styled.li`
  display: flex;
  gap: 5px;
  font-weight: 300;
  &:nth-child(8) {
    grid-column: 1 / 2;
  }
`;

export const TitleInformation = styled.span`
  font-weight: 600;
`;
