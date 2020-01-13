import React, { useState } from 'react';
import styled from 'styled-components';
import { Header, SearchBox, DefaultButton } from 'components';
import BackgroundImage from '../../background.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  max-height: 100vh;
  max-width: 100vw;
`;

const ContentArea = styled.div`
  position: relative;
  z-index: 1;
  top: 50%;
  width: 100%;
  flex: 1;
  height: ${p=> p.toggled ? '100%' : '368px'};
  transition: all .35s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  ${p => p.toggled && 'top: 0;'}
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  position: relative;
  top: -50%;
  transition: all .35s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  ${p => p.toggled && 'top: 0;'}
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.img`
  width: 100%;
  position: absolute;
  bottom: ${p=> p.toggled ? '-100%': 0};
  transition: all .5s;
  z-index: 0;
`;

const ListWrapper = styled.div`
  width: 100%;
  background: #F4F4F4;
  height: 100%;
  flex: 1;
`;

export default () => {
  const [toggled, setToggled] = useState(false);
  return(
    <Wrapper toggled={toggled}>
      <ContentArea toggled={toggled}>
        <Container toggled={toggled}>
          <Header toggled={toggled}/>
          <SearchBox toggled={toggled}/>
          {!toggled && (
            <ButtonWrapper>
              <DefaultButton alt="vamos lá" onClick={()=>setToggled(!toggled)}>
                Vamos lá
              </DefaultButton>
            </ButtonWrapper>
          )}
        </Container>
        {toggled && (
          <ListWrapper>
          </ListWrapper>
        )}
      </ContentArea>
      <Background src={BackgroundImage} toggled={toggled}/>
    </Wrapper>
  );
}