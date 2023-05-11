import styled from "styled-components";

export const ListItemStyle = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export const IFRstyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
`;
export const ItemInputStyle = styled.input`
  margin-right: 2rem;
  font-size: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border: 1rem solid red;
`;
export const LabelStyle = styled.label`
  font-weight: 300;
  line-height: 1.1;
  color: #4e4e4e;
  text-align: center;

  text-transform: capitalize;
  font-size: 2rem;
  width: 100%;
  text-align: left;
  color: #646cff;
`;
export const ISRstyle = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
