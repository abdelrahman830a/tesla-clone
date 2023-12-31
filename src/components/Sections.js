import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function section({
  title,
  describtion,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  leftLink,
  rightLink,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{describtion}</p>
        </ItemText>
      </Fade>

      <div>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton><a href={leftLink}>{leftBtnText}</a></LeftButton>
          {rightBtnText && <RightButton><a href={rightLink}>{rightBtnText}</a></RightButton>}
        </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
      </div>
    </Wrap>
  );
}

export default section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;

  a{
    color: white;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;

  a{
    color: black;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
  overflow-x: hidden;
`;
