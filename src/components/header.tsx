import styled from "styled-components";
import logo from "../assets/logo.png";
import heart from "../assets/heart.jpg";

const StyledHeader = styled.div`
  height: 100px;
  background-color: #00000092;
  display: flex;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const StyledLi = styled.li`
  margin-right: 20px;
  padding: 10px 10px 0 10px;
  border-radius: 10px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <a href="/" style={{ marginLeft: "100px" }}>
        <img src={logo} alt="" style={{ height: "100px" }} />
      </a>
      <StyledUl>
        <StyledLi>
          <h5>Contate me</h5>
        </StyledLi>
        <StyledLi>
          <h5>Sobre mim</h5>
        </StyledLi>
      </StyledUl>
    </StyledHeader>
  );
};
