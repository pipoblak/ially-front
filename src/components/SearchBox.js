import React from 'react';
import styled from 'styled-components';
import { SelectInput } from './SelectInput';
import { CepInput } from './CepInput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${p=> !p.toggled ? '900px':'100%'};
  border:  ${p=> !p.toggled ? '1px solid #eee' : 'none'};
  border-bottom:  ${p=> p.toggled ? '1px solid #eee' : 'none'};
  border-radius: 6px;
  background: rgba(255,255,255,1);
  padding: ${p=> !p.toggled ? '32px' : '0 16px'};
  padding-bottom:  ${p=> p.toggled ? '16px' : '0px  '};
  display: flex;
  flex-direction: row;
`;

export const SearchBox = ({ toggled = false }) => {
  return(
    <Wrapper>
      <Container toggled={toggled}>
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
        <CepInput
          label="Perto de"
          placeholder="Busque por Bairro ou CEP"
        />
      </Container>
    </Wrapper>
  );
}