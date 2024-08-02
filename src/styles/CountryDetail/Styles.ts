import styled from "styled-components";

export const MainSection = styled.section`
  width: 90%;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 800px 1fr;
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: 1460px) {
    grid-template-columns: 100%;
    row-gap: 30px;
  }
`;
