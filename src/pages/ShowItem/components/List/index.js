import React from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from "react-spinners";
import { ListWrapper } from './styles';
import ListItem from '../ListItem';
import colors from 'variables/colors';

const List = ({ loading }) =>{
  return(
    <ListWrapper>
      <BounceLoader
        size={60}
        color={colors.primary}
        loading={loading}
      />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ListWrapper>
  );  
};

const mapStateToProps = state => ({
  loading: state.SpaView.loading
});

export default connect(mapStateToProps)(List);
