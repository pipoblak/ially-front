import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from 'components';
import { Wrapper, TextWrapper, Title, SubTitle, Value, Divisor, Link } from './styles';
import AvatarImage from 'avatar.png';


const ListItem = ({ loading }) =>{
  const history = useHistory();
  return(
    <Wrapper onClick={()=> history.push('/lista/:uuid')}>
      <Avatar source={AvatarImage} size={72}/>
      <TextWrapper>
        <Title>Mônaco Serviços Automotivos</Title>
        <SubTitle>Mêcanica Geral | Escapamentos | Amortecedor</SubTitle>
        <SubTitle>Média de mão de obra <Value>R$ 80,00</Value></SubTitle>
      </TextWrapper>
      <Divisor/>
      <TextWrapper>
        <Title> Av. Fagundes Filho, 317 - São Judas, São Paulo - SP</Title>
        <Title style={{marginTop: 8}}> (11) 2578-4917</Title>
      </TextWrapper>
      <Divisor />
      <TextWrapper>
        <Link href="#">VER MAIS INFORMAÇÕES</Link>
      </TextWrapper>
    </Wrapper>
  );  
};


export default ListItem;
