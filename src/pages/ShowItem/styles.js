import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden
`;

export const ContentArea = styled.div`
  position: relative;
  z-index: 1;
  top: 50%;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: ${p=> p.toggled ? '100%' : '368px'};
  transition: all .25s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  ${p => p.toggled && 'top: 0;'}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  top: -50%;
  transition: all .25s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  ${p => p.toggled && 'top: 0;'}
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.img`
  width: 100%;
  position: absolute;
  bottom: ${p=> p.toggled ? '-100%': 0};
  transition: all .35s;
  z-index: 0;
`;
