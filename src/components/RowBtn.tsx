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
  handleAllClick: () => void;
  handleActiveClick: () => void;
  handleCompletedClick: () => void;
};

const RowBtn: React.FC<Props> = ({
  handleAllClick,
  handleActiveClick,
  handleCompletedClick,
}) => {
  return (
    <RowBtnStyle>
      <Button
        variant="outlined"
        btnType="button"
        margin
        onClick={handleAllClick}
        btnText="All"
      />
      <Button
        variant="outlined"
        btnType="button"
        margin
        onClick={handleActiveClick}
        btnText="Active"
      />
      <Button
        btnType="button"
        variant="outlined"
        margin
        onClick={handleCompletedClick}
        btnText="Completed"
      />
    </RowBtnStyle>
  );
};

export default RowBtn;
