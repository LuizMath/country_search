import styled from "styled-components";

export const MainSection = styled.section`
  width: 100%;
`;

export const BackToHome = styled.button`
  background: ${(props) => props.theme.backgroundItem};
  width: 110px;
  height: 40px;
  border: none;
  color: ${(props) => props.theme.text};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

export const ImgArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const Flag = styled.img`
  max-width: 600px;
  height: 450px;
  width: 100%;
  margin-top: 100px;
  @media screen and (max-width: 1000px) {
    max-width: 450px;
    height: 250px;
  }
  @media screen and (min-width: 1001px) and (max-width: 1460px) {
    max-width: 550px;
    height: 350px;
  }
`;

export const Icon = styled.img`
  width: 30px;
`;
