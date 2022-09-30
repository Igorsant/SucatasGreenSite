import styled from "styled-components";
import { Header } from "./components/header";
import heart from "./assets/heart.jpg";
import Bottle from "./assets/bottle.jpg";
import Garbage from "./assets/garbage.jpg";
import Toys from "./assets/toys.jpeg";

const BodyApp = styled.div`
  background: url(${heart}) no-repeat center fixed;
  height: 100vh;
  background-size: cover;
  opacity: 0.8;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledContent = styled.div<{ height: string; backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 5px 5px #000000;
`;

const StyledH1 = styled.h2`
  text-align: center;
  padding: 20px;
`;

const StyledBottles = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  opacity: 0.5;
`;

const StyledP = styled.p`
  position: absolute;
  font-size: 40px;
  top: 30px;
  left: 10px;
  width: 100%;
  text-align: center;
`;

const StyledRelativeContainer = styled.div`
  position: relative;
  top: 0px;
  height: 100%;
`;

export const App = () => {
  return (
    <BodyApp>
      <Header />
      <StyledContent backgroundColor="#1b4f0b9f" height="auto">
        <StyledH1>Olá, me chamo Lolita</StyledH1>
      </StyledContent>

      <StyledContent backgroundColor="black" height="370px">
        <StyledRelativeContainer>
          <StyledBottles src={Bottle} alt="" />
          <StyledP>Transformo todas essas garrafas pet...</StyledP>
        </StyledRelativeContainer>
      </StyledContent>

      <StyledContent backgroundColor="black" height="370px">
        <StyledRelativeContainer>
          <StyledBottles src={Toys} alt="" />
          <StyledP>...Em brinquedos para crianças :)</StyledP>
        </StyledRelativeContainer>
      </StyledContent>
    </BodyApp>
  );
};
