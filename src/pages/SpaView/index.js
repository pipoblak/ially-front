import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, SearchBox, DefaultButton } from 'components';
import BackgroundImage from '../../background.svg';
import { Creators } from 'store/ducks/SpaView';
import List from './components/List';
import { Wrapper, ContentArea, Container, ButtonWrapper, Background } from './styles';

const SpaView = ({ history, toggled: routeToggled, state:{ toggled, loading}, setToggled, ...rest }) => {
  const toggledState = routeToggled || toggled;
  useEffect(()=>{
    setToggled(routeToggled)
  },[routeToggled, setToggled]);
  return(
    <Wrapper toggled={toggledState}>
      <ContentArea toggled={toggledState}>
        <Container toggled={toggledState}>
          <Header toggled={toggledState}/>
          <SearchBox toggled={toggledState}/>
          {!toggledState && (
            <ButtonWrapper>
              <DefaultButton alt="vamos lá" onClick={()=> history.push('lista') }>
                Vamos lá
              </DefaultButton>
            </ButtonWrapper>
          )}
        </Container>
        {toggledState && (
          <List />
        )}
      </ContentArea>
      <Background src={BackgroundImage} toggled={toggledState}/>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  state: state.SpaView
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SpaView);