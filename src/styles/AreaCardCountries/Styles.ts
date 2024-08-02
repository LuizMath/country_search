import styled from "styled-components";

export const Main = styled.section`
  width: 90%;
  height: auto;
  margin: 100px 0px 100px 0px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, 300px);
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;
