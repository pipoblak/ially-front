import React, { useState } from 'react';
import styled from 'styled-components';
import { Header, SearchBox, DefaultButton } from 'components';

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  width: 100%;
  flex: 1;
  height: 200px;
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

export default () => {
  const [toggled, setToggled] = useState(false);
  return(
    <Wrapper  toggled={toggled}>
      <Container toggled={toggled}>
        <Header toggled={toggled} />
        <SearchBox />
        <ButtonWrapper>
          <DefaultButton alt="vamos lá" onClick={()=>setToggled(!toggled)}>
            Vamos lá
          </DefaultButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
}