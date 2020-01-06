import React from 'react';
import styled from 'styled-components';
import { Header } from 'components';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return(
    <Container>
      <Header />
    </Container>
  );
}