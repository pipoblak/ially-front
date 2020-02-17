import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectInput } from 'components/SelectInput';
import { CepInput } from 'components/CepInput';
import { Wrapper, Container } from './styles';
import { Creators } from 'store/ducks/components/SearchBox';

const SearchBoxElement = ({ toggled = false, componentState, getProfessionals }) => {
  const { loading: { professionals: loadingProfessionals }, professionals } = componentState;
  useEffect(()=>{
    // Startup Component
    getProfessionals();
  }, [getProfessionals])

  return(
    <Wrapper>
      <Container toggled={toggled}>
        <SelectInput
          label="Eu preciso de um(a)"
          options={professionals.map(e => ({ label: e.name, value: e.slug}))}
          placeholder={loadingProfessionals ? "Carregando Profissionais..." : "Escolha um profissional"}
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

const mapStateToProps = state => ({
  componentState: state.Components.SearchBox
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export const SearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBoxElement);