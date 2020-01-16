import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${p => p.size || 32 }px;
  height: ${p => p.size || 32 }px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E8E8E8;
  border-radius: 100%;
  margin: 16px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Avatar = ({ size , source }) => {
  return(
    <Container size={size}>
      <Image src={source} />
    </Container>
  );
}