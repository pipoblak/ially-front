import React, { useState } from 'react';
import styled from 'styled-components';
import colors from 'variables/colors';

export const ListWrapper = styled.div`
  background: #F4F4F4;
  height: 100%;
  flex: 1;
  display: flex;
  padding: 32px;
  overflow: auto;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const ListItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Filler = styled.div`
  min-width: 310px;
  width: calc( 25% - 34px);
  margin: 16px;
`;

const ItemWrapper = styled.div`
  min-width: 310px;
  width: calc( 25% - 34px);
  margin: 16px;
  height: 46px;
  border: 1px solid #E2E2E2;
  background: white;
  display: flex;
  user-select: none;
  &:hover > :first-child{
    ${p=> !p.selected && `background-color: #cfe7ff`}
  }
`;

const ServiceWrapper = styled.div`
  background: ${p=> p.selected ? colors.primary : '#fff'};
  ${p=> !p.selected && 'border-right: 1px solid #E2E2E2;'}
  flex: 1.3;
  color: ${p=> !p.selected ? '#797979' : '#fff'};
  justify-content: center;
  align-items: center;
  display: flex;
  
`;

const PriceWrapper = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${colors.primary};
  font-weight: 500;
  text-align: center;
`;

export const Item = () => {
  const [toggled, setToggled] = useState(false);
  return(
    <ItemWrapper onClick={()=> setToggled(!toggled)} selected={toggled}>
      <ServiceWrapper selected={toggled}>
        Escapamento
      </ServiceWrapper>
      <PriceWrapper>
        R$ 100 + peças
      </PriceWrapper>
    </ItemWrapper>
  );
}