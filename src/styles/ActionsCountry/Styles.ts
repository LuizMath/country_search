import styled from "styled-components";

export const SectionAction = styled.section`
  width: 90%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 120px;
  }
`;

export const InputAction = styled.input.attrs({
  placeholder: "Search for a country...",
})`
  max-width: 450px;
  width: 100%;
  outline: none;
  padding: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  background: ${(props) => props.theme.backgroundItem};
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 768px) {
    height: 50px;
  }
  &::placeholder {
    color: ${(props) => props.theme.text};
  }
`;

export const SelectAction = styled.select`
  width: 150px;
  height: 50px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: 16px;
  background: ${(props) => props.theme.backgroundItem};
  padding-left: 20px;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  cursor: pointer;
`;

export const OptionAction = styled.option`
  color: #000 !important;
`;
