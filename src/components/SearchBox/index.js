import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectInput } from 'components/SelectInput';
import { CepInput } from 'components/CepInput';
import { Wrapper, Container } from './styles';
import { Creators } from 'store/ducks/components/SearchBox';

const SearchBoxElement = ({
  toggled = false, componentState, getProfessionals,
  selectProfissional, getServices
}) => {
  const { loading: { professionals: loadingProfessionals, services: loadingServices }, professionals, selectedProfessional, services } = componentState;
  useEffect(()=>{
    // Startup Component
    getProfessionals();
  }, [getProfessionals])
  useEffect(()=>{
    selectedProfessional && getServices(selectedProfessional)
  }, [selectedProfessional, getServices])

  return(
    <Wrapper>
      <Container toggled={toggled}>
        <SelectInput
          label="Eu preciso de um(a)"
          options={professionals.map(e => ({ label: e.name, value: e.slug}))}
          placeholder={"Escolha um profissional"}
          onChange={ (prof) => selectProfissional(professionals.find( e => e.slug === prof.value))}
          isLoading={loadingProfessionals}
          loadingMessage={()=>"Carregando profissionais..."}
        />
        <SelectInput
          label="Especialista em"
          options={services.map(e => ({ label: e.name, value: e.slug}))}
          placeholder="Escolha o serviço"
          isLoading={loadingServices}
          noOptionsMessage={ () => selectProfissional ? "Ainda não temos opções para este profissional" : "Primeiro, escolha um profissional"}
          loadingMessage={()=>"Carregando serviços..."}
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