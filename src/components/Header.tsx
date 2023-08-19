import React from 'react';
import { styled } from 'styled-components';
import starwarsImage from '../assets/starwars.png';

const HeaderContainer = styled.div`
  position: absolute;
  top: -17rem;
  left: 11rem;
  transform: translateX(-50%);
  height: 100px;
  z-index: 10;
   @media (max-width: 768px) {
    left: -16rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: 9.1rem;
  }
  @media (min-width: 1440px) {
    left: 28.8rem;
  }
`;

const Ellipse1 = styled.div`
  width: 695.06px;
  height: 695.06px;
  left: 347.53px;
  top: 0;
  position: absolute;
  transform: rotate(30deg);
  transform-origin: 0 0;
  border-radius: 9999px;
  border: 0.50px #FAE60A solid;
  
`;

const Ellipse2 = styled.div`
  width: 488px;
  height: 488px;
  left: 718.74px;
  top: 718.74px;
  position: absolute;
  transform: rotate(-180deg);
  transform-origin: 0 0;
  border-radius: 9999px;
  border: 0.50px white solid;
`;

const CenteredImage = styled.img`
  position: absolute;
  left: 476.74px;
  top: 477.74px;
  transform: translate(-50%, -50%);
`;

const CenteredLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 476.74px;
  top: 822.74px;
  transform-origin: 0 0;
  border: 0.50px white solid;
`;

function Header() {
  return (
    <HeaderContainer>
      <Ellipse1 />
      <Ellipse2 />
      <CenteredImage src={ starwarsImage } alt="Star Wars" />
      <CenteredLine />
    </HeaderContainer>
  );
}

export default Header;
