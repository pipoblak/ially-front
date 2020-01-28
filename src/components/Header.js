import React from 'react';
import styled from 'styled-components';
import Logo from '../logo.svg';
import Colors from 'variables/colors';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  position: relative;
`;

const ImgLogo = styled.img`
  height: ${ p => p.toggled ? 50: 92}px;
  transition: all .35s;
`;

const SloganWrapper = styled.div`
  transition: all .5s;
  ${p => p.toggled && 'opacity: 0;'}
  display: flex;
`;

const Slogan = styled.span`
  color: ${ Colors.primary };
  font-weight: 500;
  font-size: 24px;
  margin-top: 8px;
  transition: all .25s;
  transition-delay: .25s;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
  ${p => p.toggled && 'visibility: collapse; font-size: 0px; transition-delay: .0s;'}
`;

export const Header = ({ toggled=false }) => {
  return(
    <Container toggled={toggled}>
      <ImgLogo src={Logo} alt="Logo" toggled={toggled}/>
      <SloganWrapper toggled={toggled}>
        <Slogan toggled={toggled}>
          Seu veículo nas mão certas
        </Slogan>
      </SloganWrapper>
    </Container>
  )
}
