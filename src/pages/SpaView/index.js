import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, SearchBox, DefaultButton } from 'components';
import BackgroundImage from '../../background.svg';
import { Creators } from 'store/ducks/SpaView';
import List from './components/List';
import { Wrapper, ContentArea, Container, ButtonWrapper, Background } from './styles';

const SpaView = ({ history, location: { pathname } , state:{ toggled, loading}, setToggled, ...rest }) => {
  useEffect(()=>{
    pathname==='/lista' && setToggled(true)
  },[pathname, setToggled]);
  return(
    <Wrapper toggled={toggled}>
      <ContentArea toggled={toggled}>
        <Container toggled={toggled}>
          <Header toggled={toggled}/>
          <SearchBox toggled={toggled}/>
          {!toggled && (
            <ButtonWrapper>
              <DefaultButton alt="vamos lá" onClick={()=> setToggled(true) }>
                Vamos lá
              </DefaultButton>
            </ButtonWrapper>
          )}
        </Container>
        {toggled && (
          <List />
        )}
      </ContentArea>
      <Background src={BackgroundImage} toggled={toggled}/>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  state: state.SpaView
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SpaView);