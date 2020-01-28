import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, DefaultButton } from 'components';
import BackgroundImage from '../../background.svg';
import { Creators } from 'store/ducks/SpaView';
import Item from './components/Item';
import ItemContent from './components/ItemContent';
import { Wrapper, ContentArea, Container, BackLink, Background } from './styles';

const SpaView = ({ history, ...rest }) => {
  return(
    <Wrapper toggled={true}>
      <ContentArea toggled={true}>
        <Container toggled={true}>
          <Header toggled={true}/>
          <BackLink href="/lista"> ver outras opções</BackLink>
          <Item />
        </Container>
      <ItemContent />
      </ContentArea>
      <Background src={BackgroundImage} toggled={true}/>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  state: state.SpaView
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SpaView);