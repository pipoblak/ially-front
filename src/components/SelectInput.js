import React from 'react';
import styled from 'styled-components';
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

export const SelectInput = ({label, placeholder, options, ...props}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      'borderColor': 'red',
      width: '90%',
      'boxShadow': 'none',
      '&:hover': {
        'borderColor': '#fff',
        'boxShadow': 'none'
      }
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0
    }),
    placeholder: (provided) => ({
      ...provided,
      margin: 0,
      fontSize: 18
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      opacity: 0
    }),
  }
  return(
    <Wrapper>
      <Label>{label}</Label>
      <Select
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        {...props}
      />
    </Wrapper>
  )
}
