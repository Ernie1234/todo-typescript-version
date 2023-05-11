import styled from "styled-components";
import { Title } from "../styles";

const HeaderStyle = styled.header`
  margin-bottom: 2rem;
`;
const SubTitleStyle = styled.header`
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 1.1;
  color: #4e4e4e;
  text-align: center;
`;

function Header() {
  return (
    <HeaderStyle>
      <Title>Task Manager</Title>
      <SubTitleStyle>What need to be done!</SubTitleStyle>
    </HeaderStyle>
  );
}

export default Header;
