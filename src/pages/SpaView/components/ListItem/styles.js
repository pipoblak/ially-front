import styled from 'styled-components';
import colors from 'variables/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 138px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 32px;
`;

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
`;

export const Divisor = styled.div`
  width: 1px;
  height: 40px;
  background: #d1d1d1;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #8C8C8C;
  margin-bottom: 8px;
  text-align: center;
`;

export const SubTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #8C8C8C;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.h2`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${colors.primary};
  margin-left: 16px;
`;


