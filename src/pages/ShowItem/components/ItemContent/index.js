import React from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from "react-spinners";
import { ListWrapper, ListItems, Item, Filler } from './styles';
import colors from 'variables/colors';

const ItemContent = ({ loading }) =>{
  return(
    <ListWrapper>
      <BounceLoader
        size={60}
        color={colors.primary}
        loading={loading}
      />
      <ListItems>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Filler />
        <Filler />
        <Filler />
      </ListItems>
      
    </ListWrapper>
  );  
};

const mapStateToProps = state => ({
  loading: state.SpaView.loading
});

export default connect(mapStateToProps)(ItemContent);
