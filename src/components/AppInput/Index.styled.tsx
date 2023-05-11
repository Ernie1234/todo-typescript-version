import styled from "styled-components";

export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AppInput = styled.input`
  padding: 0.7rem;
  font-size: 2rem;
  border: 1px solid #4e4e4e;
  outline: none;
  background-color: transparent;

  &:focus {
    border: 1px solid #4e4e4e;
    outline: none;
    color: #4e4e4e;
  }
`;
