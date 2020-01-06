import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1050px;
  border: 1px solid #eee;
  border-radius: 6px;
`;

export const SearchBox = ({ toggled = false }) => {
  return(
    <Wrapper>
      <Container>

      </Container>
    </Wrapper>
  );
}