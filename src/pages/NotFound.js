import React from 'react';
import styled from 'styled-components';
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


const SloganWrapper = styled.div`
  transition: all .5s;
  display: flex;
`;

const Slogan = styled.span`
  color: ${ Colors.primary };
  font-weight: 500;
  font-size: ${p=> p.small ? 24 : 72}px;
  margin-top: 8px;
`;

export const NotFound = ({ toggled=false }) => {
  return(
    <Container>
      <SloganWrapper>
        <Slogan>
          404
        </Slogan>
      </SloganWrapper>
      <Slogan small>
        Rota não encontrada =(
      </Slogan> 
    </Container>
  )
}
