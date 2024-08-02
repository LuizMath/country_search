import styled from "styled-components";

export const Card = styled.aside`
  width: 300px;
  height: 370px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: ${(props) => props.theme.backgroundItem};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

export const Flag = styled.img`
  width: 100%;
  height: 50%;
`;

export const InformationsArea = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 30px auto;
`;

export const NameCountry = styled.span`
  color: ${(props) => props.theme.text};
  font-family: "Nunito Sans", sans-serif;
  font-weight: 800;
  font-size: 20px;
`;

export const OtherInformations = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;

export const GroupOtherInformations = styled.li`
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.text};
  font-weight: 600;
`;

export const TextInformations = styled.span`
  font-weight: 300;
  color: ${(props) => props.theme.text};
`;
