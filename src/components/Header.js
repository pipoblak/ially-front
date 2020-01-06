import React from 'react';
import styled from 'styled-components';
import Logo from '../logo.svg';
import Colors from 'variables/colors';

const Container = styled.div`
  width: 100%;
  height: ${ p => p.toggled ? 70: 92}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgLogo = styled.img`
  height: 100%;
`;

const Slogan = styled.span`
  color: ${ Colors.primary };
  font-weight: 500;
  font-size: 24px;
  margin-top: 8px;
  {p => p.hidden && 'display: none;'}
`;

export const Header = ({ toggled=false }) => {
  return(
    <Container toggled={toggled}>
      <ImgLogo src={Logo} alt="Logo"/>
      <Slogan hidden={toggled}>
        Seu veículo nas mão certas
      </Slogan>
    </Container>
  )
}
