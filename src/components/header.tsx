import styled from "styled-components";
import logo from "../assets/logo.png";
import heart from "../assets/heart.jpg";

const StyledHeader = styled.div`
  @media screen and (min-width: 600px) {
    height: 100px;
  }
  height: 60px;
  background-color: #00000092;
  display: flex;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (min-width: 600px) {
    font-size: 30px;
  }
  font-size: 15px;
`;

const StyledLi = styled.li`
  margin-right: 20px;
  padding: 10px 10px 0 10px;
  border-radius: 10px;
`;

const StyledLogo = styled.img`
  @media screen and (min-width: 600px) {
    height: 100px;
  }
  height: 60px;
`;

const StyledLinkLogo = styled.a`
  @media screen and (min-width: 600px) {
    margin-left: 100px;
  }
  margin-left: 50px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLinkLogo href="/">
        <StyledLogo src={logo} alt="logo sucatas green" />
      </StyledLinkLogo>
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
