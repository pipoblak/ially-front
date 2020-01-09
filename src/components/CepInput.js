import React from 'react';
import styled from 'styled-components';
import Colors from 'variables/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 16px;
  color: #9B9B9B;
  margin: auto;
  margin-right: 16px;
`;

const Input = styled.input`
  font-size: 18px;
  border: none;
  color: rgba(0, 0, 0, 0.42);
  margin: auto;
  margin-right: 0;
  width: 210px;
  height: 32px;
`;

export const CepInput = ({label, placeholder, options,  ...props}) => {
  return(
    <Wrapper {...props}>
      <Label>{label}</Label>
      <Input name="cep" placeholder={placeholder}/>
    </Wrapper>
  )
}
