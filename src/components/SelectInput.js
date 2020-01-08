import React from 'react';
import styled from 'styled-components';
import Colors from 'variables/colors';
import Select from 'react-select';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  font-size: 16px;
  color: #9B9B9B;
  margin-bottom: 16px;
`;

export const SelectInput = ({label, placeholder, options,  ...props}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      'border-color': 'red',
      width: '90%',
      'box-shadow': 'none',
      '&:hover': {
        'border-color': '#fff',
        'box-shadow': 'none'
      }
    }),
    input: (provided, state) => ({
      
    }),
  }
  return(
    <Wrapper {...props}>
      <Label>{label}</Label>
      <Select
        options={options}
        placeholder={placeholder}
        styles={customStyles}
      />
    </Wrapper>
  )
}
