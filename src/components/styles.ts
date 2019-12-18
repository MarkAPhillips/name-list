import styled from "styled-components";

export const Input = styled.input`
  padding: 0 10px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 2px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  color: gray;
  height: 34px;
  background: transparent;
  background-image: none;
  padding: 0 8px;
  line-height: 34px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 6px 10px;
  border-radius: 2px;
  background: rgb(66, 139, 202);
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.7;
  }
`;

export const NameListItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  &:nth-child(odd) {
    background: rgb(240, 240, 240);
  }
  div {
    padding: 4px;
    &:last-child {
      cursor: pointer;
      padding-right: 8px;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
