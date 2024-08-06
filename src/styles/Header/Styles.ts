import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nunito Sans", sans-serif;
`;

export const SubHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 525px) {
    flex-direction: column;
    height: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.theme.text};
`;

export const Mode = styled.button`
  width: 120px;
  padding: 5px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: -2px;
`;
