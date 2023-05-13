import React from "react";
import styled from "styled-components";
import Button from "./Button";

const RowBtnStyle = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

type Props = {
  handleALL: () => void;
  handleActive: () => void;
  handleComplete: () => void;
};

const RowBtn: React.FC<Props> = ({
  handleALL,
  handleActive,
  handleComplete,
}) => {
  return (
    <RowBtnStyle>
      <Button
        variant="outlined"
        btnType="button"
        margin
        onClick={handleALL}
        btnText="All"
      />
      <Button
        variant="outlined"
        btnType="button"
        margin
        onClick={handleActive}
        btnText="Active"
      />
      <Button
        btnType="button"
        variant="outlined"
        margin
        onClick={handleComplete}
        btnText="Completed"
      />
    </RowBtnStyle>
  );
};

export default RowBtn;
