import React from 'react';
import styled from 'styled-components';
import { SelectInput } from './SelectInput';

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
  background: rgba(255,255,255,1);
  padding: 32px;
  display: flex;
  flex-direction: row;
`;

export const SearchBox = ({ toggled = false }) => {
  return(
    <Wrapper>
      <Container>
        <SelectInput
          label="Eu preciso de um(a)"
          options={[]}
          placeholder="Escolha um profissional"
        />
        <SelectInput
          label="Especialista em"
          options={[]}
          placeholder="Escolha o serviço"
        />
        <SelectInput
          label="Eu preciso de um(a)"
          options={[]}
          placeholder="Escolha um profissional"
        />
      </Container>
    </Wrapper>
  );
}