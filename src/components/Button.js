import React from 'react';
import styled from 'styled-components';
import Colors from 'variables/colors';

const Button = styled.button`
  color: white;
  background: ${Colors.primary};
  padding: 16px 32px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  &:hover {
    background: ${Colors.secondary};
  }
`;

export const DefaultButton = ({children, ...props}) => {
  return(
    <Button {...props}>
      {children}
    </Button>
  )
}
