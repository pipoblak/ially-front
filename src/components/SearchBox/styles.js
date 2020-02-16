import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${p=> !p.toggled ? '900px':'100%'};
  border:  ${p=> !p.toggled ? '1px solid #eee' : 'none'};
  border-bottom:  ${p=> p.toggled ? '1px solid #eee' : 'none'};
  border-radius: 6px;
  background: rgba(255,255,255,1);
  padding: ${p=> !p.toggled ? '32px' : '0 32px'};
  padding-bottom:  ${p=> p.toggled ? '16px' : '16px  '};
  display: flex;
  flex-direction: row;
`;
